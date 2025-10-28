// Global variables
let currentCountry = 'philippines';
let currentLocation = 'manila';

// Get current currency
function getCurrentCurrency() {
    return globalData.countries[currentCountry]?.currency || '₱';
}

// Get current currency code
function getCurrentCurrencyCode() {
    return globalData.countries[currentCountry]?.currencyCode || 'PHP';
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateCountries();
    populateLocations();
    populateOriginDestination();
    updateCurrencyLabels();
    setupEventListeners();
    initializeMap();
    initializeBlockchain();
}

function populateCountries() {
    const countryContainer = document.getElementById('countryContainer');
    if (!countryContainer) return;

    countryContainer.innerHTML = '';
    
    Object.keys(globalData.countries).forEach(countryKey => {
        const country = globalData.countries[countryKey];
        const countryOption = document.createElement('div');
        countryOption.className = 'country-option';
        countryOption.innerHTML = `
            <input type="radio" id="country-${countryKey}" name="country" value="${countryKey}" ${countryKey === currentCountry ? 'checked' : ''}>
            <label for="country-${countryKey}">${country.flag} ${country.name}</label>
        `;
        countryContainer.appendChild(countryOption);
    });
}

function populateLocations() {
    const locationSelect = document.getElementById('location');
    if (!locationSelect) return;

    locationSelect.innerHTML = '<option value="">-- Select Location --</option>';
    
    const country = globalData.countries[currentCountry];
    if (country && country.locations) {
        Object.keys(country.locations).forEach(locationKey => {
            const location = country.locations[locationKey];
            const option = document.createElement('option');
            option.value = locationKey;
            option.textContent = location.name;
            if (locationKey === currentLocation) {
                option.selected = true;
            }
            locationSelect.appendChild(option);
        });
    }
}

function populateOriginDestination() {
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    
    if (!originSelect || !destinationSelect) return;

    // Clear existing options
    originSelect.innerHTML = '<option value="">-- Select Origin --</option>';
    destinationSelect.innerHTML = '<option value="">-- Select Destination --</option>';

    const country = globalData.countries[currentCountry];
    const location = country?.locations?.[currentLocation];
    
    if (location && location.areas) {
        location.areas.forEach(area => {
            const areaKey = area.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
            
            // Add to origin
            const originOption = document.createElement('option');
            originOption.value = areaKey;
            originOption.textContent = area;
            originSelect.appendChild(originOption);
            
            // Add to destination
            const destOption = document.createElement('option');
            destOption.value = areaKey;
            destOption.textContent = area;
            destinationSelect.appendChild(destOption);
        });
    }
}

function setupEventListeners() {
    // Country selection
    const countryRadios = document.querySelectorAll('input[name="country"]');
    countryRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                currentCountry = this.value;
                // Reset to first location of new country
                const country = globalData.countries[currentCountry];
                currentLocation = Object.keys(country.locations)[0];
                populateLocations();
                populateOriginDestination();
                updateCurrencyLabels();
                updateMap();
            }
        });
    });

    // Location selection
    const locationSelect = document.getElementById('location');
    if (locationSelect) {
        locationSelect.addEventListener('change', function() {
            currentLocation = this.value;
            populateOriginDestination();
            updateMap();
        });
    }
}

function updateCurrencyLabels() {
    const currency = getCurrentCurrency();
    const currencyCode = getCurrentCurrencyCode();
    
    // Update gas price labels
    const gasPriceLabels = document.querySelectorAll('input[name="gasPrice"] + label');
    gasPriceLabels.forEach(label => {
        const value = label.previousElementSibling.value;
        label.textContent = `${currency}${value}`;
    });
    
    // Update baggage fee label
    const baggageLabel = document.querySelector('label[for="baggage"]');
    if (baggageLabel) {
        baggageLabel.textContent = `Add Baggage Fee (${currency}10.00)`;
    }
    
    // Update gas price section label
    const gasPriceSectionLabel = document.querySelector('label[for="gasPrice"]');
    if (gasPriceSectionLabel) {
        gasPriceSectionLabel.textContent = `Current Gas Price (${currency} per liter)`;
    }
}

async function calculateFare() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const gasPrice = document.querySelector('input[name="gasPrice"]:checked')?.value;
    const passengerType = document.querySelector('input[name="passengerType"]:checked')?.value;
    const baggage = document.getElementById('baggage').checked;

    if (!origin || !destination) {
        alert('Please select both origin and destination');
        return;
    }

    if (origin === destination) {
        alert('Origin and destination cannot be the same');
        return;
    }

    if (!gasPrice || !passengerType) {
        alert('Please select gas price and passenger type');
        return;
    }

    // Calculate distance
    const distanceKey = `${origin}-${destination}`;
    const reverseKey = `${destination}-${origin}`;
    
    let distance = 2.0; // Default distance
    
    if (globalData.distances[currentCountry] && globalData.distances[currentCountry][currentLocation]) {
        const locationDistances = globalData.distances[currentCountry][currentLocation];
        distance = locationDistances[distanceKey] || locationDistances[reverseKey] || 2.0;
    }
    
    // Add 8% for road curves as mentioned in original
    distance = distance * 1.08;

    // Get fare rate
    const rate = globalData.fareRates[currentCountry][gasPrice];
    
    // Calculate base fare
    const baseFare = distance * rate;
    
    // Apply passenger discount (20% for students/seniors/PWD)
    const discount = passengerType === 'student' ? 0.2 : 0;
    const discountedFare = baseFare * (1 - discount);
    
    // Add baggage fee
    const baggageFee = baggage ? 10 : 0;
    const finalFare = discountedFare + baggageFee;

    // Get location names and currency
    const originName = getLocationName(origin);
    const destinationName = getLocationName(destination);
    const countryName = globalData.countries[currentCountry].name;
    const locationName = globalData.countries[currentCountry].locations[currentLocation].name;
    const currency = getCurrentCurrency();

    // Display results
    document.getElementById('fareAmount').textContent = `${currency}${finalFare.toFixed(2)}`;
    document.getElementById('route').textContent = `${originName} → ${destinationName}`;
    document.getElementById('distance').textContent = `${distance.toFixed(1)} km`;
    document.getElementById('passengerType').textContent = passengerType === 'student' ? 'Student/Senior/PWD' : 'Regular';
    document.getElementById('gasPriceDisplay').textContent = `${currency}${gasPrice}/L`;
    document.getElementById('baggageFee').textContent = `${currency}${baggageFee.toFixed(2)}`;
    document.getElementById('regularFare').textContent = `${currency}${(baseFare + baggageFee).toFixed(2)}`;
    document.getElementById('discountedFare').textContent = `${currency}${finalFare.toFixed(2)}`;
    document.getElementById('rateUsed').textContent = `${currency}${rate}/km`;
    document.getElementById('countryLocation').textContent = `${countryName} - ${locationName}`;

    document.getElementById('result').style.display = 'block';

    // Blockchain integration - record transaction if wallet is connected
    if (walletConnection.connected) {
        await recordFareTransaction(originName, destinationName, distance, finalFare, currency);
    }
}

function resetForm() {
    document.getElementById('fareForm').reset();
    document.getElementById('result').style.display = 'none';
    document.querySelector('input[name="gasPrice"][value="51-60"]').checked = true;
    document.querySelector('input[name="passengerType"][value="regular"]').checked = true;
    document.querySelector('input[name="country"][value="philippines"]').checked = true;
    
    // Reset to default country and location
    currentCountry = 'philippines';
    currentLocation = 'manila';
    populateLocations();
    populateOriginDestination();
    updateMap();
    resetMapSelection();
}

function getLocationName(value) {
    const country = globalData.countries[currentCountry];
    const location = country?.locations?.[currentLocation];
    
    if (location && location.areas) {
        const area = location.areas.find(area => 
            area.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '') === value
        );
        if (area) return area;
    }
    
    return value;
}

// Map-related functions
function initializeMap() {
    // Map will be initialized when user clicks "Show Map" button
    console.log('Map system ready');
}

function updateMap() {
    if (mapRenderer && !document.getElementById('mapContainer').classList.contains('hidden')) {
        initMap(currentCountry, currentLocation);
    }
}

function toggleMap() {
    const mapContainer = document.getElementById('mapContainer');
    const toggleBtn = document.getElementById('mapToggleBtn');
    
    if (mapContainer.classList.contains('hidden')) {
        mapContainer.classList.remove('hidden');
        toggleBtn.textContent = 'Hide Map';
        toggleBtn.classList.add('active');
        
        // Initialize map
        initMap(currentCountry, currentLocation);
    } else {
        mapContainer.classList.add('hidden');
        toggleBtn.textContent = 'Show Map';
        toggleBtn.classList.remove('active');
    }
}

function resetMapSelection() {
    if (typeof resetMapSelection === 'function') {
        resetMapSelection();
    }
}

// Blockchain integration functions
function initializeBlockchain() {
    if (typeof blockchainUI !== 'undefined') {
        blockchainUI.init();
    }
}

async function recordFareTransaction(origin, destination, distance, fare, currency) {
    try {
        if (typeof demoWallet !== 'undefined' && demoWallet.isConnected) {
            const result = await demoWallet.executeFareCalculation(
                origin, destination, distance, fare, currency
            );
            
            if (result.success) {
                // Update UI
                if (typeof blockchainUI !== 'undefined') {
                    blockchainUI.updateTransactionHistory();
                    blockchainUI.updateTokenBalances();
                    blockchainUI.updatePointsDisplay();
                    blockchainUI.updateStorageStats();
                    blockchainUI.showNotification(
                        `Transaction recorded! Used ${result.pointsUsed} points. Remaining: ${result.remainingPoints}`, 
                        'success'
                    );
                }
            } else {
                blockchainUI.showNotification(`Transaction failed: ${result.error}`, 'error');
            }
        }
    } catch (error) {
        console.error('Error recording transaction:', error);
        if (typeof blockchainUI !== 'undefined') {
            blockchainUI.showNotification(`Error: ${error.message}`, 'error');
        }
    }
}

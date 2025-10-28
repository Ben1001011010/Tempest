// Map Renderer for Interactive Fare Calculator
class MapRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.canvas = null;
        this.ctx = null;
        this.points = [];
        this.selectedOrigin = null;
        this.selectedDestination = null;
        this.mapConfig = null;
        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.isDragging = false;
        this.dragStart = { x: 0, y: 0 };
        this.tooltip = null;
        this.onPointClick = null;
        this.onPointHover = null;
    }

    // Initialize the map
    init(country, location) {
        this.mapConfig = mapConfig[country]?.[location];
        if (!this.mapConfig) {
            this.showError('Map not available for this location');
            return;
        }

        this.createCanvas();
        this.setupEventListeners();
        this.render();
    }

    // Create canvas element
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'map-canvas';
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
        
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        // Create tooltip
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'map-tooltip';
        this.tooltip.style.display = 'none';
        this.container.appendChild(this.tooltip);
    }

    // Setup event listeners
    setupEventListeners() {
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.canvas.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
        
        // Resize handler
        window.addEventListener('resize', () => this.handleResize());
    }

    // Render the map
    render() {
        if (!this.ctx || !this.mapConfig) return;

        this.clearCanvas();
        this.drawBackground();
        this.drawPoints();
        this.drawLegend();
        this.drawInstructions();
        this.drawStatus();
    }

    // Clear canvas
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Draw background
    drawBackground() {
        // Create gradient background
        const gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        gradient.addColorStop(0, '#e3f2fd');
        gradient.addColorStop(1, '#f3e5f5');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw grid
        this.drawGrid();
    }

    // Draw grid
    drawGrid() {
        this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.lineWidth = 1;
        
        const gridSize = 50;
        for (let x = 0; x < this.canvas.width; x += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.canvas.height);
            this.ctx.stroke();
        }
        
        for (let y = 0; y < this.canvas.height; y += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.canvas.width, y);
            this.ctx.stroke();
        }
    }

    // Draw points
    drawPoints() {
        this.points = [];
        
        this.mapConfig.points.forEach(point => {
            const screenPos = this.latLngToScreen(point.lat, point.lng);
            const pointType = pointTypes[point.type] || pointTypes.business;
            
            // Store point data
            this.points.push({
                ...point,
                screenX: screenPos.x,
                screenY: screenPos.y,
                pointType: pointType
            });

            // Draw point
            this.drawPoint(screenPos.x, screenPos.y, pointType, point);
        });
    }

    // Draw individual point
    drawPoint(x, y, pointType, point) {
        const isSelected = this.selectedOrigin === point.id || this.selectedDestination === point.id;
        const radius = isSelected ? 15 : 12;
        
        // Draw shadow
        this.ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        this.ctx.shadowBlur = 4;
        this.ctx.shadowOffsetX = 2;
        this.ctx.shadowOffsetY = 2;
        
        // Draw point circle
        this.ctx.fillStyle = pointType.color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
        
        // Draw border
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        
        // Draw icon
        this.ctx.fillStyle = 'white';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(pointType.icon, x, y);
        
        // Reset shadow
        this.ctx.shadowColor = 'transparent';
        this.ctx.shadowBlur = 0;
        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;
    }

    // Draw legend
    drawLegend() {
        const legendX = this.canvas.width - 220;
        const legendY = 20;
        const legendWidth = 200;
        const legendHeight = 150;
        
        // Draw legend background
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        this.ctx.fillRect(legendX, legendY, legendWidth, legendHeight);
        
        // Draw legend border
        this.ctx.strokeStyle = '#ddd';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legendX, legendY, legendWidth, legendHeight);
        
        // Draw legend title
        this.ctx.fillStyle = '#333';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Map Legend', legendX + 10, legendY + 20);
        
        // Draw legend items
        const uniqueTypes = [...new Set(this.mapConfig.points.map(p => p.type))];
        uniqueTypes.slice(0, 6).forEach((type, index) => {
            const pointType = pointTypes[type] || pointTypes.business;
            const itemY = legendY + 40 + (index * 20);
            
            // Draw color circle
            this.ctx.fillStyle = pointType.color;
            this.ctx.beginPath();
            this.ctx.arc(legendX + 15, itemY, 6, 0, 2 * Math.PI);
            this.ctx.fill();
            
            // Draw text
            this.ctx.fillStyle = '#666';
            this.ctx.font = '12px Arial';
            this.ctx.fillText(pointType.name, legendX + 30, itemY + 4);
        });
    }

    // Draw instructions
    drawInstructions() {
        const instructionsX = 20;
        const instructionsY = 20;
        const instructionsWidth = 250;
        const instructionsHeight = 100;
        
        // Draw instructions background
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        this.ctx.fillRect(instructionsX, instructionsY, instructionsWidth, instructionsHeight);
        
        // Draw instructions border
        this.ctx.strokeStyle = '#ddd';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(instructionsX, instructionsY, instructionsWidth, instructionsHeight);
        
        // Draw instructions text
        this.ctx.fillStyle = '#333';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Map Instructions', instructionsX + 10, instructionsY + 20);
        
        this.ctx.fillStyle = '#666';
        this.ctx.font = '11px Arial';
        this.ctx.fillText('1. Click a point to set as origin', instructionsX + 10, instructionsY + 40);
        this.ctx.fillText('2. Click another point for destination', instructionsX + 10, instructionsY + 55);
        this.ctx.fillText('3. Fare will be calculated automatically', instructionsX + 10, instructionsY + 70);
    }

    // Draw status
    drawStatus() {
        const statusX = this.canvas.width - 200;
        const statusY = this.canvas.height - 40;
        const statusWidth = 180;
        const statusHeight = 30;
        
        let statusText = 'Click a point to start';
        let statusColor = '#6b7280';
        
        if (this.selectedOrigin && !this.selectedDestination) {
            statusText = 'Now select destination';
            statusColor = '#22c55e';
        } else if (this.selectedOrigin && this.selectedDestination) {
            statusText = 'Ready to calculate fare';
            statusColor = '#3b82f6';
        }
        
        // Draw status background
        this.ctx.fillStyle = statusColor;
        this.ctx.fillRect(statusX, statusY, statusWidth, statusHeight);
        
        // Draw status text
        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(statusText, statusX + statusWidth/2, statusY + 20);
    }

    // Convert lat/lng to screen coordinates
    latLngToScreen(lat, lng) {
        // Simple projection (in a real app, you'd use proper map projection)
        const centerLat = this.mapConfig.center.lat;
        const centerLng = this.mapConfig.center.lng;
        
        const x = (lng - centerLng) * 1000 + this.canvas.width / 2;
        const y = (centerLat - lat) * 1000 + this.canvas.height / 2;
        
        return { x: x + this.offsetX, y: y + this.offsetY };
    }

    // Handle click events
    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const clickedPoint = this.getPointAt(x, y);
        if (clickedPoint) {
            this.selectPoint(clickedPoint);
        }
    }

    // Handle mouse move events
    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const hoveredPoint = this.getPointAt(x, y);
        if (hoveredPoint) {
            this.showTooltip(e, hoveredPoint);
            this.canvas.style.cursor = 'pointer';
        } else {
            this.hideTooltip();
            this.canvas.style.cursor = 'crosshair';
        }
    }

    // Handle mouse down events
    handleMouseDown(e) {
        this.isDragging = true;
        this.dragStart = { x: e.clientX, y: e.clientY };
    }

    // Handle mouse up events
    handleMouseUp(e) {
        this.isDragging = false;
    }

    // Handle mouse leave events
    handleMouseLeave(e) {
        this.hideTooltip();
        this.isDragging = false;
    }

    // Handle resize events
    handleResize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
        this.render();
    }

    // Get point at coordinates
    getPointAt(x, y) {
        return this.points.find(point => {
            const distance = Math.sqrt(
                Math.pow(x - point.screenX, 2) + Math.pow(y - point.screenY, 2)
            );
            return distance <= 20;
        });
    }

    // Select a point
    selectPoint(point) {
        if (!this.selectedOrigin) {
            this.selectedOrigin = point.id;
            if (this.onPointClick) {
                this.onPointClick('origin', point);
            }
        } else if (!this.selectedDestination && point.id !== this.selectedOrigin) {
            this.selectedDestination = point.id;
            if (this.onPointClick) {
                this.onPointClick('destination', point);
            }
        } else {
            // Reset selection
            this.selectedOrigin = point.id;
            this.selectedDestination = null;
            if (this.onPointClick) {
                this.onPointClick('origin', point);
            }
        }
        
        this.render();
    }

    // Show tooltip
    showTooltip(e, point) {
        this.tooltip.textContent = `${point.pointType.icon} ${point.name}`;
        this.tooltip.style.display = 'block';
        this.tooltip.style.left = e.clientX + 'px';
        this.tooltip.style.top = (e.clientY - 40) + 'px';
    }

    // Hide tooltip
    hideTooltip() {
        this.tooltip.style.display = 'none';
    }

    // Show error
    showError(message) {
        this.container.innerHTML = `
            <div class="map-loading">
                <div class="text">${message}</div>
            </div>
        `;
    }

    // Reset selection
    resetSelection() {
        this.selectedOrigin = null;
        this.selectedDestination = null;
        this.render();
    }

    // Set callbacks
    setOnPointClick(callback) {
        this.onPointClick = callback;
    }

    setOnPointHover(callback) {
        this.onPointHover = callback;
    }
}

// Global map instance
let mapRenderer = null;

// Initialize map
function initMap(country, location) {
    if (mapRenderer) {
        mapRenderer.container.innerHTML = '';
    }
    
    mapRenderer = new MapRenderer('mapContainer');
    mapRenderer.init(country, location);
    
    // Set up point click handler
    mapRenderer.setOnPointClick((type, point) => {
        handleMapPointClick(type, point);
    });
}

// Handle map point clicks
function handleMapPointClick(type, point) {
    if (type === 'origin') {
        // Update origin dropdown
        const originSelect = document.getElementById('origin');
        if (originSelect) {
            originSelect.value = point.id;
        }
    } else if (type === 'destination') {
        // Update destination dropdown
        const destinationSelect = document.getElementById('destination');
        if (destinationSelect) {
            destinationSelect.value = point.id;
        }
        
        // Auto-calculate fare
        setTimeout(() => {
            calculateFare();
        }, 100);
    }
}

// Toggle map visibility
function toggleMap() {
    const mapContainer = document.getElementById('mapContainer');
    const toggleBtn = document.getElementById('mapToggleBtn');
    
    if (mapContainer.classList.contains('hidden')) {
        mapContainer.classList.remove('hidden');
        toggleBtn.textContent = 'Hide Map';
        toggleBtn.classList.add('active');
        
        // Initialize map if not already done
        if (!mapRenderer) {
            initMap(currentCountry, currentLocation);
        }
    } else {
        mapContainer.classList.add('hidden');
        toggleBtn.textContent = 'Show Map';
        toggleBtn.classList.remove('active');
    }
}

// Reset map selection
function resetMapSelection() {
    if (mapRenderer) {
        mapRenderer.resetSelection();
    }
}

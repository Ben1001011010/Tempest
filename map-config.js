// Map configuration for each country location
const mapConfig = {
    'philippines': {
        'manila': {
            center: { lat: 14.5995, lng: 120.9842 },
            zoom: 11,
            points: [
                { id: 'makati', name: 'Makati', lat: 14.5547, lng: 121.0244, type: 'business' },
                { id: 'taguig', name: 'Taguig', lat: 14.5176, lng: 121.0509, type: 'business' },
                { id: 'quezoncity', name: 'Quezon City', lat: 14.6760, lng: 121.0437, type: 'residential' },
                { id: 'manila', name: 'Manila', lat: 14.5995, lng: 120.9842, type: 'historical' },
                { id: 'pasig', name: 'Pasig', lat: 14.5764, lng: 121.0851, type: 'business' },
                { id: 'mandaluyong', name: 'Mandaluyong', lat: 14.5794, lng: 121.0359, type: 'business' },
                { id: 'sanjuan', name: 'San Juan', lat: 14.6039, lng: 121.0334, type: 'residential' },
                { id: 'marikina', name: 'Marikina', lat: 14.6507, lng: 121.1029, type: 'residential' },
                { id: 'pasay', name: 'Pasay', lat: 14.5378, lng: 121.0014, type: 'airport' },
                { id: 'paranaque', name: 'Parañaque', lat: 14.4793, lng: 121.0198, type: 'residential' },
                { id: 'laspinas', name: 'Las Piñas', lat: 14.4506, lng: 120.9828, type: 'residential' },
                { id: 'muntinlupa', name: 'Muntinlupa', lat: 14.4146, lng: 121.0403, type: 'residential' },
                { id: 'caloocan', name: 'Caloocan', lat: 14.6548, lng: 120.9843, type: 'residential' },
                { id: 'malabon', name: 'Malabon', lat: 14.6695, lng: 120.9572, type: 'residential' },
                { id: 'navotas', name: 'Navotas', lat: 14.6783, lng: 120.9512, type: 'port' },
                { id: 'valenzuela', name: 'Valenzuela', lat: 14.7000, lng: 120.9833, type: 'industrial' },
                { id: 'pateros', name: 'Pateros', lat: 14.5451, lng: 121.0689, type: 'residential' },
                { id: 'bgc', name: 'BGC', lat: 14.5533, lng: 121.0508, type: 'business' },
                { id: 'ortigas', name: 'Ortigas', lat: 14.5858, lng: 121.0562, type: 'business' },
                { id: 'cubao', name: 'Cubao', lat: 14.6187, lng: 121.0565, type: 'commercial' },
                { id: 'greenhills', name: 'Greenhills', lat: 14.6104, lng: 121.0300, type: 'commercial' },
                { id: 'alabang', name: 'Alabang', lat: 14.4194, lng: 121.0275, type: 'business' },
                { id: 'rockwell', name: 'Rockwell', lat: 14.5639, lng: 121.0325, type: 'business' }
            ]
        },
        'cebu': {
            center: { lat: 10.3157, lng: 123.8854 },
            zoom: 11,
            points: [
                { id: 'cebucity', name: 'Cebu City', lat: 10.3157, lng: 123.8854, type: 'business' },
                { id: 'lahug', name: 'Lahug', lat: 10.3200, lng: 123.9000, type: 'residential' },
                { id: 'mabolo', name: 'Mabolo', lat: 10.3100, lng: 123.8900, type: 'residential' },
                { id: 'banilad', name: 'Banilad', lat: 10.3300, lng: 123.9200, type: 'residential' },
                { id: 'talamban', name: 'Talamban', lat: 10.3500, lng: 123.9000, type: 'residential' },
                { id: 'mandaue', name: 'Mandaue', lat: 10.3333, lng: 123.9333, type: 'business' },
                { id: 'lapulapu', name: 'Lapu-Lapu', lat: 10.3103, lng: 123.9494, type: 'airport' },
                { id: 'consolacion', name: 'Consolacion', lat: 10.4000, lng: 123.9500, type: 'residential' },
                { id: 'cordova', name: 'Cordova', lat: 10.2500, lng: 123.9500, type: 'residential' },
                { id: 'liloan', name: 'Liloan', lat: 10.4000, lng: 123.9800, type: 'residential' },
                { id: 'compostela', name: 'Compostela', lat: 10.4500, lng: 123.9500, type: 'residential' },
                { id: 'talisay', name: 'Talisay', lat: 10.2500, lng: 123.8500, type: 'residential' },
                { id: 'minglanilla', name: 'Minglanilla', lat: 10.2000, lng: 123.8000, type: 'residential' },
                { id: 'naga', name: 'Naga', lat: 10.2000, lng: 123.7500, type: 'residential' },
                { id: 'sanfernando', name: 'San Fernando', lat: 10.1500, lng: 123.7000, type: 'residential' },
                { id: 'carcar', name: 'Carcar', lat: 10.1000, lng: 123.6500, type: 'historical' },
                { id: 'argao', name: 'Argao', lat: 10.0000, lng: 123.6000, type: 'residential' },
                { id: 'dalaguete', name: 'Dalaguete', lat: 9.9000, lng: 123.5500, type: 'residential' },
                { id: 'alcoy', name: 'Alcoy', lat: 9.8000, lng: 123.5000, type: 'residential' },
                { id: 'boljoon', name: 'Boljoon', lat: 9.7000, lng: 123.4500, type: 'historical' }
            ]
        },
        'davao': {
            center: { lat: 7.1907, lng: 125.4553 },
            zoom: 11,
            points: [
                { id: 'davaocity', name: 'Davao City', lat: 7.1907, lng: 125.4553, type: 'business' },
                { id: 'bajada', name: 'Bajada', lat: 7.1800, lng: 125.4500, type: 'commercial' },
                { id: 'matina', name: 'Matina', lat: 7.2000, lng: 125.4700, type: 'residential' },
                { id: 'toril', name: 'Toril', lat: 7.1500, lng: 125.4000, type: 'residential' },
                { id: 'calinan', name: 'Calinan', lat: 7.1000, lng: 125.3500, type: 'residential' },
                { id: 'tugbok', name: 'Tugbok', lat: 7.2500, lng: 125.5000, type: 'residential' },
                { id: 'buhangin', name: 'Buhangin', lat: 7.2200, lng: 125.4800, type: 'residential' },
                { id: 'agdao', name: 'Agdao', lat: 7.1700, lng: 125.4600, type: 'residential' },
                { id: 'poblacion', name: 'Poblacion', lat: 7.1907, lng: 125.4553, type: 'business' },
                { id: 'talomo', name: 'Talomo', lat: 7.1600, lng: 125.4400, type: 'residential' },
                { id: 'marilog', name: 'Marilog', lat: 7.3000, lng: 125.6000, type: 'mountain' },
                { id: 'paquibato', name: 'Paquibato', lat: 7.3500, lng: 125.6500, type: 'mountain' },
                { id: 'baguio', name: 'Baguio', lat: 7.2000, lng: 125.6000, type: 'mountain' },
                { id: 'eden', name: 'Eden', lat: 7.2500, lng: 125.5500, type: 'mountain' },
                { id: 'samalisland', name: 'Samal Island', lat: 7.0500, lng: 125.7000, type: 'island' },
                { id: 'panabo', name: 'Panabo', lat: 7.3000, lng: 125.7000, type: 'residential' },
                { id: 'tagum', name: 'Tagum', lat: 7.4000, lng: 125.8000, type: 'business' },
                { id: 'digos', name: 'Digos', lat: 6.7500, lng: 125.3500, type: 'business' },
                { id: 'mati', name: 'Mati', lat: 6.9500, lng: 126.2000, type: 'coastal' },
                { id: 'maco', name: 'Maco', lat: 7.1000, lng: 125.8000, type: 'residential' }
            ]
        }
    },
    'usa': {
        'newyork': {
            center: { lat: 40.7128, lng: -74.0060 },
            zoom: 11,
            points: [
                { id: 'manhattan', name: 'Manhattan', lat: 40.7831, lng: -73.9712, type: 'business' },
                { id: 'brooklyn', name: 'Brooklyn', lat: 40.6782, lng: -73.9442, type: 'residential' },
                { id: 'queens', name: 'Queens', lat: 40.7282, lng: -73.7949, type: 'residential' },
                { id: 'bronx', name: 'Bronx', lat: 40.8448, lng: -73.8648, type: 'residential' },
                { id: 'statenisland', name: 'Staten Island', lat: 40.5795, lng: -74.1502, type: 'residential' },
                { id: 'timessquare', name: 'Times Square', lat: 40.7580, lng: -73.9855, type: 'tourist' },
                { id: 'centralpark', name: 'Central Park', lat: 40.7829, lng: -73.9654, type: 'park' },
                { id: 'wallstreet', name: 'Wall Street', lat: 40.7074, lng: -74.0113, type: 'business' },
                { id: 'chinatown', name: 'Chinatown', lat: 40.7158, lng: -73.9970, type: 'cultural' },
                { id: 'littleitaly', name: 'Little Italy', lat: 40.7191, lng: -73.9972, type: 'cultural' },
                { id: 'greenwichvillage', name: 'Greenwich Village', lat: 40.7336, lng: -74.0027, type: 'cultural' },
                { id: 'soho', name: 'SoHo', lat: 40.7231, lng: -74.0026, type: 'commercial' },
                { id: 'tribeca', name: 'TriBeCa', lat: 40.7163, lng: -74.0082, type: 'residential' }
            ]
        },
        'losangeles': {
            center: { lat: 34.0522, lng: -118.2437 },
            zoom: 10,
            points: [
                { id: 'downtownla', name: 'Downtown LA', lat: 34.0522, lng: -118.2437, type: 'business' },
                { id: 'hollywood', name: 'Hollywood', lat: 34.0928, lng: -118.3287, type: 'entertainment' },
                { id: 'beverlyhills', name: 'Beverly Hills', lat: 34.0736, lng: -118.4004, type: 'luxury' },
                { id: 'santamonica', name: 'Santa Monica', lat: 34.0195, lng: -118.4912, type: 'coastal' },
                { id: 'venicebeach', name: 'Venice Beach', lat: 33.9850, lng: -118.4695, type: 'coastal' },
                { id: 'westwood', name: 'Westwood', lat: 34.0689, lng: -118.4452, type: 'university' },
                { id: 'koreatown', name: 'Koreatown', lat: 34.0579, lng: -118.3007, type: 'cultural' },
                { id: 'littletokyo', name: 'Little Tokyo', lat: 34.0499, lng: -118.2392, type: 'cultural' },
                { id: 'chinatown', name: 'Chinatown', lat: 34.0623, lng: -118.2384, type: 'cultural' },
                { id: 'pasadena', name: 'Pasadena', lat: 34.1478, lng: -118.1445, type: 'residential' },
                { id: 'burbank', name: 'Burbank', lat: 34.1808, lng: -118.3090, type: 'entertainment' },
                { id: 'glendale', name: 'Glendale', lat: 34.1425, lng: -118.2551, type: 'residential' }
            ]
        }
    },
    'uk': {
        'london': {
            center: { lat: 51.5074, lng: -0.1278 },
            zoom: 11,
            points: [
                { id: 'westminster', name: 'Westminster', lat: 51.4994, lng: -0.1245, type: 'government' },
                { id: 'camden', name: 'Camden', lat: 51.5390, lng: -0.1426, type: 'cultural' },
                { id: 'islington', name: 'Islington', lat: 51.5388, lng: -0.1020, type: 'residential' },
                { id: 'hackney', name: 'Hackney', lat: 51.5450, lng: -0.0550, type: 'residential' },
                { id: 'towerhamlets', name: 'Tower Hamlets', lat: 51.5200, lng: -0.0300, type: 'business' },
                { id: 'greenwich', name: 'Greenwich', lat: 51.4769, lng: -0.0005, type: 'historical' },
                { id: 'southwark', name: 'Southwark', lat: 51.5034, lng: -0.0896, type: 'cultural' },
                { id: 'lambeth', name: 'Lambeth', lat: 51.4952, lng: -0.1120, type: 'residential' },
                { id: 'wandsworth', name: 'Wandsworth', lat: 51.4569, lng: -0.1920, type: 'residential' },
                { id: 'hammersmith', name: 'Hammersmith', lat: 51.4920, lng: -0.2230, type: 'residential' },
                { id: 'kensingtonandchelsea', name: 'Kensington & Chelsea', lat: 51.5020, lng: -0.1947, type: 'luxury' },
                { id: 'cityoflondon', name: 'City of London', lat: 51.5154, lng: -0.0902, type: 'business' }
            ]
        }
    },
    'japan': {
        'tokyo': {
            center: { lat: 35.6762, lng: 139.6503 },
            zoom: 11,
            points: [
                { id: 'shibuya', name: 'Shibuya', lat: 35.6580, lng: 139.7016, type: 'commercial' },
                { id: 'shinjuku', name: 'Shinjuku', lat: 35.6896, lng: 139.6917, type: 'business' },
                { id: 'harajuku', name: 'Harajuku', lat: 35.6702, lng: 139.7026, type: 'fashion' },
                { id: 'ginza', name: 'Ginza', lat: 35.6718, lng: 139.7650, type: 'luxury' },
                { id: 'roppongi', name: 'Roppongi', lat: 35.6627, lng: 139.7314, type: 'nightlife' },
                { id: 'akihabara', name: 'Akihabara', lat: 35.6984, lng: 139.7731, type: 'electronics' },
                { id: 'asakusa', name: 'Asakusa', lat: 35.7101, lng: 139.8107, type: 'historical' },
                { id: 'ueno', name: 'Ueno', lat: 35.7142, lng: 139.7773, type: 'cultural' },
                { id: 'ikebukuro', name: 'Ikebukuro', lat: 35.7295, lng: 139.7109, type: 'commercial' },
                { id: 'odaiba', name: 'Odaiba', lat: 35.6300, lng: 139.7800, type: 'entertainment' },
                { id: 'tsukiji', name: 'Tsukiji', lat: 35.6654, lng: 139.7706, type: 'market' },
                { id: 'yokohama', name: 'Yokohama', lat: 35.4437, lng: 139.6380, type: 'port' }
            ]
        }
    },
    'australia': {
        'sydney': {
            center: { lat: -33.8688, lng: 151.2093 },
            zoom: 11,
            points: [
                { id: 'cbd', name: 'CBD', lat: -33.8688, lng: 151.2093, type: 'business' },
                { id: 'bondi', name: 'Bondi', lat: -33.8915, lng: 151.2767, type: 'beach' },
                { id: 'manly', name: 'Manly', lat: -33.7969, lng: 151.2843, type: 'beach' },
                { id: 'darlingharbour', name: 'Darling Harbour', lat: -33.8708, lng: 151.2031, type: 'entertainment' },
                { id: 'therocks', name: 'The Rocks', lat: -33.8572, lng: 151.2089, type: 'historical' },
                { id: 'paddington', name: 'Paddington', lat: -33.8847, lng: 151.2319, type: 'residential' },
                { id: 'surryhills', name: 'Surry Hills', lat: -33.8886, lng: 151.2089, type: 'residential' },
                { id: 'newtown', name: 'Newtown', lat: -33.8978, lng: 151.1804, type: 'cultural' },
                { id: 'glebe', name: 'Glebe', lat: -33.8782, lng: 151.1889, type: 'residential' },
                { id: 'balmain', name: 'Balmain', lat: -33.8608, lng: 151.1804, type: 'residential' },
                { id: 'leichhardt', name: 'Leichhardt', lat: -33.8847, lng: 151.1567, type: 'residential' },
                { id: 'parramatta', name: 'Parramatta', lat: -33.8148, lng: 151.0018, type: 'business' }
            ]
        }
    },
    'canada': {
        'toronto': {
            center: { lat: 43.6532, lng: -79.3832 },
            zoom: 11,
            points: [
                { id: 'downtown', name: 'Downtown', lat: 43.6532, lng: -79.3832, type: 'business' },
                { id: 'yorkville', name: 'Yorkville', lat: 43.6700, lng: -79.3900, type: 'luxury' },
                { id: 'kensingtonmarket', name: 'Kensington Market', lat: 43.6550, lng: -79.4000, type: 'cultural' },
                { id: 'chinatown', name: 'Chinatown', lat: 43.6500, lng: -79.4000, type: 'cultural' },
                { id: 'littleitaly', name: 'Little Italy', lat: 43.6600, lng: -79.4100, type: 'cultural' },
                { id: 'queenwest', name: 'Queen West', lat: 43.6500, lng: -79.4100, type: 'fashion' },
                { id: 'distillerydistrict', name: 'Distillery District', lat: 43.6500, lng: -79.3600, type: 'cultural' },
                { id: 'harbourfront', name: 'Harbourfront', lat: 43.6400, lng: -79.3800, type: 'waterfront' },
                { id: 'entertainmentdistrict', name: 'Entertainment District', lat: 43.6500, lng: -79.3900, type: 'entertainment' },
                { id: 'financialdistrict', name: 'Financial District', lat: 43.6500, lng: -79.3800, type: 'business' }
            ]
        }
    }
};

// Map point types with colors and icons
const pointTypes = {
    'business': { color: '#2563eb', icon: '🏢', name: 'Business' },
    'residential': { color: '#16a34a', icon: '🏠', name: 'Residential' },
    'commercial': { color: '#dc2626', icon: '🛍️', name: 'Commercial' },
    'tourist': { color: '#ea580c', icon: '🎯', name: 'Tourist' },
    'cultural': { color: '#9333ea', icon: '🎭', name: 'Cultural' },
    'historical': { color: '#ca8a04', icon: '🏛️', name: 'Historical' },
    'airport': { color: '#0891b2', icon: '✈️', name: 'Airport' },
    'port': { color: '#0ea5e9', icon: '🚢', name: 'Port' },
    'park': { color: '#22c55e', icon: '🌳', name: 'Park' },
    'beach': { color: '#06b6d4', icon: '🏖️', name: 'Beach' },
    'mountain': { color: '#6b7280', icon: '⛰️', name: 'Mountain' },
    'island': { color: '#8b5cf6', icon: '🏝️', name: 'Island' },
    'coastal': { color: '#0ea5e9', icon: '🌊', name: 'Coastal' },
    'luxury': { color: '#f59e0b', icon: '💎', name: 'Luxury' },
    'entertainment': { color: '#ef4444', icon: '🎪', name: 'Entertainment' },
    'university': { color: '#3b82f6', icon: '🎓', name: 'University' },
    'government': { color: '#1f2937', icon: '🏛️', name: 'Government' },
    'fashion': { color: '#ec4899', icon: '👗', name: 'Fashion' },
    'nightlife': { color: '#7c3aed', icon: '🌃', name: 'Nightlife' },
    'electronics': { color: '#10b981', icon: '📱', name: 'Electronics' },
    'market': { color: '#f97316', icon: '🛒', name: 'Market' },
    'waterfront': { color: '#06b6d4', icon: '🌊', name: 'Waterfront' },
    'industrial': { color: '#6b7280', icon: '🏭', name: 'Industrial' }
};

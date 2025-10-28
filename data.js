// Global data for countries and their locations
const globalData = {
    countries: {
        'philippines': {
            name: 'Philippines',
            flag: '🇵🇭',
            currency: '₱',
            currencyCode: 'PHP',
            locations: {
                'manila': {
                    name: 'Metro Manila',
                    areas: [
                        'Makati', 'Taguig', 'Quezon City', 'Manila', 'Pasig',
                        'Mandaluyong', 'San Juan', 'Marikina', 'Pasay', 'Parañaque',
                        'Las Piñas', 'Muntinlupa', 'Caloocan', 'Malabon', 'Navotas',
                        'Valenzuela', 'Pateros', 'Bonifacio Global City', 'Ortigas',
                        'Cubao', 'Greenhills', 'Alabang', 'BGC', 'Rockwell'
                    ]
                },
                'cebu': {
                    name: 'Cebu',
                    areas: [
                        'Cebu City', 'Lahug', 'Mabolo', 'Banilad', 'Talamban',
                        'Mandaue', 'Lapu-Lapu', 'Consolacion', 'Cordova', 'Liloan',
                        'Compostela', 'Talisay', 'Minglanilla', 'Naga', 'San Fernando',
                        'Carcar', 'Argao', 'Dalaguete', 'Alcoy', 'Boljoon'
                    ]
                },
                'davao': {
                    name: 'Davao',
                    areas: [
                        'Davao City', 'Bajada', 'Matina', 'Toril', 'Calinan',
                        'Tugbok', 'Buhangin', 'Agdao', 'Poblacion', 'Talomo',
                        'Marilog', 'Paquibato', 'Baguio', 'Eden', 'Samal Island',
                        'Panabo', 'Tagum', 'Digos', 'Mati', 'Maco'
                    ]
                },
                'iloilo': {
                    name: 'Iloilo',
                    areas: [
                        'Iloilo City', 'Jaro', 'La Paz', 'Lapuz', 'Mandurriao',
                        'Molo', 'Villa Arevalo', 'Arevalo', 'City Proper', 'Oton',
                        'Pavia', 'Leganes', 'Zarraga', 'New Lucena', 'Santa Barbara',
                        'Cabatuan', 'Maasin', 'Alimodian', 'Leon', 'San Miguel'
                    ]
                },
                'bohol': {
                    name: 'Bohol',
                    areas: [
                        'Tagbilaran', 'Panglao', 'Dauis', 'Baclayon', 'Alburquerque',
                        'Balilihan', 'Catigbian', 'Corella', 'Cortes', 'Loboc',
                        'Maribojoc', 'Sikatuna', 'Antequera', 'Carmen', 'Sagbayan',
                        'Danao', 'Sagbayan', 'Clarin', 'Inabanga', 'Tubigon'
                    ]
                },
                'palawan': {
                    name: 'Palawan',
                    areas: [
                        'Puerto Princesa', 'El Nido', 'Coron', 'San Vicente', 'Roxas',
                        'Narra', 'Quezon', 'Aborlan', 'Brooke\'s Point', 'Bataraza',
                        'Rizal', 'Sofronio Española', 'Araceli', 'Cagayancillo', 'Culion',
                        'Linapacan', 'Magsaysay', 'Agutaya', 'Cuyo', 'Kalayaan'
                    ]
                },
                'batanes': {
                    name: 'Batanes',
                    areas: [
                        'Basco', 'Mahatao', 'Ivana', 'Uyugan', 'Sabtang',
                        'Itbayat', 'Diura', 'Racuh a Payaman', 'Chavayan', 'Savidug',
                        'Imnajbu', 'Mavulis', 'Siayan', 'Yami', 'North Batan'
                    ]
                },
                'bicol': {
                    name: 'Bicol Region',
                    areas: [
                        'Naga', 'Legazpi', 'Sorsogon', 'Masbate', 'Daet',
                        'Iriga', 'Ligao', 'Tabaco', 'Virac', 'Sipocot',
                        'Calabanga', 'Libmanan', 'Pili', 'Polangui', 'Oas',
                        'Guinobatan', 'Camalig', 'Daraga', 'Rapu-Rapu', 'Bacacay'
                    ]
                },
                'cordillera': {
                    name: 'Cordillera Administrative Region',
                    areas: [
                        'Baguio', 'Bontoc', 'Lagawe', 'Tabuk', 'Bangued',
                        'La Trinidad', 'Itogon', 'Tuba', 'Sablan', 'Tublay',
                        'Bokod', 'Kabayan', 'Buguias', 'Kibungan', 'Bakun',
                        'Mankayan', 'Bauko', 'Besao', 'Sagada', 'Tadian'
                    ]
                },
                'mindanao': {
                    name: 'Mindanao',
                    areas: [
                        'Cagayan de Oro', 'Zamboanga', 'General Santos', 'Cotabato',
                        'Iligan', 'Butuan', 'Surigao', 'Tacloban', 'Ormoc', 'Calbayog',
                        'Dipolog', 'Pagadian', 'Ozamiz', 'Marawi', 'Kidapawan',
                        'Koronadal', 'Tandag', 'Bayugan', 'Gingoog', 'Bislig'
                    ]
                }
            }
        },
        'usa': {
            name: 'United States',
            flag: '🇺🇸',
            currency: '$',
            currencyCode: 'USD',
            locations: {
                'newyork': {
                    name: 'New York City',
                    areas: [
                        'Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island',
                        'Times Square', 'Central Park', 'Wall Street', 'Chinatown',
                        'Little Italy', 'Greenwich Village', 'SoHo', 'Tribeca'
                    ]
                },
                'losangeles': {
                    name: 'Los Angeles',
                    areas: [
                        'Downtown LA', 'Hollywood', 'Beverly Hills', 'Santa Monica',
                        'Venice Beach', 'Westwood', 'Koreatown', 'Little Tokyo',
                        'Chinatown', 'Pasadena', 'Burbank', 'Glendale'
                    ]
                }
            }
        },
        'uk': {
            name: 'United Kingdom',
            flag: '🇬🇧',
            currency: '£',
            currencyCode: 'GBP',
            locations: {
                'london': {
                    name: 'London',
                    areas: [
                        'Westminster', 'Camden', 'Islington', 'Hackney', 'Tower Hamlets',
                        'Greenwich', 'Southwark', 'Lambeth', 'Wandsworth', 'Hammersmith',
                        'Kensington and Chelsea', 'City of London'
                    ]
                },
                'manchester': {
                    name: 'Manchester',
                    areas: [
                        'City Centre', 'Northern Quarter', 'Ancoats', 'Chorlton',
                        'Didsbury', 'Withington', 'Fallowfield', 'Rusholme',
                        'Moss Side', 'Hulme', 'Salford Quays'
                    ]
                }
            }
        },
        'japan': {
            name: 'Japan',
            flag: '🇯🇵',
            currency: '¥',
            currencyCode: 'JPY',
            locations: {
                'tokyo': {
                    name: 'Tokyo',
                    areas: [
                        'Shibuya', 'Shinjuku', 'Harajuku', 'Ginza', 'Roppongi',
                        'Akihabara', 'Asakusa', 'Ueno', 'Ikebukuro', 'Odaiba',
                        'Tsukiji', 'Yokohama'
                    ]
                },
                'osaka': {
                    name: 'Osaka',
                    areas: [
                        'Namba', 'Umeda', 'Shinsaibashi', 'Dotonbori', 'Tennoji',
                        'Nipponbashi', 'Osaka Castle', 'Universal Studios',
                        'Kyobashi', 'Juso', 'Kita'
                    ]
                }
            }
        },
        'australia': {
            name: 'Australia',
            flag: '🇦🇺',
            currency: 'A$',
            currencyCode: 'AUD',
            locations: {
                'sydney': {
                    name: 'Sydney',
                    areas: [
                        'CBD', 'Bondi', 'Manly', 'Darling Harbour', 'The Rocks',
                        'Paddington', 'Surry Hills', 'Newtown', 'Glebe',
                        'Balmain', 'Leichhardt', 'Parramatta'
                    ]
                },
                'melbourne': {
                    name: 'Melbourne',
                    areas: [
                        'CBD', 'Fitzroy', 'Carlton', 'St Kilda', 'Southbank',
                        'Richmond', 'Collingwood', 'Brunswick', 'Prahran',
                        'South Yarra', 'Toorak', 'Brighton'
                    ]
                }
            }
        },
        'canada': {
            name: 'Canada',
            flag: '🇨🇦',
            currency: 'C$',
            currencyCode: 'CAD',
            locations: {
                'toronto': {
                    name: 'Toronto',
                    areas: [
                        'Downtown', 'Yorkville', 'Kensington Market', 'Chinatown',
                        'Little Italy', 'Queen West', 'Distillery District',
                        'Harbourfront', 'Entertainment District', 'Financial District'
                    ]
                },
                'vancouver': {
                    name: 'Vancouver',
                    areas: [
                        'Downtown', 'Gastown', 'Chinatown', 'Yaletown',
                        'Granville Island', 'West End', 'Kitsilano', 'Commercial Drive',
                        'Mount Pleasant', 'False Creek'
                    ]
                }
            }
        }
    },
    
    // Distance matrix for different countries (simplified)
    distances: {
        'philippines': {
            'manila': {
                'makati-taguig': 3.2,
                'makati-quezoncity': 8.5,
                'makati-manila': 4.1,
                'makati-pasig': 2.8,
                'makati-mandaluyong': 1.5,
                'makati-sanjuan': 3.8,
                'makati-marikina': 12.2,
                'makati-pasay': 5.1,
                'makati-paranaque': 8.9,
                'makati-laspinas': 15.3,
                'makati-muntinlupa': 12.7,
                'makati-caloocan': 18.5,
                'makati-malabon': 16.2,
                'makati-navotas': 15.8,
                'makati-valenzuela': 20.1,
                'makati-pateros': 4.5,
                'makati-bgc': 2.1,
                'makati-ortigas': 4.8,
                'makati-cubao': 6.2,
                'makati-greenhills': 3.5,
                'makati-alabang': 18.9,
                'makati-rockwell': 0.8,
                'taguig-quezoncity': 11.2,
                'taguig-manila': 6.8,
                'taguig-pasig': 1.2,
                'taguig-mandaluyong': 4.1,
                'taguig-sanjuan': 6.5,
                'taguig-marikina': 14.8,
                'taguig-pasay': 3.2,
                'taguig-paranaque': 6.1,
                'taguig-laspinas': 12.8,
                'taguig-muntinlupa': 9.5,
                'taguig-caloocan': 21.2,
                'taguig-malabon': 18.9,
                'taguig-navotas': 18.5,
                'taguig-valenzuela': 22.8,
                'taguig-pateros': 2.1,
                'taguig-bgc': 0.5,
                'taguig-ortigas': 6.5,
                'taguig-cubao': 8.1,
                'taguig-greenhills': 5.2,
                'taguig-alabang': 15.8,
                'taguig-rockwell': 3.2,
                'quezoncity-manila': 8.2,
                'quezoncity-pasig': 9.8,
                'quezoncity-mandaluyong': 6.5,
                'quezoncity-sanjuan': 4.2,
                'quezoncity-marikina': 3.8,
                'quezoncity-pasay': 12.1,
                'quezoncity-paranaque': 15.8,
                'quezoncity-laspinas': 22.1,
                'quezoncity-muntinlupa': 18.5,
                'quezoncity-caloocan': 2.8,
                'quezoncity-malabon': 5.2,
                'quezoncity-navotas': 4.8,
                'quezoncity-valenzuela': 8.9,
                'quezoncity-pateros': 7.8,
                'quezoncity-bgc': 11.5,
                'quezoncity-ortigas': 2.1,
                'quezoncity-cubao': 0.8,
                'quezoncity-greenhills': 1.2,
                'quezoncity-alabang': 25.8,
                'quezoncity-rockwell': 8.9
            },
            'cebu': {
                'cebucity-lahug': 2.1,
                'cebucity-mabolo': 1.8,
                'cebucity-banilad': 3.5,
                'cebucity-talamban': 4.2,
                'cebucity-mandaue': 2.8,
                'cebucity-lapulapu': 5.1,
                'cebucity-consolacion': 8.9,
                'cebucity-cordova': 6.2,
                'cebucity-liloan': 12.5,
                'cebucity-compostela': 15.8,
                'cebucity-talisay': 8.2,
                'cebucity-minglanilla': 11.5,
                'cebucity-naga': 18.9,
                'cebucity-sanfernando': 22.1,
                'cebucity-carcar': 25.8,
                'cebucity-argao': 35.2,
                'cebucity-dalaguete': 42.8,
                'cebucity-alcoy': 38.5,
                'cebucity-boljoon': 45.2,
                'lahug-mabolo': 1.2,
                'lahug-banilad': 2.8,
                'lahug-talamban': 3.5,
                'lahug-mandaue': 1.8,
                'lahug-lapulapu': 4.2,
                'lahug-consolacion': 7.8,
                'lahug-cordova': 5.1,
                'lahug-liloan': 11.2,
                'lahug-compostela': 14.5,
                'lahug-talisay': 7.8,
                'lahug-minglanilla': 10.2,
                'lahug-naga': 17.8,
                'lahug-sanfernando': 21.5,
                'lahug-carcar': 24.8,
                'lahug-argao': 34.2,
                'lahug-dalaguete': 41.8,
                'lahug-alcoy': 37.5,
                'lahug-boljoon': 44.2,
                'mabolo-banilad': 2.1,
                'mabolo-talamban': 2.8,
                'mabolo-mandaue': 1.5,
                'mabolo-lapulapu': 3.8,
                'mabolo-consolacion': 7.2,
                'mabolo-cordova': 4.5,
                'mabolo-liloan': 10.8,
                'mabolo-compostela': 14.1,
                'mabolo-talisay': 7.2,
                'mabolo-minglanilla': 9.8,
                'mabolo-naga': 17.2,
                'mabolo-sanfernando': 20.8,
                'mabolo-carcar': 24.1,
                'mabolo-argao': 33.5,
                'mabolo-dalaguete': 41.1,
                'mabolo-alcoy': 36.8,
                'mabolo-boljoon': 43.5
            },
            'davao': {
                'davaocity-bajada': 1.2,
                'davaocity-matina': 2.8,
                'davaocity-toril': 8.5,
                'davaocity-calinan': 12.2,
                'davaocity-tugbok': 6.8,
                'davaocity-buhangin': 3.5,
                'davaocity-agdao': 2.1,
                'davaocity-poblacion': 0.8,
                'davaocity-talomo': 4.2,
                'davaocity-marilog': 18.9,
                'davaocity-paquibato': 22.5,
                'davaocity-baguio': 15.8,
                'davaocity-eden': 25.2,
                'davaocity-samalisland': 8.9,
                'davaocity-panabo': 18.5,
                'davaocity-tagum': 28.2,
                'davaocity-digos': 35.8,
                'davaocity-mati': 45.2,
                'davaocity-maco': 22.8,
                'bajada-matina': 2.1,
                'bajada-toril': 7.8,
                'bajada-calinan': 11.5,
                'bajada-tugbok': 6.2,
                'bajada-buhangin': 2.8,
                'bajada-agdao': 1.5,
                'bajada-poblacion': 0.5,
                'bajada-talomo': 3.5,
                'bajada-marilog': 18.2,
                'bajada-paquibato': 21.8,
                'bajada-baguio': 15.1,
                'bajada-eden': 24.5,
                'bajada-samalisland': 8.2,
                'bajada-panabo': 17.8,
                'bajada-tagum': 27.5,
                'bajada-digos': 35.1,
                'bajada-mati': 44.5,
                'bajada-maco': 22.1
            },
            'iloilo': {
                'iloilocity-jaro': 2.8,
                'iloilocity-lapaz': 1.8,
                'iloilocity-lapuz': 3.2,
                'iloilocity-mandurriao': 2.1,
                'iloilocity-molo': 1.5,
                'iloilocity-villaarevalo': 2.5,
                'iloilocity-arevalo': 2.2,
                'iloilocity-cityproper': 0.8,
                'iloilocity-oton': 4.5,
                'iloilocity-pavia': 6.2,
                'iloilocity-leganes': 8.9,
                'iloilocity-zarraga': 12.5,
                'iloilocity-newlucena': 15.8,
                'iloilocity-santabarbara': 18.2,
                'iloilocity-cabatuan': 22.8,
                'iloilocity-maasin': 25.5,
                'iloilocity-alimodian': 28.9,
                'iloilocity-leon': 32.2,
                'iloilocity-sanmiguel': 35.8,
                'jaro-lapaz': 1.5,
                'jaro-lapuz': 2.8,
                'jaro-mandurriao': 1.8,
                'jaro-molo': 2.2,
                'jaro-villaarevalo': 1.2,
                'jaro-arevalo': 1.5,
                'jaro-cityproper': 2.1,
                'jaro-oton': 3.8,
                'jaro-pavia': 5.5,
                'jaro-leganes': 8.2,
                'jaro-zarraga': 11.8,
                'jaro-newlucena': 15.1,
                'jaro-santabarbara': 17.5,
                'jaro-cabatuan': 22.1,
                'jaro-maasin': 24.8,
                'jaro-alimodian': 28.2,
                'jaro-leon': 31.5,
                'jaro-sanmiguel': 35.1
            },
            'bohol': {
                'tagbilaran-panglao': 8.5,
                'tagbilaran-dauis': 6.2,
                'tagbilaran-baclayon': 4.8,
                'tagbilaran-alburquerque': 12.5,
                'tagbilaran-balilihan': 8.9,
                'tagbilaran-catigbian': 15.2,
                'tagbilaran-corella': 3.8,
                'tagbilaran-cortes': 2.1,
                'tagbilaran-loboc': 18.5,
                'tagbilaran-maribojoc': 22.8,
                'tagbilaran-sikatuna': 6.8,
                'tagbilaran-antequera': 12.1,
                'tagbilaran-carmen': 25.8,
                'tagbilaran-sagbayan': 28.5,
                'tagbilaran-danao': 15.8,
                'tagbilaran-clarin': 18.2,
                'tagbilaran-inabanga': 22.5,
                'tagbilaran-tubigon': 25.2,
                'panglao-dauis': 2.8,
                'panglao-baclayon': 4.5,
                'panglao-alburquerque': 5.2,
                'panglao-balilihan': 2.1,
                'panglao-catigbian': 8.8,
                'panglao-corella': 5.5,
                'panglao-cortes': 6.8,
                'panglao-loboc': 12.2,
                'panglao-maribojoc': 16.5,
                'panglao-sikatuna': 1.8,
                'panglao-antequera': 5.8,
                'panglao-carmen': 19.5,
                'panglao-sagbayan': 22.2,
                'panglao-danao': 9.5,
                'panglao-clarin': 11.8,
                'panglao-inabanga': 16.2,
                'panglao-tubigon': 18.9
            },
            'palawan': {
                'puertoprincesa-elnido': 125.8,
                'puertoprincesa-coron': 95.2,
                'puertoprincesa-sanvicente': 45.8,
                'puertoprincesa-roxas': 28.5,
                'puertoprincesa-narra': 35.2,
                'puertoprincesa-quezon': 42.8,
                'puertoprincesa-aborlan': 15.8,
                'puertoprincesa-brookespoint': 65.2,
                'puertoprincesa-bataraza': 85.8,
                'puertoprincesa-rizal': 95.5,
                'puertoprincesa-sofronioespanola': 75.2,
                'puertoprincesa-araceli': 105.8,
                'puertoprincesa-cagayancillo': 185.2,
                'puertoprincesa-culion': 125.8,
                'puertoprincesa-linapacan': 95.5,
                'puertoprincesa-magsaysay': 115.8,
                'puertoprincesa-agutaya': 155.2,
                'puertoprincesa-cuyo': 135.8,
                'puertoprincesa-kalayaan': 285.5,
                'elnido-coron': 35.8,
                'elnido-sanvicente': 85.2,
                'elnido-roxas': 105.8,
                'elnido-narra': 95.5,
                'elnido-quezon': 88.2,
                'elnido-aborlan': 115.8,
                'elnido-brookespoint': 45.2,
                'elnido-bataraza': 25.8,
                'elnido-rizal': 15.5,
                'elnido-sofronioespanola': 35.2,
                'elnido-araceli': 65.8,
                'elnido-cagayancillo': 145.2,
                'elnido-culion': 85.8,
                'elnido-linapacan': 55.5,
                'elnido-magsaysay': 75.8,
                'elnido-agutaya': 115.2,
                'elnido-cuyo': 95.8,
                'elnido-kalayaan': 245.5
            },
            'batanes': {
                'basco-mahatao': 8.5,
                'basco-ivana': 12.2,
                'basco-uyugan': 15.8,
                'basco-sabtang': 18.5,
                'basco-itbayat': 25.2,
                'basco-diura': 3.8,
                'basco-racuhapayaman': 22.8,
                'basco-chavayan': 28.5,
                'basco-savidug': 32.2,
                'basco-imnajbu': 35.8,
                'basco-mavulis': 45.2,
                'basco-siyan': 38.5,
                'basco-yami': 42.8,
                'basco-northbatan': 5.2,
                'mahatao-ivana': 4.8,
                'mahatao-uyugan': 8.5,
                'mahatao-sabtang': 12.2,
                'mahatao-itbayat': 18.8,
                'mahatao-diura': 6.2,
                'mahatao-racuhapayaman': 15.5,
                'mahatao-chavayan': 21.2,
                'mahatao-savidug': 24.8,
                'mahatao-imnajbu': 28.5,
                'mahatao-mavulis': 38.2,
                'mahatao-siyan': 31.5,
                'mahatao-yami': 35.8,
                'mahatao-northbatan': 3.8
            },
            'bicol': {
                'naga-legazpi': 45.8,
                'naga-sorsogon': 65.2,
                'naga-masbate': 85.5,
                'naga-daet': 25.8,
                'naga-iriga': 15.2,
                'naga-ligao': 38.5,
                'naga-tabaco': 42.8,
                'naga-virac': 55.2,
                'naga-sipocot': 8.5,
                'naga-calabanga': 12.2,
                'naga-libmanan': 18.8,
                'naga-pili': 2.1,
                'naga-polangui': 35.8,
                'naga-oas': 32.5,
                'naga-guinobatan': 28.2,
                'naga-camalig': 25.8,
                'naga-daraga': 42.5,
                'naga-rapurapu': 48.2,
                'naga-bacacay': 35.5,
                'legazpi-sorsogon': 25.8,
                'legazpi-masbate': 65.2,
                'legazpi-daet': 68.5,
                'legazpi-iriga': 55.8,
                'legazpi-ligao': 8.5,
                'legazpi-tabaco': 12.2,
                'legazpi-virac': 18.8,
                'legazpi-sipocot': 52.5,
                'legazpi-calabanga': 48.2,
                'legazpi-libmanan': 42.8,
                'legazpi-pili': 45.5,
                'legazpi-polangui': 5.2,
                'legazpi-oas': 8.8,
                'legazpi-guinobatan': 12.5,
                'legazpi-camalig': 15.8,
                'legazpi-daraga': 2.1,
                'legazpi-rapurapu': 8.5,
                'legazpi-bacacay': 12.2
            },
            'cordillera': {
                'baguio-bontoc': 85.2,
                'baguio-lagawe': 65.8,
                'baguio-tabuk': 95.5,
                'baguio-bangued': 45.2,
                'baguio-latrinidad': 2.8,
                'baguio-itogon': 8.5,
                'baguio-tuba': 12.2,
                'baguio-sablan': 15.8,
                'baguio-tublay': 18.5,
                'baguio-bokod': 22.8,
                'baguio-kabayan': 28.2,
                'baguio-buguias': 25.5,
                'baguio-kibungan': 32.8,
                'baguio-bakun': 35.2,
                'baguio-mankayan': 28.5,
                'baguio-bauko': 75.8,
                'baguio-besao': 82.5,
                'baguio-sagada': 78.2,
                'baguio-tadian': 85.8,
                'bontoc-lagawe': 25.8,
                'bontoc-tabuk': 35.2,
                'bontoc-bangued': 45.8,
                'bontoc-latrinidad': 82.5,
                'bontoc-itogon': 88.2,
                'bontoc-tuba': 85.5,
                'bontoc-sablan': 78.8,
                'bontoc-tublay': 75.2,
                'bontoc-bokod': 68.5,
                'bontoc-kabayan': 62.8,
                'bontoc-buguias': 65.2,
                'bontoc-kibungan': 58.5,
                'bontoc-bakun': 55.8,
                'bontoc-mankayan': 62.2,
                'bontoc-bauko': 8.5,
                'bontoc-besao': 12.2,
                'bontoc-sagada': 8.8,
                'bontoc-tadian': 15.5
            },
            'mindanao': {
                'cagayandeoro-zamboanga': 185.2,
                'cagayandeoro-generalsantos': 125.8,
                'cagayandeoro-cotabato': 95.5,
                'cagayandeoro-iligan': 25.8,
                'cagayandeoro-butuan': 45.2,
                'cagayandeoro-surigao': 65.8,
                'cagayandeoro-tacloban': 125.5,
                'cagayandeoro-ormoc': 115.2,
                'cagayandeoro-calbayog': 95.8,
                'cagayandeoro-dipolog': 85.5,
                'cagayandeoro-pagadian': 75.2,
                'cagayandeoro-ozamiz': 65.8,
                'cagayandeoro-marawi': 35.5,
                'cagayandeoro-kidapawan': 55.2,
                'cagayandeoro-koronadal': 85.8,
                'cagayandeoro-tandag': 95.5,
                'cagayandeoro-bayugan': 55.8,
                'cagayandeoro-gingoog': 35.2,
                'cagayandeoro-bislig': 105.8,
                'zamboanga-generalsantos': 125.2,
                'zamboanga-cotabato': 95.8,
                'zamboanga-iligan': 185.5,
                'zamboanga-butuan': 165.2,
                'zamboanga-surigao': 145.8,
                'zamboanga-tacloban': 225.5,
                'zamboanga-ormoc': 215.2,
                'zamboanga-calbayog': 195.8,
                'zamboanga-dipolog': 45.5,
                'zamboanga-pagadian': 35.2,
                'zamboanga-ozamiz': 25.8,
                'zamboanga-marawi': 155.5,
                'zamboanga-kidapawan': 125.2,
                'zamboanga-koronadal': 95.8,
                'zamboanga-tandag': 85.5,
                'zamboanga-bayugan': 145.8,
                'zamboanga-gingoog': 165.2,
                'zamboanga-bislig': 115.8
            }
        },
        'usa': {
            'newyork': {
                'manhattan-brooklyn': 5.2,
                'manhattan-queens': 8.1,
                'manhattan-bronx': 6.8,
                'manhattan-timesquare': 0.5,
                'manhattan-centralpark': 1.2,
                'manhattan-wallstreet': 2.1,
                'brooklyn-queens': 4.3,
                'queens-bronx': 7.2
            },
            'losangeles': {
                'downtownla-hollywood': 8.5,
                'downtownla-beverlyhills': 9.2,
                'downtownla-santamonica': 12.8,
                'downtownla-venicebeach': 13.1,
                'hollywood-beverlyhills': 3.2,
                'hollywood-santamonica': 6.8,
                'beverlyhills-santamonica': 4.1
            }
        },
        'uk': {
            'london': {
                'westminster-camden': 2.8,
                'westminster-islington': 3.1,
                'westminster-hackney': 4.2,
                'westminster-towerhamlets': 2.1,
                'camden-islington': 1.8,
                'camden-hackney': 2.9,
                'islington-hackney': 1.5
            }
        },
        'japan': {
            'tokyo': {
                'shibuya-shinjuku': 2.1,
                'shibuya-harajuku': 0.8,
                'shibuya-ginza': 3.2,
                'shibuya-roppongi': 2.8,
                'shinjuku-harajuku': 1.5,
                'shinjuku-ginza': 4.1,
                'ginza-roppongi': 1.8
            }
        },
        'australia': {
            'sydney': {
                'cbd-bondi': 6.2,
                'cbd-manly': 8.9,
                'cbd-darlingharbour': 1.2,
                'cbd-therocks': 0.8,
                'bondi-manly': 12.1,
                'bondi-darlingharbour': 7.8
            }
        },
        'canada': {
            'toronto': {
                'downtown-yorkville': 1.2,
                'downtown-kensingtonmarket': 0.8,
                'downtown-chinatown': 1.5,
                'downtown-littleitaly': 2.1,
                'yorkville-kensingtonmarket': 1.8,
                'kensingtonmarket-chinatown': 0.9
            }
        }
    },
    
    // Fare rates based on gas price and country (per km)
    fareRates: {
        'philippines': {
            '30-40': 8.50,
            '41-50': 9.00,
            '51-60': 9.50,
            '61-70': 10.00,
            '71-80': 10.50,
            '81-90': 11.00,
            '91-100': 11.50,
            '101-110': 12.00
        },
        'usa': {
            '30-40': 2.50,
            '41-50': 2.75,
            '51-60': 3.00,
            '61-70': 3.25,
            '71-80': 3.50,
            '81-90': 3.75,
            '91-100': 4.00,
            '101-110': 4.25
        },
        'uk': {
            '30-40': 1.80,
            '41-50': 2.00,
            '51-60': 2.20,
            '61-70': 2.40,
            '71-80': 2.60,
            '81-90': 2.80,
            '91-100': 3.00,
            '101-110': 3.20
        },
        'japan': {
            '30-40': 220,
            '41-50': 245,
            '51-60': 270,
            '61-70': 295,
            '71-80': 320,
            '81-90': 345,
            '91-100': 370,
            '101-110': 395
        },
        'australia': {
            '30-40': 2.80,
            '41-50': 3.10,
            '51-60': 3.40,
            '61-70': 3.70,
            '71-80': 4.00,
            '81-90': 4.30,
            '91-100': 4.60,
            '101-110': 4.90
        },
        'canada': {
            '30-40': 2.20,
            '41-50': 2.45,
            '51-60': 2.70,
            '61-70': 2.95,
            '71-80': 3.20,
            '81-90': 3.45,
            '91-100': 3.70,
            '101-110': 3.95
        }
    }
};

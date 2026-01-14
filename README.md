REST Countries Explorer - Cyberpunk Edition
A modern web application to explore countries around the world with a stunning cyberpunk neon theme.

Features
Display all countries with flags, capitals, regions, population, and country codes
Search by Country Name, Capital, Region/Continent, or Country Code
Real-time filtering as you type
Responsive design for all devices
Cyberpunk neon theme with glassmorphism effects
Loading spinner and error handling
"No results found" message
Technologies Used
HTML5
CSS3 (Cyberpunk theme with animations)
JavaScript (ES6+)
Bootstrap 5.3.2
REST Countries API v3.1
Project Structure
rest-countries-explorer/
├── index.html
├── style.css
├── home.js
└── README.txt

Installation
Clone the repository: git clone https://github.com/yourusername/rest-countries-explorer.git
Open index.html in your browser
How It Works
Fetches country data from REST Countries API on page load
Displays all countries in a responsive grid
Allows filtering by 4 criteria: Name, Capital, Region, Country Code
Updates results instantly as you type
API Used
REST Countries API v3.1 Base URL: https://restcountries.com/v3.1 Endpoint: /all?fields=name,capital,region,population,flags,cca2

Key Functions
searchCountry()

Filters countries based on selected search criteria
Supports name, capital, region, and code searches
Updates display dynamically
displayCountries(data)

Renders country cards with flag, name, capital, region, population
Shows "No countries found" message when search yields no results
Uses Bootstrap grid for responsive layout
Responsive Design
Desktop (1400px+): 5 cards per row
Large Desktop (1200px): 4 cards per row
Tablet (992px): 3 cards per row
Mobile (768px): 2 cards per row
Small Mobile (480px): 1 card per row
Browser Support
Chrome 90+, Firefox 88+, Safari 14+, Edge 90+, Opera 76+

Future Enhancements
Sort countries by name or population
Click on country for detailed view
Save favorite countries
Dark/Light mode toggle
Export data to CSV
Author
Mahalakshmi GitHub: https://github.com/maha1akshmi LinkedIn: https://www.linkedin.com/in/maha1akshmi

License
MIT License - Open source and free to use

Acknowledgments
REST Countries API - https://restcountries.com/ Bootstrap - https://getbootstrap.com/

Made with love and coffee


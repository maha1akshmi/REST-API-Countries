REST Countries Explorer - Cyberpunk Edition

A modern web application to explore countries around the world with a stunning cyberpunk neon theme.

--------------------------------------------------

FEATURES
- Display all countries with flag, capital, region, population, and country code
- Search by country name, capital, region/continent, or country code
- Real-time search (search while typing)
- Fully responsive design
- Cyberpunk neon UI with glassmorphism effects
- Loading spinner and error handling
- "No countries found" message

--------------------------------------------------

TECHNOLOGIES USED
- HTML5
- CSS3 (Cyberpunk theme)
- JavaScript (ES6+)
- Bootstrap 5.3.2
- REST Countries API v3.1

--------------------------------------------------

PROJECT STRUCTURE
rest-countries-explorer/
|-- index.html
|-- style.css
|-- home.js
|-- README.txt

--------------------------------------------------

INSTALLATION
1. Clone the repository:
   git clone https://github.com/yourusername/rest-countries-explorer.git

2. Open index.html in a browser

--------------------------------------------------

HOW IT WORKS
- Fetches country data on page load
- Displays all countries in a responsive grid
- Filters by name, capital, region, or country code
- Updates results instantly as the user types

--------------------------------------------------

API USED
REST Countries API v3.1
Base URL: https://restcountries.com/v3.1
Endpoint: /all?fields=name,capital,region,population,flags,cca2

--------------------------------------------------

KEY FUNCTIONS
searchCountry()
- Filters countries based on selected criteria
- Updates UI dynamically

displayCountries(data)
- Renders country cards
- Shows "No countries found" when needed

--------------------------------------------------

RESPONSIVE DESIGN
Desktop: 5 cards per row
Large Desktop: 4 cards per row
Tablet: 3 cards per row
Mobile: 2 cards per row
Small Mobile: 1 card per row

--------------------------------------------------

AUTHOR
Mahalakshmi
GitHub: https://github.com/maha1akshmi
LinkedIn: https://www.linkedin.com/in/maha1akshmi

--------------------------------------------------

LICENSE
MIT License - Open source and free to use

--------------------------------------------------

ACKNOWLEDGMENTS
REST Countries API - https://restcountries.com/
Bootstrap - https://getbootstrap.com/

--------------------------------------------------

Made with love and coffee

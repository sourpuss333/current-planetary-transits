document.addEventListener('DOMContentLoaded', function() {
    const transitsTableBody = document.querySelector('#transits_table tbody');
    const currentDateTimeElement = document.getElementById('current_datetime');
    const signNames = {
        'Ari': 'Aries', 'Tau': 'Taurus', 'Gem': 'Gemini', 'Can': 'Cancer', 
        'Leo': 'Leo', 'Vir': 'Virgo', 'Lib': 'Libra', 'Sco': 'Scorpio', 
        'Sag': 'Sagittarius', 'Cap': 'Capricorn', 'Aqu': 'Aquarius', 'Pis': 'Pisces'
    };

    const iconUrls = {
        'Sun': 'icons/Sun.png',
        'Moon': 'icons/Moon.png',
        'Mercury': 'icons/Mercury.png',
        'Venus': 'icons/Venus.png',
        'Mars': 'icons/Mars.png',
        'Jupiter': 'icons/Jupiter.png',
        'Saturn': 'icons/Saturn.png',
        'Uranus': 'icons/Uranus.png',
        'Neptune': 'icons/Neptune.png',
        'Pluto': 'icons/Pluto.png',
        'North Node': 'icons/North_Node.png',
        'Chiron': 'icons/Chiron.png',
        'Aries': 'icons/Aries.png',
        'Taurus': 'icons/Taurus.png',
        'Gemini': 'icons/Gemini.png',
        'Cancer': 'icons/Cancer.png',
        'Leo': 'icons/Leo.png',
        'Virgo': 'icons/Virgo.png',
        'Libra': 'icons/Libra.png',
        'Scorpio': 'icons/Scorpio.png',
        'Sagittarius': 'icons/Sagittarius.png',
        'Capricorn': 'icons/Capricorn.png',
        'Aquarius': 'icons/Aquarius.png',
        'Pisces': 'icons/Pisces.png'
    };

    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        currentDateTimeElement.textContent = now.toLocaleDateString('en-US', options);
    }

    function fetchTransits() {
        // Replace with the actual function to fetch data from Swiss Ephemeris
        const transitsData = [
            { planet: 'Sun', sign: 'Gem', position: '23°45\'' },
            { planet: 'Moon', sign: 'Vir', position: '17°32\'' },
            { planet: 'Mercury', sign: 'Can', position: '05°12\'' },
            { planet: 'Venus', sign: 'Leo', position: '29°03\'' },
            { planet: 'Mars', sign: 'Vir', position: '10°45\'' },
            { planet: 'Jupiter', sign: 'Sco', position: '23°33\'' },
            { planet: 'Saturn', sign: 'Cap', position: '12°15\'' },
            { planet: 'Uranus', sign: 'Tau', position: '02°16\'' },
            { planet: 'Neptune', sign: 'Pis', position: '14°37\'' },
            { planet: 'Pluto', sign: 'Cap', position: '22°43\'' },
            { planet: 'North Node', sign: 'Leo', position: '09°05\'' },
            { planet: 'Chiron', sign: 'Pis', position: '28°33\'' }
        ];

        transitsTableBody.innerHTML = ''; // Clear the table body

        transitsData.forEach(transit => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${iconUrls[transit.planet]}" class="icon">${transit.planet}</td>
                <td><img src="${iconUrls[signNames[transit.sign]]}" class="icon">${signNames[transit.sign]}</td>
                <td>${transit.position}</td>
            `;
            transitsTableBody.appendChild(row);
        });
    }

    updateDateTime();
    fetchTransits();
    setInterval(updateDateTime, 60000); // Update the time every minute
});

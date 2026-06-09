// ============================================================
// PWA: SERVICE WORKER REGISTRATION
// Tells the browser to use sw.js for offline support.
// ============================================================

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js");
    });
}

//==============================================================
// GLOBAL DATA
//==============================================================

var globalDestinations = [
    {
        id: "kuwait",
        name: "Kuwait City",
        country: "Kuwait",
        region: "West Asia",
        continent: "Asia",
        img: "images/kuwait-city.jpg",
        imgAlt: "Kuwait City Towers",
        info: "Kuwait seamlessly blends rich Arabian traditions with a futuristic, cosmopolitan skyline. From the bustling alleyways of Souk Mubarakiya to the sleek luxury hubs of the Avenues Mall.",
        travelTypes: ["culture", "relax"],
        budgetRange: ["budget-friendly", "mid-range"],
        attractions: ["Souk Mubarakiya", "Kuwait Towers", "The Avenues Mall", "Grand Mosque"],
        costs: {
            currency: "KWD",
            conversion: "~$3 – $196+ USD",
            budget: { acc: "10-20", meals: "3-6", activities: "Free-5", transport: "1-3" },
            mid: { acc: "35-70", meals: "10-20", activities: "8-20", transport: "5-10" },
            luxury: { acc: "120-250+", meals: "35-70+", activities: "25-60+", transport: "20-45" }
        }
    },
    {
        id: "machu-picchu",
        name: "Machu Picchu",
        country: "Peru",
        region: "South America",
        continent: "South America",
        img: "images/machupicchu.jpg",
        imgAlt: "Ancient ruins of Machu Picchu",
        info: "Perched high in the Andes Mountains, this 15th-century Incan citadel is renowned for its sophisticated dry-stone walls and panoramic mist-shrouded mountain vistas.",
        travelTypes: ["adventure", "culture"],
        budgetRange: ["mid-range", "luxury"],
        attractions: ["Intihuatana Stone", "Temple of the Sun", "Huayna Picchu", "Sun Gate"],
        costs: {
            currency: "PEN",
            conversion: "~$30 – $450+ USD",
            budget: { acc: "40-80", meals: "15-30", activities: "20-40", transport: "10-20" },
            mid: { acc: "150-300", meals: "45-90", activities: "60-150", transport: "40-90" },
            luxury: { acc: "600+", meals: "150+", activities: "200+", transport: "150+" }
        }
    },
    {
        id: "paris",
        name: "Paris",
        country: "France",
        region: "Western Europe",
        continent: "Europe",
        img: "images/paris.jpg",
        imgAlt: "Eiffel Tower in Paris",
        info: "The global center for art, fashion, gastronomy, and culture. Paris is famed for its 19th-century cityscape, crisscrossed by wide boulevards and the River Seine.",
        travelTypes: ["culture", "relax"],
        budgetRange: ["mid-range", "luxury"],
        attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Arc de Triomphe"],
        costs: {
            currency: "EUR",
            conversion: "~$45 – $600+ USD",
            budget: { acc: "35-65", meals: "15-25", activities: "5-15", transport: "4-8" },
            mid: { acc: "110-220", meals: "40-75", activities: "20-45", transport: "10-20" },
            luxury: { acc: "400+", meals: "120+", activities: "80+", transport: "50-120" }
        }
    },
    {
        id: "tokyo",
        name: "Tokyo",
        country: "Japan",
        region: "East Asia",
        continent: "Asia",
        img: "images/tokyo.jpg",
        imgAlt: "Neon streets of Tokyo",
        info: "Japan's bustling capital mixes ultramodern neon skyscrapers with historic shinto shrines. Known for its incredible food scene, anime hubs, and ultra-efficient transit.",
        travelTypes: ["adventure", "culture"],
        budgetRange: ["mid-range", "luxury"],
        attractions: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree", "Meiji Shrine"],
        costs: {
            currency: "JPY",
            conversion: "~$40 – $550+ USD",
            budget: { acc: "4500-8000", meals: "1500-3000", activities: "Free-1500", transport: "600-1000" },
            mid: { acc: "12000-25000", meals: "4000-8000", activities: "2000-5000", transport: "120-2500" },
            luxury: { acc: "45000+", meals: "12000+", activities: "6000+", transport: "5000-15000" }
        }
    },
    {
        id: "serengeti",
        name: "Serengeti National Park",
        country: "Tanzania",
        region: "East Africa",
        continent: "Africa",
        img: "images/serengeti.jpg",
        imgAlt: "Wildlife safari in the Serengeti",
        info: "Famed for its massive annual migration of wildebeest and zebras. This vast African savanna ecosystem hosts populations of lions, leopards, elephants, and rhinos.",
        travelTypes: ["adventure", "nature"],
        budgetRange: ["mid-range", "luxury"],
        attractions: ["The Great Migration", "Seronera Valley", "Grumeti River", "Olduvai Gorge"],
        costs: {
            currency: "TZS",
            conversion: "~$70 – $1200+ USD",
            budget: { acc: "50-90", meals: "20-35", activities: "60-100", transport: "30-50" },
            mid: { acc: "180-350", meals: "45-80", activities: "100-250", transport: "80-150" },
            luxury: { acc: "700+", meals: "120+", activities: "300+", transport: "250-600" }
        }
    },
    {
        id: "sydney",
        name: "Sydney",
        country: "Australia",
        region: "Oceania",
        continent: "Oceania",
        img: "images/sydney.jpg",
        imgAlt: "Sydney Opera House",
        info: "Australia's largest city is best recognized for its iconic harborfront, home to the sail-shaped Opera House, beautiful royal botanic gardens, and famous surf beaches.",
        travelTypes: ["adventure", "relax"],
        budgetRange: ["mid-range", "luxury"],
        attractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach", "Darling Harbour"],
        costs: {
            currency: "AUD",
            conversion: "~$50 – $500+ USD",
            budget: { acc: "55-85", meals: "20-30", activities: "Free-20", transport: "8-15" },
            mid: { acc: "160-280", meals: "45-85", activities: "25-70", transport: "15-30" },
            luxury: { acc: "450+", meals: "130+", activities: "100+", transport: "60-150" }
        }
    },
    {
        id: "new-york",
        name: "New York City",
        country: "USA",
        region: "North America",
        continent: "North America",
        img: "images/ny.jpg",
        imgAlt: "New York City Skyline",
        info: "The city that never sleeps offers an iconic skyline, world-class museums, Central Park, Broadway shows, and raw electric energy across its five distinct boroughs.",
        travelTypes: ["culture", "adventure"],
        budgetRange: ["mid-range", "luxury"],
        attractions: ["Statue of Liberty", "Central Park", "Times Square", "Empire State Building"],
        costs: {
            currency: "USD",
            conversion: "USD Prices",
            budget: { acc: "40-70", meals: "15-30", activities: "Free-15", transport: "5-10" },
            mid: { acc: "150-250", meals: "40-80", activities: "20-50", transport: "15-40" },
            luxury: { acc: "500+", meals: "150+", activities: "100+", transport: "120-180" }
        }
    },
    {
        id: "nuwara-eliya",
        name: "Nuwara Eliya",
        country: "Sri Lanka",
        region: "South Asia",
        continent: "Asia",
        img: "images/nuwara-eliya.jpg",
        imgAlt: "Tea plantations of Nuwara Eliya",
        info: "Often called 'Little England', this high-altitude valley is famous for its cool alpine climate, sweeping emerald tea estates, colonial-era bungalows, and rushing waterfalls.",
        travelTypes: ["relax", "nature"],
        budgetRange: ["budget-friendly", "mid-range"],
        attractions: ["Gregory Lake", "Pedro Tea Estate", "Horton Plains", "Victoria Park"],
        costs: {
            currency: "LKR",
            conversion: "~$2 – $80+ USD",
            budget: { acc: "1500-4000", meals: "600-1200", activities: "Free-1000", transport: "200-500" },
            mid: { acc: "6000-15000", meals: "1500-3500", activities: "1500-5000", transport: "1000-3000" },
            luxury: { acc: "25000+", meals: "5000+", activities: "6000+", transport: "5000-12000" }
        }
    },
    {
        id: "santorini",
        name: "Santorini",
        country: "Greece",
        region: "Southern Europe",
        continent: "Europe",
        img: "images/santorini.jpg",
        imgAlt: "White buildings of Santorini facing the sea",
        info: "One of the Cyclades islands in the Aegean Sea, dramatically shaped by a volcanic eruption. Famed for its whitewashed houses, blue-domed churches, and iconic sunsets.",
        travelTypes: ["relax", "culture"],
        budgetRange: ["mid-range", "luxury"],
        attractions: ["Oia Sunsets", "Fira Trail", "Red Beach", "Akrotiri Archaeological Site"],
        costs: {
            currency: "EUR",
            conversion: "~$50 – $800+ USD",
            budget: { acc: "45-75", meals: "20-35", activities: "Free-20", transport: "5-12" },
            mid: { acc: "140-300", meals: "50-90", activities: "30-75", transport: "15-35" },
            luxury: { acc: "600+", meals: "140+", activities: "120+", transport: "80-200" }
        }
    }
];


// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Turn the first letter of a word into a capital letter.
// Example: "adventure" becomes "Adventure"
function capitalise(str) {
    var firstLetter = str.charAt(0);           // Get the first character
    var restOfWord = str.slice(1);             // Get everything after the first character
    var withSpaces = restOfWord.replace(/-/g, " "); // Turn dashes into spaces
    return firstLetter.toUpperCase() + withSpaces;
}

// Check if an email looks real (has an @ sign and a dot).
// Example: "bob@email.com" is OK, "bob" is NOT OK.
function isValidEmail(email) {
    // Look for the @ sign
    var hasAt = email.indexOf("@") !== -1;
    // Look for a dot
    var hasDot = email.indexOf(".") !== -1;
    // Both must be true
    if (hasAt && hasDot) {
        return true;
    } else {
        return false;
    }
}

// Slowly count a number up from 0 to a target, showing it on screen.
// Used in the budget planner to make the total look fancy.
function animateCounter(start, end, duration, element) {
    // If the element does not exist, stop immediately
    if (!element) {
        return;
    }

    var startTime = null; // We do not know the time yet

    // This function runs every frame
    function step(timestamp) {
        // Remember when we started
        if (!startTime) {
            startTime = timestamp;
        }

        // Check how much time has passed
        var timeElapsed = timestamp - startTime;

        // What percent of the duration is done?
        var progress = timeElapsed / duration; //between 0 and 1 inclusive

        // Do not go past 100%
        if (progress > 1) {
            progress = 1;
        }

        // Calculate the number we should show right now
        var currentValue = Math.floor(progress * (end - start) + start); 

        // Put that number into the HTML element
        element.textContent = currentValue;

        // If we are not done yet, ask the browser to run this again
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    // Start the animation
    window.requestAnimationFrame(step);
}

// Show the mobile side menu
function showSidebar() {
    var sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "flex";
}

// Hide the mobile side menu
function hideSidebar() {
    var sidebar = document.querySelector(".side-bar");
    sidebar.style.display = "none";
}


// ============================================================
// NEWSLETTER FORM (runs on every page)
// Saves the email in the browser so it remembers user subscribed.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    // Find the button and the email box
    var newsletterButton = document.getElementById("newsletter-button");
    var emailInput = document.getElementById("input-email");

    // If these do not exist on this page, stop here
    if (!newsletterButton || !emailInput) {
        return;
    }

    // Check if the user already subscribed before
    var savedEmail = localStorage.getItem("newsletterEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
        emailInput.setAttribute("placeholder", "You're subscribed!");
    }

    // When the button is clicked
    newsletterButton.addEventListener("click", function (e) {
        e.preventDefault(); // Stop the page from refreshing

        var email = emailInput.value.trim();

        // Check if the email looks real
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Save the email so it stays next time
        localStorage.setItem("newsletterEmail", email);

        // Change the button to say "Subscribed"
        newsletterButton.textContent = "Subscribed ✓";
        newsletterButton.style.backgroundColor = "#49765b";
        newsletterButton.disabled = true;

        alert("Thanks! " + email + " has been subscribed to the TravelNest newsletter.");
    });
});


// ============================================================
// HOME PAGE: HERO CAROUSEL
// Changes the big picture and text every 10 seconds.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    // This only runs on the home page because overlay-text only exists there
    var overlayText = document.querySelector(".overlay-text");
    if (!overlayText) {
        return;
    }

    var heroInfoEl = document.getElementById("hero-info");
    var heroImg = document.querySelector(".hero-right-img");

    // These are the 5 slides we want to show.
    // Each slide points to an ID in the globalDestinations list above.
    var heroSlides = [
        { id: "kuwait",    quote: "Hand-picked journeys for the deliberate traveler. Discover sanctuaries that define the quiet art of wandering." },
        { id: "tokyo",     quote: "The world is a book, and those who do not travel read only one page. Start your next chapter today." },
        { id: "paris",     quote: "Every destination has a story waiting to be lived. Let TravelNest help you write yours." },
        { id: "santorini", quote: "Adventure is not outside man; it is within. Find your escape with curated journeys built for you." },
        { id: "serengeti", quote: "Travel far enough to meet yourself. The best journeys are the ones that change you." }
    ];

    var currentSlide = 0;

    // Add smooth fade transitions
    heroInfoEl.style.transition = "opacity 0.6s ease";
    if (heroImg) {
        heroImg.style.transition = "opacity 0.6s ease";
    }
    overlayText.style.transition = "opacity 0.6s ease";

    // This function runs every 10 seconds
    function changeSlide() {
        // Step 1: Fade everything out
        heroInfoEl.style.opacity = "0";
        if (heroImg) {
            heroImg.style.opacity = "0";
        }
        overlayText.style.opacity = "0";

        // Step 2: Wait 600ms, then change the content
        setTimeout(function () {
            // Move to the next slide (go back to 0 after the last one)
            currentSlide = currentSlide + 1;
            if (currentSlide >= heroSlides.length) {
                currentSlide = 0;
            }

            var slideConfig = heroSlides[currentSlide];

            // Find the matching destination in globalDestinations
            var targetDest = null;
            for (var i = 0; i < globalDestinations.length; i = i + 1) {
                if (globalDestinations[i].id === slideConfig.id) {
                    targetDest = globalDestinations[i];
                    break; // Stop looking once we found it
                }
            }

            // If we found it, update the page
            if (targetDest) {
                heroInfoEl.textContent = slideConfig.quote;
                if (heroImg) {
                    heroImg.src = targetDest.img;
                }
                overlayText.textContent = targetDest.name + ", " + targetDest.country;
            }

            // Fade everything back in
            heroInfoEl.style.opacity = "1";
            if (heroImg) {
                heroImg.style.opacity = "1";
            }
            overlayText.style.opacity = "1";
        }, 600);
    }

    // Start the timer: run changeSlide every 10,000 milliseconds (10 seconds)
    setInterval(changeSlide, 10000);
});


// ============================================================
// HOME PAGE: DESTINATION OF THE DAY
// Picks one destination based on today's date.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    // Only run on the home page
    var destNameEl = document.querySelector(".dest-name");
    if (!destNameEl) {
        return;
    }

    // Make sure we have destinations
    if (!window.globalDestinations || globalDestinations.length === 0) {
        return;
    }

    // Get today's date
    var today = new Date();
    var startOfYear = new Date(today.getFullYear(), 0, 0);

    // How many days since January 1st?
    // 86400000 is the number of milliseconds in one day
    var dayOfYear = Math.floor((today - startOfYear) / 86400000);

    // Pick a destination using the day number.
    // The % (modulo) means if we have 9 destinations and it is day 10,
    // we go back to destination 1. It wraps around automatically.
    var todaysDest = globalDestinations[dayOfYear % globalDestinations.length];

    // Update the name on the page
    destNameEl.innerHTML = todaysDest.name + ', <span class="dest-country">' + todaysDest.country + '</span>';

    // Update the region text (e.g. "WEST · ASIA")
    var regionEl = document.getElementById("dest-continent");
    if (regionEl) {
        var upperRegion = todaysDest.region.toUpperCase();
        var parts = upperRegion.split(" ");
        regionEl.textContent = parts.join(" · ");
    }

    // Update the description paragraph
    document.querySelector(".dest-info").textContent = todaysDest.info;

    // Update the image
    var destImg = document.getElementById("mount-fuji");
    if (destImg) {
        destImg.src = todaysDest.img;
        destImg.alt = todaysDest.imgAlt;
        destImg.title = todaysDest.imgAlt;
    }

    // When the "Check Destination" button is clicked, go to Explore page
    var checkBtn = document.getElementById("check-dest-button");
    if (checkBtn) {
        checkBtn.addEventListener("click", function () {
            window.location.href = "explore.html";
        });
    }
});


// ============================================================
// EXPLORE PAGE: DYNAMIC CARDS & MODALS
// Creates all the destination cards and pop-up detail windows.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    // Find the containers on the Explore page
    var gridContainer = document.querySelector(".destinations-container");
    var modalsContainer = document.querySelector(".dest-modal-container");
    var searchInput = document.getElementById("exp-search");
    var continentSelect = document.getElementById("exp-filter");

    // If these do not exist, we are not on the Explore page, so stop
    if (!gridContainer || !modalsContainer) {
        return;
    }

    // This function creates all the cards and modals for a list of destinations
    function renderDestinations(itemsList) {
        // Clear out old content
        gridContainer.innerHTML = "";
        modalsContainer.innerHTML = "";

        // If nothing matches the search, show a message
        if (itemsList.length === 0) {
            gridContainer.innerHTML = '<p class="no-results">No destinations match your criteria.</p>';
            return;
        }

        // Loop through every destination
        for (var i = 0; i < itemsList.length; i = i + 1) {
            var dest = itemsList[i];

            // --- CREATE THE CARD (the small box you see on the page) ---
            var card = document.createElement("div");
            card.className = "destination-card";
            card.setAttribute("data-continent", dest.continent);

            // Build the HTML inside the card using string addition
            var cardHTML = "";
            cardHTML = cardHTML + '<img src="' + dest.img + '" title="' + dest.name + '" alt="' + dest.imgAlt + '" class="destination-img">';
            cardHTML = cardHTML + '<p class="country-continent-text">' + dest.country.toUpperCase() + ' · ' + dest.region.toUpperCase() + '</p>';
            cardHTML = cardHTML + '<p class="destination-name">' + dest.name + '</p>';
            cardHTML = cardHTML + '<p class="destination-info">' + dest.info.substring(0, 115) + '...</p>';

            card.innerHTML = cardHTML;
            gridContainer.appendChild(card);

            // --- CREATE THE MODAL (the pop-up window with full details) ---
            var dialog = document.createElement("dialog");
            dialog.className = "dest-modal-card";
            dialog.id = dest.id + "-dest-modal-card";

            // Build the attractions list as a string
            var attractionsHTML = "";
            for (var a = 0; a < dest.attractions.length; a = a + 1) {
                attractionsHTML = attractionsHTML + "<li>" + dest.attractions[a] + "</li>";
            }

            // Build the cost table HTML
            var modalHTML = "";
            modalHTML = modalHTML + '<div class="' + dest.id + '-dialog-wrapper">';
            modalHTML = modalHTML + '<img src="' + dest.img + '" title="' + dest.name + '" alt="' + dest.imgAlt + '" id="' + dest.id + '-city-modal" class="dest-modal-img">';
            modalHTML = modalHTML + '<p class="country-continent-modal">' + dest.country.toUpperCase() + ' · ' + dest.region.toUpperCase() + '</p>';
            modalHTML = modalHTML + '<p class="dest-name-modal">' + dest.name + '</p>';
            modalHTML = modalHTML + '<p class="dest-info-modal">' + dest.info + '</p>';
            modalHTML = modalHTML + '<p class="heading-modal">Popular Attractions</p>';
            modalHTML = modalHTML + '<ul class="attractions-list-modal">' + attractionsHTML + '</ul>';
            modalHTML = modalHTML + '<p class="heading-modal">Travel Cost Comparison</p>';
            modalHTML = modalHTML + '<table class="cost-table-modal">';
            modalHTML = modalHTML + '<thead class="table-head"><tr><th>Expense</th><th>Budget</th><th>Mid-Range</th><th>Luxury</th></tr></thead>';
            modalHTML = modalHTML + '<tbody>';
            modalHTML = modalHTML + '<tr class="second-row"><td>Accommodation</td><td>' + dest.costs.budget.acc + ' ' + dest.costs.currency + '</td><td>' + dest.costs.mid.acc + ' ' + dest.costs.currency + '</td><td>' + dest.costs.luxury.acc + ' ' + dest.costs.currency + '</td></tr>';
            modalHTML = modalHTML + '<tr class="third-row"><td>Daily Meals</td><td>' + dest.costs.budget.meals + ' ' + dest.costs.currency + '</td><td>' + dest.costs.mid.meals + ' ' + dest.costs.currency + '</td><td>' + dest.costs.luxury.meals + ' ' + dest.costs.currency + '</td></tr>';
            modalHTML = modalHTML + '<tr class="fourth-row"><td>Activities</td><td>' + dest.costs.budget.activities + ' ' + dest.costs.currency + '</td><td>' + dest.costs.mid.activities + ' ' + dest.costs.currency + '</td><td>' + dest.costs.luxury.activities + ' ' + dest.costs.currency + '</td></tr>';
            modalHTML = modalHTML + '<tr class="fifth-row"><td>Transport</td><td>' + dest.costs.budget.transport + ' ' + dest.costs.currency + '</td><td>' + dest.costs.mid.transport + ' ' + dest.costs.currency + '</td><td>' + dest.costs.luxury.transport + ' ' + dest.costs.currency + '</td></tr>';
            modalHTML = modalHTML + '</tbody></table>';
            modalHTML = modalHTML + '</div>';

            dialog.innerHTML = modalHTML;
            modalsContainer.appendChild(dialog);

            // When the card is clicked, open the modal
            card.addEventListener("click", function () {
                dialog.showModal();
            });

            // When clicking outside the modal content, close it
            dialog.addEventListener("click", function (e) {
                var wrapper = dialog.querySelector("." + dest.id + "-dialog-wrapper");
                if (wrapper && !wrapper.contains(e.target)) {
                    dialog.close();
                }
            });
        }
    }

    // This function filters destinations based on search text and continent
    function handleFiltering() {
        var query = searchInput.value.toLowerCase().trim();
        var selectedContinent = continentSelect.value;

        // Create a new list of only matching destinations
        var matchedDestinations = [];

        for (var i = 0; i < globalDestinations.length; i = i + 1) {
            var dest = globalDestinations[i];

            // Check if the name or country contains the search text
            var nameMatches = dest.name.toLowerCase().indexOf(query) !== -1;
            var countryMatches = dest.country.toLowerCase().indexOf(query) !== -1;
            var matchesText = nameMatches || countryMatches;

            // Check if the continent matches (or "All Continents" is selected)
            var matchesFilter = false;
            if (selectedContinent === "All Continents") {
                matchesFilter = true;
            } else if (dest.continent === selectedContinent) {
                matchesFilter = true;
            }

            // If both match, add to the list
            if (matchesText && matchesFilter) {
                matchedDestinations.push(dest);
            }
        }

        // Show the filtered results
        renderDestinations(matchedDestinations);
    }

    // Show all destinations when the page first loads
    renderDestinations(globalDestinations);

    // When the user types in the search box, update the results
    if (searchInput) {
        searchInput.addEventListener("input", handleFiltering);
    }

    // When the user changes the continent dropdown, update the results
    if (continentSelect) {
        continentSelect.addEventListener("change", handleFiltering);
    }
});


// ============================================================
// PLANNER PAGE: BUDGET CALCULATOR
// Calculates total cost and shows a colored progress bar.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    var plannerForm = document.getElementById("planner-form");
    var saveTripBtn = document.getElementById("save-trip-button");

    // Only run on the Planner page
    if (!plannerForm) {
        return;
    }

    var currentCalculation = null;

    // When the form is submitted
    plannerForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Do not refresh the page

        // Get the values from the form
        var selectedDestId = document.getElementById("plan-destination").value;
        var days = parseInt(document.getElementById("plan-days").value);
        var dailyBudget = parseFloat(document.getElementById("plan-budget").value);
        var travelStyleSelect = document.getElementById("plan-style");
        var travelStyleLabel = "Standard";
        if (travelStyleSelect) {
            travelStyleLabel = travelStyleSelect.options[travelStyleSelect.selectedIndex].text;
        }

        // Check if everything is filled in correctly
        if (!selectedDestId || isNaN(days) || days <= 0 || isNaN(dailyBudget) || dailyBudget <= 0) {
            alert("Please complete the parameters with valid numeric entries.");
            return;
        }

        // Apply a multiplier based on travel style
        var travelStyleValue = document.getElementById("plan-style").value;
        var styleMultiplier = 1.0;
        if (travelStyleValue === "budget") {
            styleMultiplier = 0.8;
        } else if (travelStyleValue === "luxury") {
            styleMultiplier = 1.4;
        }

        // Calculate total: days × daily budget × style multiplier
        var calculatedTotal = Math.round(days * dailyBudget * styleMultiplier);

        // Decide the status and color based on the total
        var status = "Low Cost";
        var progressPercent = 33;
        var barColor = "#508295"; // blue-green

        if (calculatedTotal > 1000 && calculatedTotal <= 3000) {
            status = "Moderate";
            progressPercent = 66;
            barColor = "#ff7f50"; // orange
        } else if (calculatedTotal > 3000) {
            status = "Luxury";
            progressPercent = 100;
            barColor = "#d86b47"; // red
        }

        // Find the destination name from the ID
        var destDisplayName = selectedDestId;
        for (var i = 0; i < globalDestinations.length; i = i + 1) {
            if (globalDestinations[i].id === selectedDestId) {
                destDisplayName = globalDestinations[i].name;
                break;
            }
        }

        // Show the results on the page
        document.getElementById("res-dest").textContent = destDisplayName;
        document.getElementById("res-days").textContent = days;
        document.getElementById("res-daily").textContent = dailyBudget;
        document.getElementById("res-style").textContent = travelStyleLabel;
        document.getElementById("res-status").textContent = status;

        // Animate the total number counting up
        var totalCostSpan = document.getElementById("res-total");
        if (totalCostSpan) {
            animateCounter(0, calculatedTotal, 800, totalCostSpan);
        }

        // Update the progress bar
        var progressBar = document.getElementById("budget-progress-bar");
        if (progressBar) {
            progressBar.style.width = progressPercent + "%";
            progressBar.style.backgroundColor = barColor;
        }

        // Remember this calculation so we can save it later
        currentCalculation = {
            destination: destDisplayName,
            days: days,
            total: calculatedTotal,
            status: status,
            style: travelStyleLabel
        };
    });

    // When the "Save Trip" button is clicked
    if (saveTripBtn) {
        saveTripBtn.addEventListener("click", function () {
            if (!currentCalculation) {
                alert("Please calculate a budget breakdown first before saving your trip!");
                return;
            }

            // Get old saved trips (or empty list if none)
            var tripHistory = JSON.parse(localStorage.getItem("savedTrips")) || [];
            tripHistory.push(currentCalculation);
            localStorage.setItem("savedTrips", JSON.stringify(tripHistory));

            alert("Trip to " + currentCalculation.destination + " has been successfully saved.");
        });
    }
});


// ============================================================
// GENERATOR PAGE: RANDOM DESTINATION PICKER + WISHLIST
// Picks a random place based on filters and lets you save it.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    // Only run on the Generator page
    if (!document.getElementById("gen-container")) {
        return;
    }

    var lGen = document.getElementById("l-gen");
    var btnContainer = document.getElementById("r-gen-img-container");
    var saveBtn = document.querySelector(".save-btn");
    var wishlistSection = document.getElementById("wishlist");
    var wishlistPara = document.getElementById("wishlist-para");

    var currentSuggestion = null; // The place currently shown

    // Create a box to show the result
    var resultContainer = document.createElement("div");
    resultContainer.id = "gen-result";
    lGen.insertBefore(resultContainer, btnContainer);

    // Show a placeholder message before anything is picked
    resultContainer.innerHTML = '<div class="gen-placeholder"><p class="gen-placeholder-text">Set your preferences and hit <strong>Surprise Me!</strong></p></div>';

    // This function looks at the dropdowns and returns only matching destinations
    function getFilteredDestinations() {
        var typeElement = document.getElementById("gen-travel-type");
        var budgetElement = document.getElementById("gen-budget-range");

        var type = "any-type";
        if (typeElement) {
            type = typeElement.value;
        }

        var budget = "any-budget";
        if (budgetElement) {
            budget = budgetElement.value;
        }

        var matches = [];

        // Check every destination
        for (var i = 0; i < globalDestinations.length; i = i + 1) {
            var dest = globalDestinations[i];

            // Check travel type
            var typeMatch = false;
            if (type === "any-type") {
                typeMatch = true;
            } else {
                // Look through the travelTypes array
                for (var t = 0; t < dest.travelTypes.length; t = t + 1) {
                    if (dest.travelTypes[t] === type) {
                        typeMatch = true;
                        break;
                    }
                }
            }

            // Check budget range
            var budgetMatch = false;
            if (budget === "any-budget") {
                budgetMatch = true;
            } else {
                // Look through the budgetRange array
                for (var b = 0; b < dest.budgetRange.length; b = b + 1) {
                    if (dest.budgetRange[b] === budget) {
                        budgetMatch = true;
                        break;
                    }
                }
            }

            // If both match, add to results
            if (typeMatch && budgetMatch) {
                matches.push(dest);
            }
        }

        return matches;
    }

    // This function shows one destination on the screen
    function displaySuggestion(dest) {
        currentSuggestion = dest;

        // Build the type tags (e.g. "Adventure", "Culture")
        var typePills = "";
        for (var i = 0; i < dest.travelTypes.length; i = i + 1) {
            typePills = typePills + '<span class="gen-tag type-tag">' + capitalise(dest.travelTypes[i]) + '</span>';
        }

        // Build the budget tags (e.g. "Mid-Range", "Luxury")
        var budgetPills = "";
        for (var i = 0; i < dest.budgetRange.length; i = i + 1) {
            budgetPills = budgetPills + '<span class="gen-tag budget-tag">' + capitalise(dest.budgetRange[i]) + '</span>';
        }

        // Build the full card HTML
        var html = "";
        html = html + '<div class="gen-result-card">';
        html = html + '<img src="' + dest.img + '" alt="' + dest.name + '" class="gen-result-img">';
        html = html + '<div class="gen-result-body">';
        html = html + '<p class="gen-result-name">' + dest.name + '</p>';
        html = html + '<p class="gen-result-country">' + dest.country + ' · ' + dest.region + '</p>';
        html = html + '<p class="gen-result-desc">' + dest.info + '</p>';
        html = html + '<div class="gen-tags">' + typePills + budgetPills + '</div>';
        html = html + '</div></div>';

        resultContainer.innerHTML = html;

        // Animate the card fading in
        var card = resultContainer.querySelector(".gen-result-card");
        card.style.opacity = "0";
        card.style.transform = "translateY(14px)";
        card.style.transition = "opacity 0.45s ease, transform 0.45s ease";

        setTimeout(function () {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 10);
    }

    // This function picks a random destination and shows it
    function generateDestination() {
        var filtered = getFilteredDestinations();

        // If nothing matches the filters
        if (filtered.length === 0) {
            currentSuggestion = null;
            resultContainer.innerHTML = '<div class="gen-no-match"><p>No destinations match those filters.<br>Try <strong>Any Type</strong> or a different budget.</p></div>';
            return;
        }

        // Try not to show the same one twice in a row
        var pick = null;
        if (filtered.length > 1 && currentSuggestion) {
            // Make a list of everything EXCEPT the current one
            var others = [];
            for (var i = 0; i < filtered.length; i = i + 1) {
                if (filtered[i].name !== currentSuggestion.name) {
                    others.push(filtered[i]);
                }
            }
            // Pick randomly from the others
            var randomIndex = Math.floor(Math.random() * others.length);
            pick = others[randomIndex];
        } else {
            // Only one option, or nothing was shown before
            var randomIndex = Math.floor(Math.random() * filtered.length);
            pick = filtered[randomIndex];
        }

        displaySuggestion(pick);
        animateSurpriseButtons();
    }

    // Little bounce animation on the buttons
    function animateSurpriseButtons() {
        var buttons = document.querySelectorAll("#surprise-button, #surprise-again-button");
        for (var i = 0; i < buttons.length; i = i + 1) {
            buttons[i].classList.remove("surprise-pop");
            // This trick forces the browser to restart the animation
            void buttons[i].offsetWidth;
            buttons[i].classList.add("surprise-pop");
        }
    }

    // Connect both buttons to the same function
    var surpriseButtons = document.querySelectorAll("#surprise-button, #surprise-again-button");
    for (var i = 0; i < surpriseButtons.length; i = i + 1) {
        surpriseButtons[i].addEventListener("click", generateDestination);
    }

    // Save to wishlist
    if (saveBtn) {
        saveBtn.addEventListener("click", function () {
            if (!currentSuggestion) {
                alert("Generate a destination first before saving!");
                return;
            }

            // Get current wishlist (or empty array)
            var wishlist = JSON.parse(localStorage.getItem("travelWishlist")) || [];

            // Check if already in wishlist
            var alreadyThere = false;
            for (var i = 0; i < wishlist.length; i = i + 1) {
                if (wishlist[i].name === currentSuggestion.name) {
                    alreadyThere = true;
                    break;
                }
            }

            if (alreadyThere) {
                alert(currentSuggestion.name + " is already in your wishlist!");
                return;
            }

            // Add and save
            wishlist.push(currentSuggestion);
            localStorage.setItem("travelWishlist", JSON.stringify(wishlist));

            // Visual feedback
            saveBtn.textContent = "Saved ✓";
            saveBtn.style.background = "#3D6B4F";
            setTimeout(function () {
                saveBtn.textContent = "SAVE TO WISHLIST";
                saveBtn.style.background = "";
            }, 1800);

            renderWishlist();
        });
    }

    // This function draws all saved wishlist items
    function renderWishlist() {
        var wishlist = JSON.parse(localStorage.getItem("travelWishlist")) || [];

        // Remove old grid if it exists
        var existing = wishlistSection.querySelector(".wishlist-cards-grid");
        if (existing) {
            existing.remove();
        }

        // If empty, show the empty message
        if (wishlist.length === 0) {
            wishlistPara.style.display = "block";
            return;
        }

        wishlistPara.style.display = "none";

        // Create a new grid container
        var grid = document.createElement("div");
        grid.className = "wishlist-cards-grid";

        // Loop through each saved item
        for (var i = 0; i < wishlist.length; i = i + 1) {
            var dest = wishlist[i];

            // Build type tags
            var typePills = "";
            for (var j = 0; j < dest.travelTypes.length; j = j + 1) {
                typePills = typePills + '<span class="gen-tag type-tag">' + capitalise(dest.travelTypes[j]) + '</span>';
            }

            // Create the card
            var card = document.createElement("div");
            card.className = "wishlist-card";

            var cardHTML = "";
            cardHTML = cardHTML + '<img src="' + dest.img + '" alt="' + dest.name + '" class="wishlist-card-img">';
            cardHTML = cardHTML + '<div class="wishlist-card-body">';
            cardHTML = cardHTML + '<p class="wishlist-card-name">' + dest.name + '</p>';
            cardHTML = cardHTML + '<p class="wishlist-card-country">' + dest.country + ' · ' + dest.region + '</p>';
            cardHTML = cardHTML + '<div class="gen-tags">' + typePills + '</div>';
            cardHTML = cardHTML + '<button class="remove-wishlist-btn" data-index="' + i + '" aria-label="Remove ' + dest.name + ' from wishlist">Remove ✕</button>';
            cardHTML = cardHTML + '</div>';

            card.innerHTML = cardHTML;
            grid.appendChild(card);
        }

        wishlistSection.appendChild(grid);

        // Add click handlers to all Remove buttons
        var removeButtons = grid.querySelectorAll(".remove-wishlist-btn");
        for (var i = 0; i < removeButtons.length; i = i + 1) {
            removeButtons[i].addEventListener("click", function () {
                // Get the index number stored in data-index
                var idx = parseInt(this.getAttribute("data-index"));

                // Get fresh wishlist from storage
                var wl = JSON.parse(localStorage.getItem("travelWishlist")) || [];
                var removedName = wl[idx].name;

                // Remove that item
                wl.splice(idx, 1);
                localStorage.setItem("travelWishlist", JSON.stringify(wl));

                // Redraw the list
                renderWishlist();

                // Show a temporary message
                wishlistPara.textContent = removedName + " was removed from your wishlist.";
                wishlistPara.style.display = "block";

                setTimeout(function () {
                    wishlistPara.textContent = "Your wishlist is empty. Generate a destination and save it!";
                    var updated = JSON.parse(localStorage.getItem("travelWishlist")) || [];
                    if (updated.length > 0) {
                        wishlistPara.style.display = "none";
                    }
                }, 2500);
            });
        }
    }

    // Show wishlist when page loads
    renderWishlist();
});


// ============================================================
// MOOD PAGE: AMBIENT SOUNDS + DESTINATION TRACKER
// Plays audio and lets you mark places as visited or planned.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    // Only run on the Mood page
    var moodCards = document.querySelectorAll(".mood-card");
    if (moodCards.length === 0) {
        return;
    }

    // These are the audio element IDs in the same order as the cards
    var audioIds = ["snd-beach", "snd-forest", "snd-city", "snd-fire", "snd-wind", "snd-cafe"];

    // Set up each mood card
    for (var i = 0; i < moodCards.length; i = i + 1) {
        // We use a function here to "trap" the correct i value
        (function (card, audioId) {
            var audio = document.getElementById(audioId);
            var playLabel = card.querySelector(".mood-play");

            // When card is clicked, play or pause the sound
            card.addEventListener("click", function () {
                if (audio.paused) {
                    audio.play();
                    card.classList.add("active");
                    playLabel.textContent = "Playing...";
                } else {
                    audio.pause();
                    audio.currentTime = 0; // Go back to start
                    card.classList.remove("active");
                    playLabel.textContent = "Tap to Play";
                }
            });
        })(moodCards[i], audioIds[i]);
    }

    // --- DESTINATION TRACKER SECTION ---

    // Get tracking data from browser storage
    function getTracking() {
        var stored = localStorage.getItem("tn_tracking");
        if (stored) {
            return JSON.parse(stored);
        } else {
            return {};
        }
    }

    // Save tracking data to browser storage
    function saveTracking(data) {
        localStorage.setItem("tn_tracking", JSON.stringify(data));
    }

    // Count how many are visited, planned, and total
    function updateStats() {
        var tracking = getTracking();
        var visited = 0;
        var planned = 0;

        // Loop through every ID in the tracking object
        for (var id in tracking) {
            if (tracking[id] === "visited") {
                visited = visited + 1;
            }
            if (tracking[id] === "planned") {
                planned = planned + 1;
            }
        }

        document.getElementById("visited-count").textContent = visited;
        document.getElementById("planned-count").textContent = planned;
        document.getElementById("total-track-count").textContent = visited + planned;
    }

    // Create the grid of tracking cards
    function renderTrackingGrid() {
        var grid = document.getElementById("destinations-track-grid");
        if (!grid) {
            return;
        }

        var tracking = getTracking();

        // Clear old cards
        grid.innerHTML = "";

        // Loop through all destinations
        for (var i = 0; i < globalDestinations.length; i = i + 1) {
            var dest = globalDestinations[i];

            // What is the current status? (none, planned, or visited)
            var status = tracking[dest.id];
            if (!status) {
                status = "none";
            }

            // What should the button say?
            var buttonLabel = "+ Track";
            if (status === "planned") {
                buttonLabel = "📋 Planned";
            }
            if (status === "visited") {
                buttonLabel = "✅ Visited";
            }

            // Create the card
            var card = document.createElement("div");
            card.className = "dest-track-card";

            var cardHTML = "";
            cardHTML = cardHTML + '<img src="' + dest.img + '" alt="' + dest.name + '" class="dest-track-img">';
            cardHTML = cardHTML + '<div class="dest-track-body">';
            cardHTML = cardHTML + '<p class="dest-track-name">' + dest.name + '</p>';
            cardHTML = cardHTML + '<p class="dest-track-country">' + dest.country + '</p>';
            cardHTML = cardHTML + '<button class="dest-track-btn ' + status + '" data-id="' + dest.id + '" aria-label="Track status for ' + dest.name + '">' + buttonLabel + '</button>';
            cardHTML = cardHTML + '</div>';

            card.innerHTML = cardHTML;
            grid.appendChild(card);

            // When the button is clicked, cycle through states
            (function (card, dest) {
                var btn = card.querySelector(".dest-track-btn");
                btn.addEventListener("click", function () {
                    // Figure out current state from the CSS class
                    var current = "none";
                    if (btn.classList.contains("visited")) {
                        current = "visited";
                    } else if (btn.classList.contains("planned")) {
                        current = "planned";
                    }

                    // Decide the next state
                    var next;
                    if (current === "none") {
                        next = "planned";
                    } else if (current === "planned") {
                        next = "visited";
                    } else {
                        next = "none";
                    }

                    // Update storage
                    var t = getTracking();
                    if (next === "none") {
                        delete t[dest.id];
                    } else {
                        t[dest.id] = next;
                    }
                    saveTracking(t);

                    // Update the button look
                    btn.className = "dest-track-btn " + next;
                    if (next === "none") {
                        btn.textContent = "+ Track";
                    } else if (next === "planned") {
                        btn.textContent = "📋 Planned";
                    } else {
                        btn.textContent = "✅ Visited";
                    }

                    // Update the numbers at the top
                    updateStats();
                });
            })(card, dest);
        }

        updateStats();
    }

    renderTrackingGrid();
});


// ============================================================
// SUPPORT PAGE: FAQ ACCORDION + CONTACT FORM
// Expandable questions and a form that checks your inputs.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    // Only run on the Support page
    var faqContainer = document.getElementById("l-support-container");
    if (!faqContainer) {
        return;
    }

    // The list of questions and answers
    var faqs = [
        { q: "How do I plan a trip using TravelNest?", a: "Head to the Trip Planner page, enter your destination, number of days, and daily budget. TravelNest instantly calculates your estimated trip cost and budget status." },
        { q: "Can I save my favourite destinations?", a: "Yes! On the Trip Generator page, generate a destination suggestion and click 'Save to Wishlist'. Your wishlist is stored locally on your device and persists between visits." },
        { q: "How does the Destination of the Day work?", a: "TravelNest picks a featured destination each day using date-based logic. It refreshes automatically at midnight — no action needed from you." },
        { q: "What are the ambient sounds on the Mood page?", a: "The Mood page features six ambient soundscapes: beach, forest, city, fire, wind, and café. Tap any card to play or pause that sound." },
        { q: "How do I track destinations I've visited?", a: "On the Travel Mood page, use the Destination Tracker grid. Click a destination to cycle its status through Track > Planned > Visited. Your progress saves automatically." },
        { q: "Is my data stored securely?", a: "All your data — wishlists, budgets, newsletter email, and feedback — lives in your browser's localStorage. Nothing is sent to any external server." }
    ];

    // Clear the container
    faqContainer.innerHTML = "";

    // Build each FAQ item
    for (var i = 0; i < faqs.length; i = i + 1) {
        var item = faqs[i];

        // Create the wrapper
        var wrapper = document.createElement("div");
        wrapper.className = "faq-item";

        var wrapperHTML = "";
        wrapperHTML = wrapperHTML + '<button class="faq-question" aria-expanded="false" aria-controls="faq-answer-' + i + '" id="faq-btn-' + i + '">';
        wrapperHTML = wrapperHTML + '<span>' + item.q + '</span>';
        wrapperHTML = wrapperHTML + '<span class="faq-icon" aria-hidden="true">+</span>';
        wrapperHTML = wrapperHTML + '</button>';
        wrapperHTML = wrapperHTML + '<div class="faq-answer" id="faq-answer-' + i + '" role="region" aria-labelledby="faq-btn-' + i + '">';
        wrapperHTML = wrapperHTML + '<p>' + item.a + '</p>';
        wrapperHTML = wrapperHTML + '</div>';

        wrapper.innerHTML = wrapperHTML;

        // Add click behavior
        (function (wrapper) {
            var btn = wrapper.querySelector(".faq-question");
            var answer = wrapper.querySelector(".faq-answer");
            var icon = wrapper.querySelector(".faq-icon");

            btn.addEventListener("click", function () {
                var isOpen = btn.getAttribute("aria-expanded") === "true";

                // Close ALL answers first
                var allButtons = document.querySelectorAll(".faq-question");
                var allAnswers = document.querySelectorAll(".faq-answer");

                for (var j = 0; j < allButtons.length; j = j + 1) {
                    allButtons[j].setAttribute("aria-expanded", "false");
                    allButtons[j].querySelector(".faq-icon").textContent = "+";
                }
                for (var j = 0; j < allAnswers.length; j = j + 1) {
                    allAnswers[j].style.maxHeight = null;
                    allAnswers[j].style.paddingTop = "0";
                    allAnswers[j].style.paddingBottom = "0";
                }

                // If this one was closed, open it
                if (!isOpen) {
                    btn.setAttribute("aria-expanded", "true");
                    icon.textContent = "-";
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    answer.style.paddingTop = "10px";
                    answer.style.paddingBottom = "10px";
                }
            });
        })(wrapper);

        faqContainer.appendChild(wrapper);
    }

    // --- CONTACT FORM ---

    var nameInput = document.getElementById("name-input");
    var emailInput = document.getElementById("email-input");
    var messageInput = document.getElementById("msg-input");
    var submitBtn = document.getElementById("support-submit-btn");
    var confirmation = document.getElementById("support-confirmation");

    if (!submitBtn) {
        return;
    }

    // Show a red error message under an input
    function showFieldError(input, message) {
        var group = input.closest(".r-support-group");
        var existing = group.querySelector(".field-error");

        if (!existing) {
            existing = document.createElement("p");
            existing.className = "field-error";
            existing.setAttribute("role", "alert");
            group.appendChild(existing);
        }

        existing.textContent = message;
        input.style.borderColor = "rgb(164, 63, 63)";
    }

    // Remove the red error message
    function clearFieldError(input) {
        var group = input.closest(".r-support-group");
        var err = group.querySelector(".field-error");
        if (err) {
            err.remove();
        }
        input.style.borderColor = "";
    }

    // Clear errors when the user starts typing
    nameInput.addEventListener("input", function () {
        clearFieldError(nameInput);
    });
    emailInput.addEventListener("input", function () {
        clearFieldError(emailInput);
    });
    messageInput.addEventListener("input", function () {
        clearFieldError(messageInput);
    });

    // When the form is submitted
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var message = messageInput.value.trim();
        var subject = document.getElementById("support-type").value;

        var isValid = true;

        // Check name
        if (!name) {
            showFieldError(nameInput, "Please enter your full name.");
            isValid = false;
        }

        // Check email
        if (!isValidEmail(email)) {
            showFieldError(emailInput, "Please enter a valid email address.");
            isValid = false;
        }

        // Check message
        if (!message) {
            showFieldError(messageInput, "Please enter your message.");
            isValid = false;
        }

        // Stop if anything is wrong
        if (!isValid) {
            return;
        }

        // Save to localStorage
        var stored = JSON.parse(localStorage.getItem("tn_feedback")) || [];
        stored.push({
            name: name,
            email: email,
            subject: subject,
            message: message,
            date: new Date().toISOString()
        });
        localStorage.setItem("tn_feedback", JSON.stringify(stored));

        // Show success message
        confirmation.textContent = "Thank you, " + name + "! Your message has been sent. We'll get back to you within 24 hours.";
        confirmation.style.display = "block";
        confirmation.scrollIntoView({ behavior: "smooth", block: "center" });

        // Clear the form
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
        document.getElementById("support-type").value = "general";

        // Change button to show success
        submitBtn.textContent = "Sent ✅";
        submitBtn.style.background = "#3D6B4F";
        submitBtn.disabled = true;

        // Reset everything after 4 seconds
        setTimeout(function () {
            submitBtn.textContent = "Send Message";
            submitBtn.style.background = "";
            submitBtn.disabled = false;
            confirmation.style.display = "none";
        }, 4000);
    });
});


// ============================================================
// DROPDOWN BUILDER
// Fills the destination lists in the Planner and Generator forms.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    var plannerSelect = document.getElementById("plan-destination");
    var generatorSelect = document.getElementById("gen-destination");

    // This function adds all destinations to a dropdown menu
    function fillDropdown(selectElement) {
        if (!selectElement) {
            return;
        }

        // Start with the "Please select" option
        selectElement.innerHTML = '<option value="" disabled selected>Select your destination</option>';

        // Add one option for each destination
        for (var i = 0; i < globalDestinations.length; i = i + 1) {
            var dest = globalDestinations[i];

            var opt = document.createElement("option");
            opt.value = dest.id;
            opt.textContent = dest.name + ", " + dest.country;

            selectElement.appendChild(opt);
        }
    }

    fillDropdown(plannerSelect);
    fillDropdown(generatorSelect);
});
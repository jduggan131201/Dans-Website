// Hamburger menu
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sideMenu.classList.toggle("active");
});

// --- Carousel ---
let currentIndex = 0;
let slides = []; // will be dynamically updated

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// --- Load vehicle ---
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const vehicle = vehicles.find((v) => v.id == id);

if (vehicle) {
  // Populate info
  document.getElementById("product-name").textContent = vehicle.name;
  document.getElementById("product-price").textContent =
    "£" + vehicle.price + " + VAT";
  document.getElementById("product-description").textContent =
    vehicle.description;
  document.getElementById("product-year").textContent = vehicle.year;
  document.getElementById("product-mileage").textContent = vehicle.mileage;
  document.getElementById("product-fuelType").textContent = vehicle.fuelType;
  document.getElementById("gearbox").textContent = vehicle.gearbox;
  document.getElementById("seats").textContent = vehicle.seats;
  document.getElementById("emissions").textContent = vehicle.emissions;
  document.getElementById("horsepower").textContent = vehicle.horsepower;
  document.getElementById("mpg").textContent = vehicle.milesPerGallon;
  document.getElementById("euroStatus").textContent = vehicle.euroStatus;
  document.getElementById("engine-size").textContent = vehicle.engineSize;
  document.getElementById("product-color").textContent = vehicle.color;
  document.getElementById("product-bodytype").textContent = vehicle.bodyType;
  document.getElementById("top-speed").textContent = vehicle.topSpeed;
  document.getElementById("0-62mph").textContent = vehicle.zeroToSixty;
  document.getElementById("power").textContent = vehicle.power;
  document.getElementById("height").textContent = vehicle.height;
  document.getElementById("length").textContent = vehicle.length;
  document.getElementById("width").textContent = vehicle.width;
  document.getElementById("extra-urban").textContent = vehicle.extraUrban;
  document.getElementById("urban").textContent = vehicle.urban;
  document.getElementById("emissions2").textContent = vehicle.emissions;
  document.getElementById("milesPerGallon").textContent =
    vehicle.milesPerGallon;
  document.getElementById("engine-size2").textContent = vehicle.engineSize;
  document.getElementById("desktop-price").textContent = vehicle.price;
  document.getElementById("desktop-name").textContent = vehicle.name;

  // Populate carousel dynamically
  const slidesContainer = document.getElementById("slides");
  slidesContainer.innerHTML = ""; // clear old slides

  vehicle.imageSlides.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = vehicle.name;
    img.classList.add("slide");
    if (index === 0) img.classList.add("active");
    slidesContainer.appendChild(img);
  });

  // Re-query slides after injecting
  slides = document.querySelectorAll(".slide");
  currentIndex = 0;
  showSlide(currentIndex);
} else {
  console.error("Vehicle not found for id:", id);
}

// VEHICLE CARD MOBILE

const container = document.getElementById("vans-list");

const desktopContainer = document.getElementById("featured-vehicles");

if (container) {
  // Only run on pages where the container exists
  vehicles.forEach((vehicle) => {
    const card = `
        <div class="vans-card">
          <div class="vans-card-banner">
            ALL VEHICLES ARE RIGOROUSLY TESTED FOR QUALITY
          </div>
          <div class="vans-card-image">
            <img src="${vehicle.image}" alt="/" class="van-image" />
          </div>
          <div class="vans-card-badges">
            <div class="autoTrader">
              <img
                src="images/AutoTrader-review-badge.png"
                alt="Review Badge"
                class="autoTrader-image"
              />
            </div>
            <div class="card-logo">
              <img
                src="images/Untitled design (2).png"
                alt="logo"
                class="card-logo-image"
              />
            </div>
            <div class="free-delivery">
              <span class="free">FREE</span
              ><span class="delivery">DELIVERY</span>
            </div>
          </div>
          <div class="price">
            <p>£${vehicle.price} <span class="vat">+ VAT</span></p>
          </div>
          <hr />
          <p class="van-name">
            ${vehicle.name}
          </p>
          <hr />
          <div class="van-spec">
            <p class="year flex">
              <span>Year</span><span class="right-aligned">${vehicle.year}</span>
            </p>
            <p class="Mileage flex">
              <span>Mileage</span><span class="right-aligned">${vehicle.mileage}</span>
            </p>
            <p class="body-type flex">
              <span>Body Type</span><span class="right-aligned">${vehicle.bodyType}</span>
            </p>
            <p class="wheelbase flex">
              <span>Wheelbase</span><span class="right-aligned">${vehicle.wheelbase}</span>
            </p>
          </div>
          <a href="test-product.html?id=${vehicle.id}"
            ><button class="view-vehicle-btn">View <br />Vehicle</button></a
          >
          <div class="photos-video">
            <p><i class="fa-solid fa-camera"></i> 10 Photos</p>
            <p><i class="fa-solid fa-video"></i> Video</p>
          </div>
        </div>
    `;
    container.innerHTML += card;
  });
}

if (desktopContainer) {
  // Only run on pages where the container exists
  vehicles.forEach((vehicle) => {
    const card = `
        <div class="vans-card">
          <div class="vans-card-banner">
            ALL VEHICLES ARE RIGOROUSLY TESTED FOR QUALITY
          </div>
          <div class="vans-card-image">
            <img src="${vehicle.image}" alt="/" class="van-image" />
          </div>
          <div class="vans-card-badges">
            <div class="autoTrader">
              <img
                src="images/AutoTrader-review-badge.png"
                alt="Review Badge"
                class="autoTrader-image"
              />
            </div>
            <div class="card-logo">
              <img
                src="images/Untitled design (2).png"
                alt="logo"
                class="card-logo-image"
              />
            </div>
            <div class="free-delivery">
              <span class="free">FREE</span
              ><span class="delivery">DELIVERY</span>
            </div>
          </div>
          <div class="price">
            <p>£${vehicle.price} <span class="vat">+ VAT</span></p>
          </div>
          <hr />
          <p class="van-name">
            ${vehicle.name}
          </p>
          <hr />
          <div class="van-spec">
            <p class="year flex">
              <span>Year</span><span class="right-aligned">${vehicle.year}</span>
            </p>
            <p class="Mileage flex">
              <span>Mileage</span><span class="right-aligned">${vehicle.mileage}</span>
            </p>
            <p class="body-type flex">
              <span>Body Type</span><span class="right-aligned">${vehicle.bodyType}</span>
            </p>
            <p class="wheelbase flex">
              <span>Wheelbase</span><span class="right-aligned">${vehicle.wheelbase}</span>
            </p>
          </div>
          <a href="test-product.html?id=${vehicle.id}"
            ><button class="view-vehicle-btn">View <br />Vehicle</button></a
          >
          <div class="photos-video">
            <p><i class="fa-solid fa-camera"></i> 10 Photos</p>
            <p><i class="fa-solid fa-video"></i> Video</p>
          </div>
        </div>
    `;
    desktopContainer.innerHTML += card;
  });
}

///

function renderVehicles(list, targetContainer) {
  targetContainer.innerHTML = ""; // clear old cards
  list.forEach((vehicle) => {
    const card = `
      <div class="vans-card">
        <div class="vans-card-banner">
          ALL VEHICLES ARE RIGOROUSLY TESTED FOR QUALITY
        </div>
        <div class="vans-card-image">
          <img src="${vehicle.image}" alt="/" class="van-image" />
        </div>
        <div class="vans-card-badges">
          <div class="autoTrader">
            <img src="images/AutoTrader-review-badge.png" alt="Review Badge" class="autoTrader-image" />
          </div>
          <div class="card-logo">
            <img src="images/Untitled design (2).png" alt="logo" class="card-logo-image" />
          </div>
          <div class="free-delivery">
            <span class="free">FREE</span><span class="delivery">DELIVERY</span>
          </div>
        </div>
        <div class="price">
          <p>£${vehicle.price} <span class="vat">+ VAT</span></p>
        </div>
        <hr />
        <p class="van-name">${vehicle.name}</p>
        <hr />
        <div class="van-spec">
          <p class="year flex">
            <span>Year</span><span class="right-aligned">${vehicle.year}</span>
          </p>
          <p class="Mileage flex">
            <span>Mileage</span><span class="right-aligned">${vehicle.mileage}</span>
          </p>
          <p class="body-type flex">
            <span>Body Type</span><span class="right-aligned">${vehicle.bodyType}</span>
          </p>
          <p class="wheelbase flex">
            <span>Wheelbase</span><span class="right-aligned">${vehicle.wheelbase}</span>
          </p>
        </div>
        <a href="test-product.html?id=${vehicle.id}">
          <button class="view-vehicle-btn">View <br />Vehicle</button>
        </a>
        <div class="photos-video">
          <p><i class="fa-solid fa-camera"></i> 10 Photos</p>
          <p><i class="fa-solid fa-video"></i> Video</p>
        </div>
      </div>
    `;
    targetContainer.innerHTML += card;
  });
}

const sortSelect = document.getElementById("priceFilter");

if (sortSelect) {
  // check initial value on page load
  // Initial render: default sort by price high → low
  const defaultSorted = [...vehicles].sort((a, b) => b.price - a.price);
  if (container) renderVehicles(defaultSorted, container);
  if (desktopContainer) renderVehicles(defaultSorted, desktopContainer);

  // re-sort when user changes the select
  sortSelect.addEventListener("change", (e) => {
    let sortedVehicles = [...vehicles];

    if (e.target.value === "highToLow") {
      sortedVehicles.sort((a, b) => b.price - a.price);
    } else if (e.target.value === "lowToHigh") {
      sortedVehicles.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "newestToOldest") {
      sortedVehicles.sort((a, b) => b.year - a.year);
    } else if (e.target.value === "oldestToNewest") {
      sortedVehicles.sort((a, b) => a.year - b.year);
    }

    if (container) renderVehicles(sortedVehicles, container);
    if (desktopContainer) renderVehicles(sortedVehicles, desktopContainer);
  });
}

// FILTERS FORM CODE

// 1. Define models for each make
const modelsByMake = {
  Ford: ["Transit Connect", "Transit Custom"],
  Citroen: ["Berlingo"],
  Toyota: ["ProAce"],
  Renault: ["Trafic"],
  Volkswagen: ["Caddy"],
  Peugeot: ["Partner", "Boxer"],
};

// 2. Select DOM elements
const makeSelect = document.getElementById("make");
const modelSelect = document.getElementById("model");
const maxPriceSelect = document.getElementById("maxPrice");
const searchButton = document.getElementById("searchVehicles");

// 3. Populate models when make changes
makeSelect.addEventListener("change", () => {
  const selectedMake = makeSelect.value;

  // Clear current model options
  modelSelect.innerHTML = `<option value="" disabled selected hidden>Select a model</option>`;

  // Add models for the selected make
  if (modelsByMake[selectedMake]) {
    modelsByMake[selectedMake].forEach((model) => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  }
});

// 4. Search Vehicles button logic
searchButton.addEventListener("click", () => {
  const selectedMake = makeSelect.value;
  const selectedModel = modelSelect.value;
  const selectedMaxPrice = parseInt(maxPriceSelect.value);

  let filteredVehicles = [...vehicles];

  if (selectedMake) {
    filteredVehicles = filteredVehicles.filter((v) => v.make === selectedMake);
  }
  if (selectedModel) {
    filteredVehicles = filteredVehicles.filter(
      (v) => v.model === selectedModel
    );
  }

  if (selectedMaxPrice) {
    filteredVehicles = filteredVehicles.filter(
      (v) => v.price <= selectedMaxPrice
    );
  }

  // Render filtered vehicles (use your renderVehicles function)
  if (container) renderVehicles(filteredVehicles, container);
  if (desktopContainer) renderVehicles(filteredVehicles, desktopContainer);
});

// DESKTOP FORM CODE

// --- Desktop Form Elements ---
const desktopMakeSelect = document.querySelector(
  ".desktop-select:nth-of-type(1)"
);
const desktopModelSelect = document.querySelector(
  ".desktop-select:nth-of-type(2)"
);
const desktopMaxPriceSelect = document.querySelector(
  ".max-price.desktop-select"
);
const desktopSearchButton = document.querySelector(".desktop-view-vehicles");

// 1️⃣ Populate max price options for desktop
const maxPrices = [
  { value: 8000, text: "£8,000" },
  { value: 10000, text: "£10,000" },
  { value: 12000, text: "£12,000" },
];

// Clear any existing options and add default
desktopMaxPriceSelect.innerHTML =
  '<option value="" disabled selected hidden>Max total price</option>';

maxPrices.forEach((price) => {
  const option = document.createElement("option");
  option.value = price.value;
  option.textContent = price.text;
  desktopMaxPriceSelect.appendChild(option);
});

// 2️⃣ Populate desktop makes dynamically
desktopMakeSelect.innerHTML =
  '<option value="" disabled selected hidden>Select a make</option>';
Object.keys(modelsByMake).forEach((make) => {
  const option = document.createElement("option");
  option.value = make;
  option.textContent = make;
  desktopMakeSelect.appendChild(option);
});

// 3️⃣ Populate models when desktop make changes
desktopMakeSelect.addEventListener("change", () => {
  const selectedMake = desktopMakeSelect.value;
  desktopModelSelect.innerHTML =
    '<option value="" disabled selected hidden>Select a model</option>';

  if (modelsByMake[selectedMake]) {
    modelsByMake[selectedMake].forEach((model) => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      desktopModelSelect.appendChild(option);
    });
  }
});

// 4️⃣ Search button logic
desktopSearchButton.addEventListener("click", () => {
  const selectedMake = desktopMakeSelect.value;
  const selectedModel = desktopModelSelect.value;
  const selectedMaxPrice = parseInt(desktopMaxPriceSelect.value);

  let filteredVehicles = [...vehicles];

  if (selectedMake) {
    filteredVehicles = filteredVehicles.filter((v) => v.make === selectedMake);
  }
  if (selectedModel) {
    filteredVehicles = filteredVehicles.filter(
      (v) => v.model === selectedModel
    );
  }
  if (!isNaN(selectedMaxPrice)) {
    filteredVehicles = filteredVehicles.filter(
      (v) => v.price <= selectedMaxPrice
    );
  }

  // Render filtered vehicles
  if (container) renderVehicles(filteredVehicles, container);
  if (desktopContainer) renderVehicles(filteredVehicles, desktopContainer);
});

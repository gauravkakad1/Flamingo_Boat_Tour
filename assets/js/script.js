'use strict';

/**
 * Navbar toggle
 */
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);


/**
 * Header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * Show/hide additional destination items
 */
document.addEventListener('DOMContentLoaded', () => {
  const highlightsBtn = document.getElementById('highlightsBtn');
  const hiddenItems = document.querySelectorAll('.popular-list li:nth-child(n+4)');

  hiddenItems.forEach(item => {
    item.classList.add('hidden');
  });

  highlightsBtn.addEventListener('click', () => {
    hiddenItems.forEach(item => {
      item.classList.toggle('hidden');
    });

    if (highlightsBtn.textContent === 'More Highlights') {
      highlightsBtn.textContent = 'Less Highlights';
    } else {
      highlightsBtn.textContent = 'More Highlights';
    }
  });
});


/**
 * Show/hide additional packages items
 */
document.addEventListener('DOMContentLoaded', function () {
  const viewAllBtn = document.getElementById('viewAllPackages');
  const packageCards = document.querySelectorAll('.package-list li:nth-child(n+3)');

  let isExpanded = false;

  // Initially show the first three package cards
  for (let i = 0; i < 3; i++) {
    packageCards[i].style.display = 'block';
  }

  // Initially hide the package cards from the fourth index onwards
  for (let i = 3; i < packageCards.length; i++) {
    packageCards[i].style.display = 'none';
  }

  // Function to toggle visibility of package cards
  function togglePackages() {
    for (let i = 3; i < packageCards.length; i++) {
      if (isExpanded) {
        packageCards[i].style.display = 'none';
        viewAllBtn.textContent = 'View All Packages';
      } else {
        packageCards[i].style.display = 'block';
        viewAllBtn.textContent = 'Hide Packages';
      }
    }
    isExpanded = !isExpanded;
  }

  // Add click event listener to the "View All Packages" button
  viewAllBtn.addEventListener('click', togglePackages);
});

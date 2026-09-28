'use strict';

/* --------------------------------------------------------------------------
   Page navigation.
   A nav button's text, lowercased, must equal the data-page value of the
   section it opens. Nothing else couples them, so renaming a tab means
   changing both.
   -------------------------------------------------------------------------- */

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    const target = this.textContent.trim().toLowerCase();

    pages.forEach(function (page) {
      page.classList.toggle("active", page.dataset.page === target);
    });

    navLinks.forEach(function (other) {
      other.classList.remove("active");
    });

    this.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });

  });

});


/* --------------------------------------------------------------------------
   Project category filter.
   A filter button's text, lowercased, must equal a data-category value
   (or be "all").
   -------------------------------------------------------------------------- */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

filterBtns.forEach(function (btn) {

  btn.addEventListener("click", function () {

    const selected = this.textContent.trim().toLowerCase();

    filterItems.forEach(function (item) {
      const show = selected === "all" || item.dataset.category === selected;
      item.classList.toggle("active", show);
    });

    filterBtns.forEach(function (other) {
      other.classList.remove("active");
    });

    this.classList.add("active");

  });

});

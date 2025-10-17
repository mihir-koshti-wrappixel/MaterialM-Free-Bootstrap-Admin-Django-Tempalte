/*
Template Name: Admin Template
Author: Wrappixel

File: js
*/
// ==============================================================
// Auto select left navbar
// ==============================================================

//===================
$(function () {
  "use strict";

  // Handle only dropdown toggle links
  document.querySelectorAll("#sidebarnav a.has-arrow").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation(); // ✅ Hard stop duplicate running

      var submenu = this.nextElementSibling;
      var isAlreadyOpen = submenu.classList.contains("in");

      // Close all dropdowns first
      document.querySelectorAll("#sidebarnav ul.in").forEach(function (openMenu) {
        openMenu.classList.remove("in");
      });
      document.querySelectorAll("#sidebarnav a.active").forEach(function (navLink) {
        navLink.classList.remove("active");
      });
      document.querySelectorAll("#sidebarnav li.selected").forEach(function (li) {
        li.classList.remove("selected");
      });

      // Reopen only if it wasn't already open
      if (!isAlreadyOpen) {
        submenu.classList.add("in");
        this.classList.add("active");
        this.closest("li").classList.add("selected");
      }
    });
  });

  // ✅ Handle leaf links separately (no dropdowns)
  document.querySelectorAll("#sidebarnav a:not(.has-arrow)").forEach(function (link) {
    link.addEventListener("click", function (e) {
      document.querySelectorAll("#sidebarnav a.active").forEach(function (navLink) {
        navLink.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // ✅ Auto highlight active link based on current URL
  setTimeout(function () {
    var currentPath = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash

    document.querySelectorAll("#sidebarnav a").forEach(function (link) {
      var linkPath = link.getAttribute("href").replace(/\/$/, "");

      if (linkPath === currentPath || currentPath.endsWith(linkPath)) {
        link.classList.add("active");
        var parentLi = link.closest("li");

        if (parentLi) parentLi.classList.add("selected");
        var submenu = link.closest("ul");

        if (submenu && submenu.classList.contains("collapse")) {
          submenu.classList.add("in");
          var parentToggle = submenu.previousElementSibling;
          if (parentToggle) parentToggle.classList.add("active");
        }
      }
    });
  }, 10);
});

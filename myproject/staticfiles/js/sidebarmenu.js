/*
Template Name: Admin Template
Author: Wrappixel

File: js
*/
// ==============================================================
// Auto select left navbar
// ==============================================================
// $(function () {
//   "use strict";
//   var url = window.location + "";
//   var path = url.replace(
//     window.location.protocol + "//" + window.location.host + "/",
//     ""
//   );
//   var element = $("ul#sidebarnav a").filter(function () {
//     return this.href === url || this.href === path; // || url.href.indexOf(this.href) === 0;
//   });

//   function findMatchingElement() {
//     var currentUrl = window.location.href;
//     var anchors = document.querySelectorAll("#sidebarnav a");
//     for (var i = 0; i < anchors.length; i++) {
//       if (anchors[i].href === currentUrl) {
//         return anchors[i];
//       }
//     }

//     return null; // Return null if no matching element is found
//   }
//   var elements = findMatchingElement();

//   // Do something with the matching element
//   if(elements){
//     elements.classList.add("active");
//   }

//   document
//     .querySelectorAll("ul#sidebarnav ul li a.active")
//     .forEach(function (link) {
//       link.closest("ul").classList.add("in");
//       link.closest("ul").parentElement.classList.add("selected");
//     });

//   document.querySelectorAll("#sidebarnav li").forEach(function (li) {
//     const isActive = li.classList.contains("selected");
//     if (isActive) {
//       const anchor = li.querySelector("a");
//       if (anchor) {
//         anchor.classList.add("active");
//       }
//     }
//   });

//   document.querySelectorAll("#sidebarnav a").forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       const isActive = this.classList.contains("active");
//       const parentUl = this.closest("ul");
//       if (!isActive) {
//         // hide any open menus and remove all other classes
//         parentUl.querySelectorAll("ul").forEach(function (submenu) {
//           submenu.classList.remove("in");
//         });
//         parentUl.querySelectorAll("a").forEach(function (navLink) {
//           navLink.classList.remove("active");
//         });

//         // open our new menu and add the open class
//         const submenu = this.nextElementSibling;
//         if (submenu) {
//           submenu.classList.add("in");
//         }

//         this.classList.add("active");
//       } else {
//         this.classList.remove("active");
//         parentUl.classList.remove("active");
//         const submenu = this.nextElementSibling;
//         if (submenu) {
//           submenu.classList.remove("in");
//         }
//       }
//     });
//   });

// });

$(function () {
  "use strict";

  // Helper: Get the current path relative to the host
  var currentPath = window.location.pathname;

  // Function to find the matching sidebar link
  function findMatchingLink() {
    var anchors = document.querySelectorAll("#sidebarnav a");
    for (var i = 0; i < anchors.length; i++) {
      // Compare pathname only, ignore query params
      if (anchors[i].pathname === currentPath) {
        return anchors[i];
      }
    }
    return null;
  }

  var activeLink = findMatchingLink();

  if (activeLink) {
    activeLink.classList.add("active");

    // Add 'in' and 'selected' to parent <ul> and <li>
    var parentUl = activeLink.closest("ul");
    while (parentUl && parentUl.id !== "sidebarnav") {
      parentUl.classList.add("in");
      var parentLi = parentUl.closest("li");
      if (parentLi) {
        parentLi.classList.add("selected");
        var parentAnchor = parentLi.querySelector("a");
        if (parentAnchor) parentAnchor.classList.add("active");
      }
      parentUl = parentUl.parentElement.closest("ul");
    }
  }

  // Click handler for sidebar links
  document.querySelectorAll("#sidebarnav a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var parentUl = this.closest("ul");

      // Remove active classes from all links in this ul
      parentUl.querySelectorAll("a").forEach(function (navLink) {
        navLink.classList.remove("active");
      });

      // Remove 'in' class from all nested uls in this ul
      parentUl.querySelectorAll("ul").forEach(function (submenu) {
        submenu.classList.remove("in");
      });

      // Toggle active on clicked link
      this.classList.add("active");

      // Open submenu if it exists
      var submenu = this.nextElementSibling;
      if (submenu && submenu.tagName === "UL") {
        submenu.classList.add("in");
      }

      // Add 'selected' to parent li
      var parentLi = this.closest("li");
      if (parentLi) parentLi.classList.add("selected");
    });
  });
});

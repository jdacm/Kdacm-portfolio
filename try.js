$(document).ready(function(){
    // Highlight bottom nav links
    let clickEvent = false;

    $("#myCarousel").on("click", ".nav a", function(){
        clickEvent = true;
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
    }).on("slid.bs.carousel", function(e){
        if (!clickEvent){
            const itemIndex = $(e.relatedTarget).index();
            const targetNavItem = $(".nav li[data-slide-to='" + itemIndex + "']");
            $(".nav li").not(targetNavItem).removeClass("active");
            targetNavItem.addClass("active");
        }
        clickEvent = false;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const closeSidebar = document.querySelector("#close-sidebar");
  
    menuIcon.addEventListener("click", function () {
      sidebar.classList.add("open");
      sidebarOverlay.classList.add("show");
  
      // Add a delay before applying the rotation class
      setTimeout(function () {
        closeSidebar.classList.add("rotate-icon"); // Apply rotation class
      }, 500); // Adjust the delay time (in milliseconds) as needed
    });
  
    closeSidebar.addEventListener("click", function () {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
  
      closeSidebar.classList.remove("rotate-icon"); // Remove rotation class
    });
  
    sidebarOverlay.addEventListener("click", function () {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
  
      closeSidebar.classList.remove("rotate-icon"); // Remove rotation class
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const closeSidebar = document.querySelector("#close-sidebar");
    const menuContainer = document.querySelector(".menu-container");
  
    menuIcon.addEventListener("click", function () {
      sidebar.classList.add("open");
      sidebarOverlay.classList.add("show");
  
      // Add a delay before applying the rotation class
      setTimeout(function () {
        closeSidebar.classList.add("rotate-icon"); // Apply rotation class
      }, 100); // Adjust the delay time (in milliseconds) as needed
    });
  
    closeSidebar.addEventListener("click", function () {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
  
      closeSidebar.classList.remove("rotate-icon"); // Remove rotation class
    });
  
    sidebarOverlay.addEventListener("click", function () {
      sidebar.classList.remove("open");
      sidebarOverlay.classList.remove("show");
  
      closeSidebar.classList.remove("rotate-icon"); // Remove rotation class
    });
  
    // Add a scroll event listener to toggle the background color
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.3; // 50% of viewport height
  
      if (scrollPosition > scrollThreshold) {
        menuContainer.classList.add("scrolled");
      } else {
        menuContainer.classList.remove("scrolled");
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const sidebar = document.querySelector(".sidebar");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");
  const closeSidebar = document.querySelector("#close-sidebar");
  const menuContainer = document.querySelector(".menu-container");
  const spanElement = document.querySelector(".text-warning");

  menuIcon.addEventListener("click", function () {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("show");

    // Add a delay before applying the rotation class
    setTimeout(function () {
      closeSidebar.classList.add("rotate-icon"); // Apply rotation class
    }, 100); // Adjust the delay time (in milliseconds) as needed
  });

  closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");

    closeSidebar.classList.remove("rotate-icon"); // Remove rotation class
  });

  sidebarOverlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");

    closeSidebar.classList.remove("rotate-icon"); // Remove rotation class
  });

  // Add a scroll event listener to change the span color
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      spanElement.classList.add("text-warning-scroll"); // Apply the color change class
    } else {
      spanElement.classList.remove("text-warning-scroll"); // Remove the color change class
    }
  });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    cssMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        // dotPagination
    //   el: ".swiper-pagination",
    //   clickable: true,

      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });
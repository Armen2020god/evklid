document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function() {
      document.querySelector('.burger__menu').classList.toggle('burger__menu-active');
      document.querySelector('.burger').classList.toggle('burger-active');
  });
});






document.querySelector(".search-submit")
    .addEventListener("click", function () {
      document.querySelector(".search").classList.add("is-active");
    });

    document.querySelector(".search-submit")
    .addEventListener("click", function () {
      document.querySelector(".search-submit").classList.add("search-submit-active");
    });

    document.querySelector(".search__closed")
    .addEventListener("click", function () {
      document.querySelector(".search-submit").classList.toggle("search-submit-active");
    });

    document.querySelector(".search__closed")
    .addEventListener("click", function () {
      document.querySelector(".search").classList.toggle("is-active");
    });
  document.querySelector(".burger").addEventListener("click", function () {
    document.querySelector(".burger").classList.toggle("burger-active");
    document.querySelector("#menu").classList.toggle("is-active");
  });




window.addEventListener('DOMContentLoaded', function() {
  // swiper
  let swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
});



document.querySelectorAll('.work__item').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.work__content-desable').forEach(function(tabContent) {
      tabContent.classList.remove('work__content-active');
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('work__content-active');
    document.querySelectorAll('.work__item').forEach(function(tabContent) {
      tabContent.classList.remove('work__btn-active');
    })
    document.querySelector(`[data-path="${path}"]`).classList.add('work__btn-active');
  });
});



 // accordion
  $( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    heightStyle: 'content',
  });
});

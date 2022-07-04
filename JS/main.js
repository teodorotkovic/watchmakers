let navBg = document.querySelector(".navbar");
let hamburger = document.querySelector(".menu-toggle")
let mobileMenu = document.querySelector(".mobile-menu")
let openedGallery = document.querySelector(".carousel-container")
let carouselItem = document.querySelector(".carousel-item")

const faders = document.querySelectorAll(".fade-in")

//navbar chnge on scroll

window.addEventListener("scroll", function() {
    var value = window.scrollY;

    if (value > 0 ) {
        navBg.classList.add('dim');
    } else {
        navBg.classList.remove('dim');
    }
})

//hamburger menu

function hamTransition() {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
}

//blackscreen hidden after some time

setTimeout(() => {
    const box = document.getElementById('intro-animation');
    box.style.display = 'none';
}, 9000);

//open gallery

function closeGallery() {
    openedGallery.classList.remove('active-gallery');
    document.querySelector(".photo-1").classList.remove('active');
    document.querySelector(".photo-2").classList.remove('active');
    document.querySelector(".photo-3").classList.remove('active');
    document.querySelector(".photo-4").classList.remove('active');
}

function openGallery1() {
    openedGallery.classList.toggle('active-gallery');
    document.querySelector(".photo-1").classList.toggle('active');
}
function openGallery2() {
    openedGallery.classList.toggle('active-gallery');
    document.querySelector(".photo-2").classList.toggle('active');
}
function openGallery3() {
    openedGallery.classList.toggle('active-gallery');
    document.querySelector(".photo-3").classList.toggle('active');
}
function openGallery4() {
    openedGallery.classList.toggle('active-gallery');
    document.querySelector(".photo-4").classList.toggle('active');
}

//FORM

function reservation () {
    document.querySelector(".form-wrapper").classList.toggle('active');
}

function reservationClose() {
    document.querySelector(".form-wrapper").classList.remove('active');
}

//lang 




//fade in effect on scroll

const appearOptions = {
    threshold: 0.7
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

$(function () {

    var top = 0,
        step = 55,
        viewport = $(window).height(),
        body = $.browser.webkit ? $('body') : $('html'),
        wheel = false;


    $('body').mousewheel(function(event, delta) {

        wheel = true;

        if (delta < 0) {

            top = (top+viewport) >= $(document).height() ? top : top+=step;

            body.stop().animate({scrollTop: top}, 400, function () {
                wheel = false;
            });
        } else {

            top = top <= 0 ? 0 : top-=step;

            body.stop().animate({scrollTop: top}, 400, function () {
                wheel = false;
            });
        }

        return false;
    });

    $(window).on('resize', function (e) {
        viewport = $(this).height();
    });

    $(window).on('scroll', function (e) {
        if (!wheel)
            top = $(this).scrollTop();
    });

});


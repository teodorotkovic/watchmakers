let navBg = document.querySelector(".navbar");
let hamburger = document.querySelector(".menu-toggle")
let mobileMenu = document.querySelector(".mobile-menu")

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

var all = document.getElementsByTagName("*"), i = 0, rect, docWidth = document.documentElement.offsetWidth;
for (; i < all.length; i++) {
    rect = all[i].getBoundingClientRect();
    if (rect.right > docWidth || rect.left < 0){
        console.log(all[i]);
        all[i].style.borderTop = '1px solid red';
    }
}


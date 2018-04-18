// Burger Menu

var burgerClickRegion = document.getElementsByClassName('burger-click-region');
var header__menu = document.getElementsByClassName('header__menu')[0];

var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");

            if (header__menu.classList) {
                header__menu.classList.toggle("is-open");
            } else {
                var classes = header__menu.className.split(' ');
                var existingIndex = classes.indexOf("is-open");

                if (existingIndex >= 0)
                    classes.splice(existingIndex, 1);
                else
                    classes.push(className);

                header__menu.className = classes.join(' ');
            }


        }, false);
    });
}

// Sticky header
(function () {
  var header = document.getElementById('header');
  var mainMenu = document.getElementById('main-menu-list');
  var top = header.offsetTop;
  window.onscroll = function stickyHeader() {
    var sticky = mainMenu.offsetTop;
    header.classList.toggle('sticky', (window.pageYOffset > sticky));
    // if (window.pageYOffset >= sticky + 50) {
    //   header.classList.add("sticky");
    // } else {
    //   header.classList.remove("sticky");
    // }
  };
})();

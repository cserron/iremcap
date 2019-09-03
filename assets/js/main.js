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

        if (existingIndex >= 0) {
          classes.splice(existingIndex, 1);
        } else {
          classes.push(className);
        }
        header__menu.className = classes.join(' ');
      }
    }, false);
  });
}

// Sticky header
// (function () {
//   var header = document.getElementById('header');
//   var mainMenu = document.getElementById('main-menu-list');
//   window.onscroll = function stickyHeader() {
//     var sticky = mainMenu.offsetTop;
//     header.classList.toggle('sticky', (window.pageYOffset > sticky));
//   };
// })();

// Home grid
(function () {
  var skills = document.getElementById('skills');
  if (!skills) {
    return;
  }
  var items = skills.getElementsByClassName('skills-item');
  var tip = document.getElementById('skills-text').appendChild(document.createElement('h3'));
  tip.appendChild(document.createTextNode(' '));
  tip.className = 'skills-tip';
  for (var i = 0; i < items.length; i++) {
    items.item(i).addEventListener('mouseenter', function(ev) {
      var title = this.getElementsByClassName('skills-item__title').item(0).firstChild.textContent;
      tip.firstChild.replaceWith(title);
    });
    items.item(i).addEventListener('mouseleave', function(ev) {
      tip.firstChild.replaceWith(' ');
    });
  }
})();

// Contact dialog
(function () {
  var openDialogToggle = document.getElementById('contact-dialog-toggle');
  if (openDialogToggle) {
    var contactDialog = document.getElementById('contact-dialog');
    var stored = sessionStorage.getItem('contactDialog');
    if (stored && stored === 'open') {
      contactDialog.classList.remove('hidden');
    }
    openDialogToggle.addEventListener('click', function () {
      sessionStorage.setItem('contactDialog', (contactDialog.classList.toggle('hidden') ? 'close' : 'open'));
    });
    document.getElementById('contact-dialog-form').addEventListener('submit', function (ev) {
      sessionStorage.setItem('contactDialog', 'close');
    });
  }
})();

// Team modal
var modal = null;
(function () {
  function closeModal (ev) {
    ev.stopPropagation();
    if (modal) {
      modal.classList.remove('modal-open');
      modal = null;
    }
  }

  function openModal (ev) {
    if (ev.target.tagName === 'A') {
      return;
    }
    this.classList.add('modal-open');
    modal = this;
  }

  var teamMembers = document.getElementsByClassName('team__member');
  for (i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].classList.contains('has-more-info')) {
      teamMembers[i].addEventListener('click', openModal);
      teamMembers[i].getElementsByClassName('modal-close')[0].addEventListener('click', closeModal);
    }
  }

  window.onclick = function(event) {
    if (event.target.className === 'modal') {
      closeModal(event);
    }
  }
})();

//Services accordion

var services = document.getElementsByClassName('services-accordion');
  for (i = 0; i < services.length; i++) {
    if (!services[i].classList.contains('accordion-open')) {
      services[i].addEventListener('click', openService);
    }
  }

function openService(){
  var wasOpen = this.classList.contains('accordion-open');
  for (i = 2; i < services.length; i++) { //The two first services need to be always open
    if (services[i].classList.contains('accordion-open')) {
      services[i].classList.remove('accordion-open');
    }
  }
  if(!wasOpen){
    this.classList.add('accordion-open');
  }
}
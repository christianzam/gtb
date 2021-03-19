/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/main.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  "use strict"; //===== Prealoder

  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
  }); //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();

    if (scroll < 10) {
      $(".navbar-area").removeClass("sticky");
    } else {
      $(".navbar-area").addClass("sticky");
    }
  }); //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
  }); //===== Mobile Menu

  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });
  $(".navbar-nav a").on('click', function () {
    $(".navbar-toggler").removeClass('active');
  }); //===== Section Menu Active

  var scrollLink = $('.page-scroll'); // Active link switching

  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  }); //===== Sidebar

  $('[href="#side-menu-right"], .overlay-right').on('click', function (event) {
    $('.sidebar-right, .overlay-right').addClass('open');
  });
  $('[href="#close"], .overlay-right').on('click', function (event) {
    $('.sidebar-right, .overlay-right').removeClass('open');
  }); //===== Isotope Project 3

  $('.container').imagesLoaded(function () {
    var $grid = $('.grid').isotope({
      // options
      transitionDuration: '1s'
    }); // filter items on button click

    $('.portfolio-menu ul').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    }); //for menu active class

    $('.portfolio-menu ul li').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  }); //  Magnific Popup

  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  }); //====== Magnific Popup

  $('.video-popup').magnificPopup({
    type: 'iframe' // other options

  }); //===== Slick

  $('.testimonial-active').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }]
  }); //===== Slick

  $('.testimonial-active-2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }]
  }); //===== Slick

  $('.client-active').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: false,
    autoplay: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 6
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    }]
  }); //===== Slick

  $('.testimonial-active-4').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }]
  }); //===== Back to top
  // Show or hide the sticky footer button

  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  }); //Animate the scroll to yop

  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  }); //=====  AOS

  new WOW().init(); //===== 
});

/***/ })

/******/ });
//# sourceMappingURL=main-035b1429323dbcd99aaf.js.map
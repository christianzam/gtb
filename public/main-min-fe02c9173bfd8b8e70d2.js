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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/main-min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/main-min.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/main-min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  "use strict";

  $(window).on("load", function (o) {
    $(".preloader").delay(500).fadeOut(500);
  }), $(window).on("scroll", function (o) {
    $(window).scrollTop() < 10 ? $(".navbar-area").removeClass("sticky") : $(".navbar-area").addClass("sticky");
  }), $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  }), $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  }), $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });
  var o = $(".page-scroll");
  $(window).scroll(function () {
    var i = $(this).scrollTop();
    o.each(function () {
      $(this.hash).offset().top - 73 <= i && ($(this).parent().addClass("active"), $(this).parent().siblings().removeClass("active"));
    });
  }), $('[href="#side-menu-right"], .overlay-right').on("click", function (o) {
    $(".sidebar-right, .overlay-right").addClass("open");
  }), $('[href="#close"], .overlay-right').on("click", function (o) {
    $(".sidebar-right, .overlay-right").removeClass("open");
  }), AOS.init(), $(".container").imagesLoaded(function () {
    var o = $(".grid").isotope({
      transitionDuration: "1s"
    });
    $(".portfolio-menu ul").on("click", "li", function () {
      var i = $(this).attr("data-filter");
      o.isotope({
        filter: i
      });
    }), $(".portfolio-menu ul li").on("click", function (o) {
      $(this).siblings(".active").removeClass("active"), $(this).addClass("active"), o.preventDefault();
    });
  }), $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: !0
    }
  }), $(".video-popup").magnificPopup({
    type: "iframe"
  }), $(".testimonial-active").slick({
    infinite: !0,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: !1,
    dots: !0,
    autoplay: !0,
    autoplaySpeed: 5e3,
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
        arrows: !1
      }
    }]
  }), $(".testimonial-active-2").slick({
    infinite: !0,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: !1,
    dots: !0,
    autoplay: !0,
    autoplaySpeed: 5e3,
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
        arrows: !1
      }
    }]
  }), $(".client-active").slick({
    infinite: !0,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 800,
    arrows: !1,
    dots: !1,
    autoplay: !0,
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
        arrows: !1
      }
    }]
  }), $(".testimonial-active-4").slick({
    infinite: !0,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: !1,
    dots: !0,
    autoplay: !0,
    autoplaySpeed: 5e3,
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
        arrows: !1
      }
    }]
  }), $(window).on("scroll", function (o) {
    $(this).scrollTop() > 600 ? $(".back-to-top").fadeIn(200) : $(".back-to-top").fadeOut(200);
  }), $(".back-to-top").on("click", function (o) {
    o.preventDefault(), $("html, body").animate({
      scrollTop: 0
    }, 1500);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main-min-fe02c9173bfd8b8e70d2.js.map
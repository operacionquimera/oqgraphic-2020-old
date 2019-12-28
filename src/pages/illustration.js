import React from "react"
import anime from "animejs"
import Imagenes from "../components/Imagens"

// import "./styles.css";

function IllustrationPage() {
  return (
    <div className="App illustration main">
      <Imagenes />
    </div>
  );
}



//
// const IllustrationPage = () => (
//  <section className="App illustration main flex-vertical">
//   <Imagenes />
//  </section>
// )





// $(document).ready(function() {
//   $('body').removeClass('loading').addClass('ready');
//   var allCallbacks = anime({
//     targets: '.grid-item-container',
//     translateY: [110, 0],
//     offset: 200,
//     duration: 600,
//     elasticity: 600,
//     easing: [.4,0,.2,1],
// 		opacity: [0 ,1],
//     delay: function(el, i) { return i * 40 }
//   });
// });



;(function(window) {

	'use strict';

	function StackFx(el) {
		this.DOM = {};
		this.DOM.el = el;
		this.DOM.stack = this.DOM.el.querySelector('.grid-item');
		this.DOM.img = this.DOM.stack.querySelector('.grid-item-image');
		// this.DOM.caption = this.DOM.el.querySelector('.grid__item-caption');
		this.DOM.caption = this.DOM.stack.querySelector('.grid-item-caption');
	}

	StackFx.prototype._removeAnimeTargets = function() {
		anime.remove(this.DOM.img);
		anime.remove(this.DOM.caption);
	};


// HamalFx
	function HamalFx(el) {
		StackFx.call(this, el);
		this._initEvents();
	}

	HamalFx.prototype = Object.create(StackFx.prototype);
	HamalFx.prototype.constructor = HamalFx;

	HamalFx.prototype._initEvents = function() {
		var self = this;
		this._mouseenterFn = function() {
			self._removeAnimeTargets();
			self._in();
		};
		this._mouseleaveFn = function() {
			self._removeAnimeTargets();
			self._out();
		};
		this.DOM.stack.addEventListener('mouseenter', this._mouseenterFn);
		this.DOM.stack.addEventListener('mouseleave', this._mouseleaveFn);
	};

	HamalFx.prototype._in = function() {
		var self = this;
		anime({
			targets: this.DOM.img,
			duration: 1000,
			easing: 'easeOutExpo',
			opacity: 0.3,
      scale: 0.98
		});

		anime({
			targets: [this.DOM.caption],
			duration: 1000,
			easing: 'easeOutExpo',
      opacity: 1,
			translateX: function(target, index) {
				return index === 0 ? 20 : -20;
			}
		});

	};

	HamalFx.prototype._out = function() {
		var self = this;
		anime({
			targets: this.DOM.img,
			duration: 1000,
			easing: 'easeOutElastic',
			opacity: 1,
      scale: 1
		});

		anime({
			targets: [this.DOM.caption],
			duration: 500,
			easing: 'easeOutExpo',
      opacity: 0,
			translateX: 0
		});
	};

	window.HamalFx = HamalFx;
})(window);






export default IllustrationPage

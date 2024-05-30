import React from "react";

const Parallax = () => {
  class ParallaxMove {
    constructor(el) {
      this.moveSection = document.querySelector(el);
      this.moveEl = this.moveSection.querySelectorAll(".parallax");
      this.moveSection.addEventListener("mousemove", (e) => this.moveItem(e));
    }
    moveItem(e) {
      this.moveEl.forEach((item) => {
        const speed = item.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 5000;
        const y = (window.innerWidth - e.pageY * speed) / 5000;
        item.style.transform = `translate(${x}rem, ${y}rem)`;
      });
    }
  }
  const parallaxMove = new ParallaxMove(".main");
};

export default Parallax;

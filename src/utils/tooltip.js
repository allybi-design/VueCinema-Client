import { addClass, removeClass } from "./helperClasses.js";

let overHandler = event => {
  let span = event.target.parentNode.getElementsByTagName("span")[0];
  addClass(span, "tooltip-show");
};
let outHandler = event => {
  let span = event.target.parentNode.getElementsByTagName("span")[0];
  removeClass(span, "tooltip-show");
};

export default {
  install(Vue) {
    Vue.directive("seats", {
      bind(el, binding) {
        let span = document.createElement("span");
        let text = document.createTextNode(`Seats available: ${binding.value}`);
        span.appendChild(text);
        addClass(span, "tooltip");
        el.appendChild(span);
        let div = el.getElementsByTagName("div")[0];
        div.addEventListener("mouseover", overHandler);
        div.addEventListener("mouseout", outHandler);
        div.addEventListener("touchstart", overHandler);
        div.addEventListener("touchend", outHandler);
      },
      unbind(el) {
        let div = el.getElementsByTagName("div")[0];
        div.removeEventListener("mouseover", overHandler);
        div.removeEventListener("mouseout", outHandler);
        div.removeEventListener("touchstart", overHandler);
        div.removeEventListener("touchend", outHandler);
      }
    });
  }
};

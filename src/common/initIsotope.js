// import initIsotope from '../common/initlsotope.js'
import Isotope from 'isotope-layout';
const initIsotope = () => {
  let iso;
  let grid = document.querySelectorAll(".gallery");
  let filtersElem = document.querySelector(".filtering");
  let buttonGroups = document.querySelectorAll(".filtering");

  if (grid.length >= 1) {
    grid.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: ".items",
      });
    });
  }

  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
        if (!event.target.matches("span"))  {
        return;
      }
      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({ filter: filterValue });
    });
    const radioButtonGroup = (buttonGroup) => {
      buttonGroup.addEventListener("click", (event) => {
        if (!event.target.matches("span")) {
          return;
        }
        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    };
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
  }
};

export default initIsotope;

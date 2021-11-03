//finding in the DOM an element that has a class ".light-switch" and storing it in a variable.
const lightSwitch = document.querySelector(".light-switch");

//attaching an event listener to that element. Each time the user clicks the element the callback function gets executed
lightSwitch.addEventListener("click", () => {
  //toggling a class "on" to the element, this will toggle an additional class called "on" to the lightSwitch element.
  lightSwitch.classList.toggle("on");

  //toggling a class "dark-mode" to an element. What element should it be?
  document.querySelector(".container").classList.toggle("dark-mode");
});

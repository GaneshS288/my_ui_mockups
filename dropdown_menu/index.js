class dropdownMenu {
  constructor(dropDownContainer) {
    this.dropDownContainer = dropDownContainer;
  }

  getButton() {
    return Array.from(this.dropDownContainer.children)[0];
  }

  getOptions() {
    return Array.from(this.dropDownContainer.children).filter(
      (option, index) => index !== 0,
    );
  }

  enableDropdown(event) {
    const options = this.getOptions(event);
    options.forEach((option) => {
      option.classList.add("visible");
      if (event.target.textContent === "Click to select") {
        option.addEventListener("click", (event) => {
          this.disableDropdown();
          this.selectOption(event);
        });
      }
    });
  }

  disableDropdown() {
    const options = this.getOptions();
    options.forEach((option) => option.classList.remove("visible"));
  }

  selectOption(event) {
    const button = this.getButton();
    const optionText = event.target.textContent;

    button.textContent = optionText;
  }
}

function createDropdownMenu(className) {
  const dropdownContainer = document.getElementsByClassName(className)[0];
  const newDropdown = new dropdownMenu(dropdownContainer);
  const dropDownButton = newDropdown.getButton();

  dropDownButton.addEventListener(
    "click",
    newDropdown.enableDropdown.bind(newDropdown),
  );
}

const dropDown1 = createDropdownMenu("dropdown-container");

createDropdownMenu("dropdown-container2");

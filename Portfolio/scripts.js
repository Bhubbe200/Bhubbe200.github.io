function getSelectedValue() {
    var dropdown = document.getElementById("myDropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    alert(selectedValue);
  }
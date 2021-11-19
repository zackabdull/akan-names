function getAkan() {
  var yy = parseInt(document.getElementById("year").value);

  var mm = parseInt(document.getElementById("month").value);

  var dd = parseInt(document.getElementById("day").value);

  var cc = parseInt(document.getElementById("century").value);
  //validation
  if (dd <= 0 || dd > 31) {
    alert("Input the correct day!");
  } else if (month <= 0 || month > 12) {
    alert("Input correct month!");
  }

  var day = parseInt(
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7
  );
  var male = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var isMale = document.getElementById("male").checked;

  var isFemale = document.getElementById("female").checked;
  if (isMale == true && isFemale == false) {
    alert("  your Akan name is " + male[day]);
  } else if (isMale == false && isFemale == true) {
    alert(" your Akan name is " + female[day]);
  }
}
getAkan();

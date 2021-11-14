function fn() {
  var d = new Date();
  var year = parseInt(document.getElementById("year").value);

  var month = parseInt(document.getElementById("month").value);

  var date = parseInt(document.getElementById("day").value);
  //the validation
  if (year <= 1800 || year > 2020) {
    alert("Input the correct year!");
  } else if (month <= 0 || month > 12) {
    alert("Input correct month!");
  } else if (date <= 0 || date > 31) {
    alert("Input correct day!");
  }
  var day = d.getDay();
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
  function getAkan() {
    var isMale = document.getElementById("male").checked;

    var isFemale = document.getElementById("female").checked;
    if (isMale == true && isFemale == false) {
      if (day == 0) {
        alert(" and you Akan name is " + male[0]);
      } else if (day == 1) {
        alert(" and you Akan name is " + male[1]);
      } else if (day == 2) {
        alert(" and you Akan name is " + male[2]);
      } else if (day == 3) {
        alert(" and you Akan name is " + male[3]);
      } else if (day == 4) {
        alert(" and you Akan name is " + male[4]);
      } else if (day == 5) {
        alert(" and you Akan name is " + male[5]);
      } else if (day == 6) {
        alert(" and you Akan name is " + male[6]);
      }
    } else if (isMale == false && isFemale == true) {
      if (day == 0) {
        alert(" and you Akan name is " + female[0]);
      } else if (day == 1) {
        alert(" and you Akan name is " + female[1]);
      } else if (day == 2) {
        alert(" and you Akan name is " + female[2]);
      } else if (day == 3) {
        alert(" and you Akan name is " + female[3]);
      } else if (day == 4) {
        alert(" and you Akan name is " + female[4]);
      } else if (day == 5) {
        alert(" and you Akan name is " + female[5]);
      } else if (day == 6) {
        alert(" and you Akan name is " + female[6]);
      }
    }
  }

  getAkan();
}

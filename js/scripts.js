var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function result(){


    var year = parseInt(document.getElementById("year").value);


    var month = parseInt(document.getElementById("month").value);

    var day = parseInt(document.getElementById("day").value);


    var male = document.getElementById("male")

    var female = document.getElementById("female")

    if(day<=0 || day>31){
        alert("input corect date");
    }else if(month<=0 || month>31){
        alert("input correct month");
    }
    var date = new Date(year +month +  day);


    var birthDay = date.getDay();




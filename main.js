let dateInput, monthInput, yearInput, dd, mm, yyyy, temp, past;
const button = document.querySelector(".img-box");
const msg = document.querySelectorAll(".empty-msg");
const title = document.querySelectorAll(".title");

let vals = document.querySelectorAll('.bottom-val'); 

var today = new Date();

button.addEventListener('click', onSubmit);

function onSubmit(e)
{
    dateInput = document.querySelector("#date");
    monthInput = document.querySelector("#month");
    yearInput = document.querySelector("#year");

    dd = dateInput.value;
    mm = monthInput.value; //January is 0!
    yyyy = yearInput.value;
    temp = mm + '/' + dd + '/' + yyyy;

    past = new Date(temp);
    console.log(past.getTime());
    if(checkEmpty() && checkValid())
    {
        calcDate(today, past);
    }
    
}

function checkEmpty()
{
    if(dateInput.value === "")
    {
        msg[0].innerHTML = 'This field is required';
        dateInput.style.borderColor = "hsl(0, 100%, 67%)";
        title[0].style.color = "hsl(0, 100%, 67%)";
    }
    else
    {
        msg[0].innerHTML = '';
        dateInput.style.borderColor = "hsl(0, 0%, 94%)";
        title[0].style.color = "hsl(0, 1%, 44%)";
    }
    if(monthInput.value === "")
    {
        msg[1].innerHTML = 'This field is required';
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        title[1].style.color = "hsl(0, 100%, 67%)";
    }
    else
    {
        msg[1].innerHTML = '';
        monthInput.style.borderColor = "hsl(0, 0%, 94%)";
        title[1].style.color = "hsl(0, 1%, 44%)";
    }
    if(yearInput.value === "")
    {
        msg[2].innerHTML = 'This field is required';
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        title[2].style.color = "hsl(0, 100%, 67%)";
    }
    else
    {
        msg[2].innerHTML = '';
        yearInput.style.borderColor = "hsl(0, 0%, 94%)";
        title[2].style.color = "hsl(0, 1%, 44%)";
    }
    if(dateInput.value === "" || monthInput.value === "" || yearInput.value === "")
        return false;
    else
        return true;
}

function checkValid()
{
    if(yearInput.value > yyyy)
    {
        msg[2].innerHTML = 'Must be in the past';
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        title[2].style.color = "hsl(0, 100%, 67%)";
    }
    else
    {
        msg[2].innerHTML = '';
        yearInput.style.borderColor = "hsl(0, 0%, 94%)";
        title[2].style.color = "hsl(0, 1%, 44%)";
    }
    if(monthInput.value > 12)
    {
        msg[1].innerHTML = 'Must be a valid month';
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        title[1].style.color = "hsl(0, 100%, 67%)";
    }
    else
    {
        msg[1].innerHTML = '';
        monthInput.style.borderColor = "hsl(0, 0%, 94%)";
        title[1].style.color = "hsl(0, 1%, 44%)";
    }
    if((((monthInput.value == 1) || (monthInput.value == 3) || (monthInput.value == 5) || (monthInput.value == 7) || (monthInput.value == 8) || (monthInput.value == 10) || (monthInput.value == 12)) && dateInput.value > 31) ||
        (((monthInput.value == 4) || (monthInput.value == 6) || (monthInput.value == 9) || (monthInput.value == 11)) && dateInput.value > 30)
        || (monthInput.value == 2 && dateInput.value > 28))
    {
        msg[0].innerHTML = 'Must be a valid day';
        dateInput.style.borderColor = "hsl(0, 100%, 67%)";
        title[0].style.color = "hsl(0, 100%, 67%)";    
    }
    else
    {
        msg[0].innerHTML = '';
        dateInput.style.borderColor = "hsl(0, 0%, 94%)";
        title[0].style.color = "hsl(0, 1%, 44%)";
    }
    if(yearInput.value > yyyy || monthInput.value > 12 || ((((monthInput.value == 1) || (monthInput.value == 3) || (monthInput.value == 5) || (monthInput.value == 7) || (monthInput.value == 8) || (monthInput.value == 10) || (monthInput.value == 12)) && dateInput.value > 31) ||
    (((monthInput.value == 4) || (monthInput.value == 6) || (monthInput.value == 9) || (monthInput.value == 11)) && dateInput.value > 30)
    || (monthInput.value == 2 && dateInput.value > 28)))
        return false;
    else
        return true;
}

// remember this is equivalent to 06 01 2010
//dates in js are counted from 0, so 05 is june

function calcDate(date1,date2)
{
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    vals[0].innerHTML = years;
    vals[1].innerHTML = months;
    vals[2].innerHTML = days;

    var message = date2.toDateString();
    message += " was "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    console.log(message);
}
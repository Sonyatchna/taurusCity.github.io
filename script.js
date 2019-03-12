const email = document.getElementById('email');
const select = document.getElementById('select-element');
const datePr = document.getElementById('date1');
const dateVid = document.getElementById('date2');
const arrow = document.getElementById('arrow-up');
const navButtons = document.getElementsByClassName('nav-buttons');

const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener('input', (event) => {
//    console.log(event.target.value);
    if(RegExp(emailCheck).test(event.target.value)) {
        event.target.setCustomValidity("")
    } else {
        event.target.setCustomValidity("Неправильний імейл!")
    }
}, false)

function today () {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!

    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    } 
    if (mm < 10) {
      mm = '0' + mm;
    } 
    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

dateVid.onchange = () => {
    if(datePr.value && ((new Date(dateVid.value)).getTime() < (new Date(datePr.value)).getTime())) {
        dateVid.setCustomValidity("Дата від'їзду повинна бути не раніше дати приїзду!");
    } else {
        datePr.setCustomError = '';
    }
}

datePr.onchange = () => {
    if(dateVid.value && ((new Date(dateVid.value)).getTime() < (new Date(datePr.value)).getTime())) {
        datePr.setCustomValidity("Дата від'їзду повинна бути не раніше дати приїзду!");
    } else {
        datePr.setCustomError = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(!select.validity.valid) {
        select.setCustomError = '';
    }
    dateVid.min = datePr.min = today();
})

select.onchange = () => {
    select.setCustomError = '';
}

function sendForm(event) {
    console.log(select.validity);
    event.preventDefault();
}

Array.from(navButtons).forEach( button => {
    button.onmouseover = () => {
        button.style.backgroundColor = '#662900'
    };
    button.onmouseout = () => {
        button.style.backgroundColor = '#cc5200'
    };
})

window.onscroll = () => {
    document.documentElement.scrollTop > 0 ? arrow.style.visibility = 'visible' : arrow.style.visibility = 'hidden';
}
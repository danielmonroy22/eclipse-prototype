const address = document.getElementById('adress');
const avgBill = document.getElementById('electric-bill');
const inputDiv = document.querySelector('.input-div');
const addressLink = document.getElementById('address-link');
const chooseProductDiv = document.querySelector('.choose-product');
const imageDiv = document.querySelector('.image-div');
const kw_p = document.querySelector('.kw-p');
var kw = 0;
var finalkw = 0;

const submitButton = document.getElementById('submit-button');
function initMap() {
    autocomplete = new google.maps.places.Autocomplete(document.getElementById('adress'), {
        componentRestrictions: { 'country': ['us'] },



    })

}

function submitClicked() {
    if (address.value === "" || avgBill.value === "") {
        return;
    }
    else {
        kw = (((avgBill.value / 0.32) * 12) / 1000);
        finalkw = parseFloat(kw).toFixed(2);


        inputDiv.classList.toggle("hide");
        chooseProductDiv.classList.toggle('show');
        addressLink.innerText = address.value;
        kw_p.innerText = finalkw + 'kW Solar Panels';

        imageDiv.style.backgroundImage = "url('./images/kwavgImage.jpg')"




    }

}
// pop up
function createPopup(id) {
    let popupNode = document.querySelector(id);
    let overlay = popupNode.querySelector(".overlay");

    function openPopup() {
        popupNode.classList.add("active");
    }
    function closePopup() {
        popupNode.classList.remove("active");
    }
    overlay.addEventListener("click", closePopup);

    return openPopup;
}
let popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener("click", popup);

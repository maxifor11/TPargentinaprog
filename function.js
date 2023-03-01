//boton Mas Info
let MasInfo = document.getElementById('MasInfo');
let hidePS = document.getElementById('hidePS');
let hideUTN = document.getElementById('hideUTN');
let hideAdobe = document.getElementById('hideAdobe');
let hideAP = document.getElementById('hideAP');
MasInfo.addEventListener('click', toggleText);
function toggleText() {
    hidePS.classList.toggle('show');
    hideUTN.classList.toggle('show');
    hideAdobe.classList.toggle('show');
    hideAP.classList.toggle('show');
}


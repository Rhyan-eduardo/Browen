function ReloadPage() {
    window.location.reload(true);
}

let ModalURLState = false;
let ModalLHState = false;

let SetURL = document.getElementById('URL-Load');
SetURL.addEventListener('click' , (e) => {
    document.getElementById('URL-Modal').style.background = 'red';
});
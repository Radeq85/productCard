const btn = document.querySelector('.descriptionBtn');
const noShow = document.querySelectorAll('.noShow');
const closeBtn = document.querySelector('.close');


const change = () => {
    noShow.forEach(function (element) {
        element.classList.add('show');
    });
    btn.textContent = "Kup Teraz";
    btn.classList.add("animate__swing");
    closeBtn.style.display = "block";



};

const changeStop = () => {
    noShow.forEach(function (element) {
        element.classList.remove('show');
    });
    btn.textContent = "Opis";
    btn.classList.remove("animate__swing");
    closeBtn.style.display = "none";;
}

btn.addEventListener('click', change);
closeBtn.addEventListener('click', changeStop);
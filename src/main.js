const menuBurger = document.querySelector("#menuBurger");
// ubah icon menjadi x
const menuX = document.querySelector(".fa-bars");
const navMobile = document.querySelector("#navMobile");

// event burger -> disaat klik menu burger, menu berubah menjadi x
menuBurger.addEventListener("click", function () {
    // ubah menu burger ke "fa-x"
    menuX.classList.toggle("fa-x");

    // hilangkan class hidden pada id navMobile
    navMobile.classList.toggle("hidden");
});

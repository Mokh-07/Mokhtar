const res = document.getElementById("res");
const fo1 = document.getElementById("fo1");
const fo2 = document.getElementById("fo2");
const fo3 = document.getElementById("fo3");
const fo = document.getElementById("fo");
const q1 = document.getElementById("check1");
const q2 = document.getElementById("check2");
const confirm = document.getElementById("confirm");

var i = 0;
function f1() {
    if (document.fo1.c2.checked == true) {
        i = i + 1;
    }

    fo1.style.display = "none";
    fo1.style.transition = "all 2s";
    fo2.style.display = "block";
}
function f2() {
    if (document.fo2.c6.checked == true) {
        i = i + 1;
    }
    fo2.style.display = "none";
    fo2.style.transition = "all 2s";
    fo3.style.display = "block";
}
function f3() {
    if (document.fo3.c7.checked == true) {
        i = i + 1;
    }
    fo3.style.transition = "all 2s";
    confirm.style.display = "block";
}
function f() {
    fo3.style.display = "none";
    fo.style.display = "block";

    if (i == 3) {
        res.textContent = " bravo Vous avez " + i + " sur 3";
    } else {

        res.textContent = "Perdu ! Vous avez " + i + " sur 3";
    }
}

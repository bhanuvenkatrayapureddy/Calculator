n1 = 0;
n2 = 0;
op = "";
function send(n) {
    if (op == "") {
        if (n1 == 0) {
            n1 = n;
        }
        else {
            n1 = n1 * 10 + n;
        }
        document.getElementById("inp").innerHTML = n1;
    }
    else {
        if (n2 == 0) {
            n2 = n;
        }
        else {
            n2 = n2 * 10 + n;
        }
        document.getElementById("inp").innerHTML = n2;
    }

}

function bsp() {
    if (op == "") {
        n1 = (n1 / 10) - ((n1 % 10) / 10);
        document.getElementById("inp").innerHTML = n1;
    }
    else {
        n2 = (n2 / 10) - ((n2 % 10) / 10);
        document.getElementById("inp").innerHTML = n2;
    }

}

function sendop(m) {
    if (n1 != 0) {
        op = m;
    }
    document.getElementById("inp").innerHTML = m;
}

function cal() {
    if (op == "+") {
        n1 = n1 + n2;
    }
    if (op === "-") {
        n1 = n1 - n2;
    }
    if (op == "*") {
        n1 = n1 * n2;
    }
    if (op == "/") {
        if (n2 != 0) {
            n1 = n1 / n2;
        }
    }
    document.getElementById("inp").innerHTML = n1;
}

function clr() {
    n1 = 0;
    n2 = 0;
    op = "";
    document.getElementById("inp").innerHTML = "0";
}
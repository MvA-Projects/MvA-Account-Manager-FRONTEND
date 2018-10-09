function logIn() {
    document.getElementsByClassName('top-menubar-loggedin')[0].style.display = "block";
    document.getElementsByClassName('top-menubar-loggedout')[0].style.display = "none";
}

function logOut() {
    document.getElementsByClassName('top-menubar-loggedin')[0].style.display = "none";
    document.getElementsByClassName('top-menubar-loggedout')[0].style.display = "block";
}

function checkLogin() {
    let loggedin = 0;
    if (localStorage.email != undefined) {
        //api request
    }

    if (loggedin) {
        logIn();
    } else {
        logOut();
    }
}
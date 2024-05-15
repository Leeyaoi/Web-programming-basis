window.onload = function () {
    if (localStorage.getItem("loadedBefore") === null) {
        Data.getUsers()
        Data.getBaseLang()
        localStorage.setItem("loadedBefore", true);
    }
}
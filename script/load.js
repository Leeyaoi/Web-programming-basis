window.onload = function () {
    if (localStorage.getItem("loadedBefore") === null) {
        Data.getUsers()
        localStorage.setItem("loadedBefore", true);
    }
}
function loadLocalStorage() {
    for (let i = 0; i < localStorage.length; i++)
        addCar(JSON.parse(localStorage.getItem(0)))
}
loadLocalStorage()
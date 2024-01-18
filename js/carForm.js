const brands = [
    "AUDI",
    "BMW",
    "VOLVO",
    "TOYOTA",
    "No models"
]
const models = {
    "AUDI": ["A4", "A6", "Q2", "Q3", "Q4"],
    "BMW": ["E46", "E39", "E36"],
    "VOLVO": ["XC90", "XC60", "Q7", "X1"],
    "TOYOTA": ["CORALLA", "CAMRY", "HILIUX"]
}
const color = {

}
function addOptions(select, arr, placeholder) {
    const option = document.createElement("option")
    option.setAttribute("value", "")
    option.textContent = placeholder ?? "Select value"
    select.append(option)
    arr.forEach((val) => {
        const option = document.createElement("option")
        option.setAttribute("value", val)
        option.textContent = val
        select.append(option)
    })
}
function renderModels(e) {

    const model = e.target.value
    let modelSelect = document.getElementById("model-select")
    if (!model) {
        if (modelSelect) {
            modelSelect.remove()
            return;
        }
    }

    const brandModels = models[model]

    const container = document.getElementById("model-select-container")
    if (!modelSelect) {
        modelSelect = document.createElement("select")
        modelSelect.setAttribute("id", "model-select")
        modelSelect.setAttribute("name", "model")
        modelSelect.setAttribute("required", "")
        container.append(modelSelect)
    }
    else
        modelSelect.innerHTML = ""
    addOptions(modelSelect, brandModels, "Select model")
}

function renderBrands() {
    const brandSelectionEl = document.getElementById("brand-select")
    brandSelectionEl.addEventListener("change", renderModels)
    addOptions(brandSelectionEl, brands, "Select brand")
}

function getSelectedRadio(containerName) {
    const radioContainer = document.getElementById(containerName)
    const radios = radioContainer.querySelectorAll("input[type='radio']")
    for (let radio of radios) {
        if (radio.checked)
            return radio.value
    }
    return null;
}

function submit(e) {
    e.preventDefault()
    console.log("Add car")
    //POST request would be made to validate form input against the data that was previously received for select brands/models
    const brandName = document.getElementById("brand-select").value
    const modelName = document.getElementById("model-select").value
    const engineTypeName = getSelectedRadio("engine-type-container")
    const basePriceAmount = document.getElementById("base-price").value
    const mileageAmount = document.getElementById("mileage").value
    const imgSrc = document.getElementById("img-src").value
    // constructor(brand, model, engine, basePrice, mileage, image, color = "juoda")
    const carData = { brand: brandName, model: modelName, engine: engineTypeName, basePrice: basePriceAmount, mileage: mileageAmount, image: imgSrc }
    addCar(carData);
    localStorage.setItem(localStorage.length, JSON.stringify(carData))
}
function addCar(...carData) {
    console.log(...carData)
    const carToAdd = new Car(...carData);
    carToAdd.renderElement()
}

// MAIN could be seperated
renderBrands()
const form = document.getElementById("car-form")
form.addEventListener("submit", submit)
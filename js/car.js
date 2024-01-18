class Car {
    baseColor = ["black", "red", "blue", "silver", "white", 'special blue']
    constructor(props, color = "juoda") {
        this.brand = props.brand
        this.model = props.model
        this.engine = props.engine
        this.basePrice = { price: props.basePrice }
        this.mileage = props.mileage
        this.image = props.image;
        console.log(color)
        if (color.toLocaleLowerCase() === 'special blue')
            this.basePrice["price"] += 500
        else if (!this.baseColor.some((val) => val.toLowerCase() === color.toLowerCase()))
            this.basePrice["price"] += 3000
    }
    turnOn() {
        alert("VROOOM SQRT SQRRRRRRRRT")
    }
    getPrice() {
        let modification = 1
        if (this.mileage >= 400000)
            modification = .5
        else if (this.mileage >= 100000)
            modification = .7
        else if (this.mileage >= 50000)
            modification = .85
        else if (this.mileage >= 20000)
            modification = .85
        else if (this.mileage > 0)
            modification = .9

        let engineBonus = 0;
        switch (this.engine.toLowerCase()) {
            case "diesel": {
                engineBonus += 500
                break;
            }
            case "electric": {
                engineBonus += 1000
                break;
            }
            case "gas": {
                engineBonus += 100
                break;
            }
        }
        console.log(this.basePrice["price"], modification, engineBonus)
        return this.basePrice["price"] * modification + engineBonus
    }
    getDiscount(discount) {
        return this.basePrice["price"] - discount;
    }
    getInfo() {
        return this.brand + " " + this.model + " " + this.engine + " " + this.mileage
    }
    renderElement() {
        const container = document.getElementById("cars-container");

        const carDiv = document.createElement("div")
        carDiv.classList.add("car-card")
        const heading = document.createElement("h2")
        const content = document.createTextNode(this.getInfo())
        heading.append(content)

        const img = document.createElement("img");
        img.classList.add("car-img")
        img.src = this.image
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container")
        imgContainer.append(img)
        carDiv.append(heading, imgContainer)
        // carDiv.appendChild(img)

        container.append(carDiv)
    }
}

// console.log(myCar.getDiscount(100))
// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPrice priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.
// 3. Pridėti funkciją 'getDiscount', kuri, kaip argumentą, priima nuolaidos dydį ir grąžina kainą su nuolaida.
// 4. Pridėti property 'mileage' ir papildoti automobilių objektus pridedant jų ridą.
// 5. Pakoreguoti kainų funkcijas:
//        5.1. Jeigu rida daugiau nei 0, tai kaina sumažėja 10%.
//        5.2. Jeigu rida daugiau nei 20000, tai kaina sumažėja 15%.
//        5.3. Jeigu rida daugiau nei 50000, tai kaina sumažėja 20%.
//        5.4. Jeigu rida daugiau nei 100000, tai kaina sumažėja 30%.
//        5.5. Jeigu rida daugiau nei 400000, tai kaina sumažėja 50%.

// 6. Pridėti property 'baseColors'. Tai bus masyvas su bazinėmis spalvomis (juoda, raudona, mėlyna, sidabrinė, balta, 'special blue'). Jų pakeisti negalima, nes yra sukuriamos tiesiogiai klasės constructor funkcijoje.
//        6.1. Pridėti property 'color', kuria galima papildyti kuriant automobilio objektą pagal klasę. Jeigu kuriant objektą, spalva nėra nurodoma, tai pagal nutylėjimą ji bus juoda.
//        6.2. Jeigu nurodyta spalva yra 'special blue', tai automobilio kaina turi padidėti 500.
//        6.3. Jeigu nurodytos spalvos nėra tarp bazinių spalvų, tai automobilio kaina turėtų padidėti 3000.
// 7. Sukurti metodą 'renderElement', kuris sukurią html elementą, jame atvaizduoja automobilio informaciją (modelį, brandą, variklio tipą, kilometražą, spalvą, bazinę kainą) ir šį elementą išveda į ekraną.
//        7.1. Pridėti property 'image' (nuotraukos nuoroda), kuris turėtų būti nuotrauka ir šią nuotrauką, taip pat, pridėti į formuluojamą elementą.
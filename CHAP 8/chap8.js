var dreamCar = {
    make: "Carl Benz",
    model: "86",
    color: "brown",
    year: 1886,
    bodyStyle: "Luxury Car",
    price: 1500
};

document.getElementById("pricetag")
    .innerHTML = dreamCar.price;

document.getElementById("modelyear")
    .innerHTML = dreamCar.year;

document.getElementById("body")
    .style.backgroundColor = dreamCar.color;

document.getElementById("body")
    .innerHTML = dreamCar.make + " " + dreamCar.model;
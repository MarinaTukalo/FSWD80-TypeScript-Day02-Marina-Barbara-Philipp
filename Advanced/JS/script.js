var printText = document.getElementById("carsCard");
class Veh {
    constructor(description, model, ps, year, kilometer, img) {
        this.description = description;
        this.model = model;
        this.ps = ps;
        this.year = year;
        this.kilometer = kilometer;
        this.img = img;
    }
}
class Car extends Veh {
    constructor(description, model, ps, year, kilometer, img, seats) {
        super(description, model, ps, year, kilometer, img);
        this.seats = seats;
    }
    displayCars() {
        printText.innerHTML = `<div class="card col-10 offset-1 col-md-3 offset-md-0 mx-auto p-0" style="width: 18rem;">
                    <img src="this.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this.model}</h5>
                        <p class="card-text">${this.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item font-weight-bold">PS: <span class="font-weight-normal">${this.ps}</span></li>
                        <li class="list-group-item font-weight-bold">Kilometer: <span class="font-weight-normal">${this.kilometer}</span></li>
                        <li class="list-group-item font-weight-bold">Year: <span class="font-weight-normal">${this.year}</span></li>
                         <li class="list-group-item font-weight-bold">Seats: <span class="font-weight-normal">${this.seats}</span></li>
                    </ul>
                    <div class="card-body">
                        <button class="btn buttonShowMore">Price</button>
                        <span id="printPrice" class="ml-4">€ 120</span>
                    </div>
                </div>`;
    }
}
class Truck extends Veh {
    constructor(description, model, ps, year, kilometer, img, height) {
        super(description, model, ps, year, kilometer, img);
        this.height = height;
    }
}
let fiat = new Car("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Fiat 500", 50, 2010, 100.000, "img/fiat.jpg", 4);
let bulli = new Car("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "VW Bulli", 25, 1967, 500.000, "img/vw.png", 9);
let trabi = new Car("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Trabi", 20, 1964, 700.000, "img/trabi.png", 4);
let dodge = new Truck("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Dodge", 30, 1944, 400.000, "img/dodge.png", "2m");
let iceCreamTruck = new Truck("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Ice Cream Truck", 70, 1984, 300.000, "img/truck4.png", "3m");
let fordPickUp = new Truck("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", "Ford Pickup", 70, 1974, 400.000, "img/ford.png", "2.5m");
//display Cars or Trucks onclick
var btnCars = document.getElementById("btnCars");
var btnTruck = document.getElementById("btnTruck");
var arrayCars = [fiat, bulli, trabi];
var arrayTruck = [dodge, iceCreamTruck, fordPickUp];
// for(let i = 0; i<arrayCars.length, i++;){
//   btnCars.addEventListener("click",()=>{arrayCars[i].displayCars});
// }
function displayTrucks() {
    let text = " ";
    for (let i in arrayTruck) {
        text += `<div class="card col-10 offset-1 col-md-3 offset-md-0 mx-auto p-0" style="width: 18rem;">
                      <img src="${arrayTruck[i].img}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${arrayTruck[i].model}</h5>
                          <p class="card-text">${arrayTruck[i].description}</p>
                      </div>
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item font-weight-bold">PS: <span class="font-weight-normal">${arrayTruck[i].ps}</span></li>
                          <li class="list-group-item font-weight-bold">Kilometer: <span class="font-weight-normal">${arrayTruck[i].kilometer}</span></li>
                          <li class="list-group-item font-weight-bold">Year: <span class="font-weight-normal">${arrayTruck[i].year}</span></li>
                           <li class="list-group-item font-weight-bold">Height: <span class="font-weight-normal">${arrayTruck[i].height}</span></li>
                      </ul>
                      <div class="card-body">
                          <button class="btn buttonShowMore">Price</button>
                          <span id="printPrice" class="ml-4">€ 120</span>
                      </div>
                  </div>`;
    }
    printText.innerHTML = text;
}
function displayCars() {
    let text = " ";
    for (let i in arrayTruck) {
        text += `<div class="card col-10 offset-1 col-md-3 offset-md-0 mx-auto p-0" style="width: 18rem;">
                      <img src="${arrayCars[i].img}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${arrayCars[i].model}</h5>
                          <p class="card-text">${arrayCars[i].description}</p>
                      </div>
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item font-weight-bold">PS: <span class="font-weight-normal">${arrayCars[i].ps}</span></li>
                          <li class="list-group-item font-weight-bold">Kilometer: <span class="font-weight-normal">${arrayCars[i].kilometer}</span></li>
                          <li class="list-group-item font-weight-bold">Year: <span class="font-weight-normal">${arrayCars[i].year}</span></li>
                           <li class="list-group-item font-weight-bold">Seats: <span class="font-weight-normal">${arrayCars[i].seats}</span></li>
                      </ul>
                      <div class="card-body">
                          <button class="btn buttonShowMore">Price</button>
                          <span id="printPrice" class="ml-4">€ 120</span>
                      </div>
                  </div>`;
    }
    printText.innerHTML = text;
}
btnTruck.addEventListener("click", displayTrucks);
btnCars.addEventListener("click", displayCars);
// btnTruck.addEventListener("click",()=>{arrayTruck[i].displayTrucks});
// dodge.displayTrucks();
// iceCreamTruck.displayTrucks();
// fordPickUp.displayTrucks();
// function text(){
//   alert("Hallo");
// }
// btnCars.addEventListener("click",text);
// btnCars.addEventListener("click",this.displayCars());

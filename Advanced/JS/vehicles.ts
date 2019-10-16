class Vehicle {
	performance:number;
	model:string;
	km:number;
	seats:number;
	fuel:string;
	year:number;
	img:string;

//all these definitions are not necessary! they will have the <any> porperty else!

	constructor(performance:number, model:string, km:number, seats:number, fuel:string, year:number, img:string){
// in the constructor you can define the type of value thats allowed to be stored in the variable
		this.performance = performance;
		this.model = model;
		this.km = km;
		this.seats = seats;
		this.fuel = fuel;
		this.year = year;
		this.img = img;
	};

	getInfo(){
		return `${this.performance} is not a number`;
	};
};

class VehicleMotor extends Vehicle {
	motor:string;
	constructor(performance:number, model:string, km:number, seats:number, fuel:string, year:number, img:string, motor:string){
		super(performance, model, km, seats, fuel, year, img);
		this.motor = motor;
	};
};

class VehicleTruck extends Vehicle {
	truck;
	constructor(performance:number, model:string, km:number, seats:number, fuel:string, year:number, img:string, truck:boolean){
		super(performance, model, km, seats, fuel, year, img);
		this.truck = truck;
	};
	// calculateTruck()
};

var Porsche = new VehicleMotor(500, "Porsche Carrera GT", 0, 2, "Benzin", 2019, "porsche.png", "5.7 Liters");
var Chevi = new VehicleMotor(200, "Chevrolet", 40000, 2, "Benzin", 1976, "chevi.png", "2.4 Liters");
var Käfer = new Vehicle(26, "VW Käfer", 800000, 4, "Benzin", 1938, "käfer.png");
var Trabi = new Vehicle(18, "Trabant P 50", 1000000, 4, "Benzin", 1959, "trabi.png");
var Fiat = new Vehicle(15, "Fiat 500 F", 700000, 4, "Benzin", 1957, "fiat.png");
var Ford = new VehicleTruck(10, "Fordson E83W", 350000, 2, "Benzin", 1938, "ford.png", true);
var Dodge = new VehicleTruck(150, "Dodge P1", 450000, 2, "Benzin", 1964, "dodge.png", true);
var VW = new VehicleTruck(47, "VW T2", 250000, 2, "Benzing", 1967, "vw.png", true);

var array = [Porsche, Chevi, Käfer, Trabi, Fiat, Ford, Dodge, VW];

for (let cal of array){
	if(cal.motor != ""){
// with this loop you can target all objects of the array that have a motor property (!= "" means: if its not empty) in this case it targets the class: VehicleMotor
		document.getElementById("carsCard").innerHTML+=`
		<div class="carCont">
			<div class="col-md-4">
				<div class="imgCont">
					<img class="img-fluid" src="../img/${cal.img}">
					<div class="carName"> 
						${cal.model} 
					</div>
					<div class="carInfo"> 
						${cal.year} <br><hr>
						${cal.motor} <br><hr>
						${cal.performance} <br><hr> 
						${cal.km} <br><hr> 
						${cal.seats} <br><hr> 
						${cal.fuel} <br><hr>
					</div>
				</div>
			</div>
		</div>`
	}
// with this loop you can target all objects of the array that have a truck property (!= "" means: if its not empty) in this case it targets the class: VehicleTruck
	else if(cal.truck !=""){
		document.getElementById("carsCard").innerHTML+=`
		<div class="carCont">
			<div class="col-md-4">
				<div class="imgCont">
					<img class="img-fluid" src="../img/${cal.img}">
					<div class="carName"> 
						${cal.model} 
					</div>
					<div class="carInfo"> 
						${cal.year} <br><hr>
						${cal.performance} <br><hr> 
						${cal.km} <br><hr> 
						${cal.seats} <br><hr> 
						${cal.fuel} <br><hr>
					</div>
				</div>
			</div>
		</div>`
	}
// this statement will target the parant class Vehicle
	else {
		document.getElementById("carsCard").innerHTML+=`
		<div class="carCont">
			<div class="col-md-4">
				<div class="imgCont">
					<img class="img-fluid" src="../img/${cal.img}">
					<div class="carName"> 
						${cal.model} 
					</div>
					<div class="carInfo"> 
						${cal.year} <br><hr>
						${cal.performance} <br><hr> 
						${cal.km} <br><hr> 
						${cal.seats} <br><hr> 
						${cal.fuel} <br><hr>
					</div>
				</div>
			</div>
		</div>`
	};
};








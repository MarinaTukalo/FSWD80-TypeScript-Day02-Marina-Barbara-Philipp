var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    //all these definitions are not necessary! they will have the <any> porperty else!
    function Vehicle(performance, model, km, seats, fuel, year, img) {
        // in the constructor you can define the type of value thats allowed to be stored in the variable
        this.performance = performance;
        this.model = model;
        this.km = km;
        this.seats = seats;
        this.fuel = fuel;
        this.year = year;
        this.img = img;
    }
    ;
    Vehicle.prototype.getInfo = function () {
        return this.performance + " is not a number";
    };
    ;
    return Vehicle;
}());
;
var VehicleMotor = /** @class */ (function (_super) {
    __extends(VehicleMotor, _super);
    function VehicleMotor(performance, model, km, seats, fuel, year, img, motor) {
        var _this = _super.call(this, performance, model, km, seats, fuel, year, img) || this;
        _this.motor = motor;
        return _this;
    }
    ;
    return VehicleMotor;
}(Vehicle));
;
var VehicleTruck = /** @class */ (function (_super) {
    __extends(VehicleTruck, _super);
    function VehicleTruck(performance, model, km, seats, fuel, year, img, truck) {
        var _this = _super.call(this, performance, model, km, seats, fuel, year, img) || this;
        _this.truck = truck;
        return _this;
    }
    ;
    return VehicleTruck;
}(Vehicle));
;
var Porsche = new VehicleMotor(500, "Porsche Carrera GT", 0, 2, "Benzin", 2019, "porsche.png", "5.7 Liters");
var Chevi = new VehicleMotor(200, "Chevrolet", 40000, 2, "Benzin", 1976, "chevi.png", "2.4 Liters");
var Käfer = new Vehicle(26, "VW Käfer", 800000, 4, "Benzin", 1938, "käfer.png");
var Trabi = new Vehicle(18, "Trabant P 50", 1000000, 4, "Benzin", 1959, "trabi.png");
var Fiat = new Vehicle(15, "Fiat 500 F", 700000, 4, "Benzin", 1957, "fiat.png");
var Ford = new VehicleTruck(10, "Fordson E83W", 350000, 2, "Benzin", 1938, "ford.png", true);
var Dodge = new VehicleTruck(150, "Dodge P1", 450000, 2, "Benzin", 1964, "dodge.png", true);
var VW = new VehicleTruck(47, "VW T2", 250000, 2, "Benzing", 1967, "vw.png", true);
var array = [Porsche, Chevi, Käfer, Trabi, Fiat, Ford, Dodge, VW];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var cal = array_1[_i];
    if (cal.motor != "") {
        // with this loop you can target all objects of the array that have a motor property (!= "" means: if its not empty) in this case it targets the class: VehicleMotor
        document.getElementById("<carsCard></carsCard>").innerHTML += "\n\t\t<div class=\"carCont\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"imgCont\">\n\t\t\t\t\t<img class=\"img-fluid\" src=\"../img/" + cal.img + "\">\n\t\t\t\t\t<div class=\"carName\"> \n\t\t\t\t\t\t" + cal.model + " \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carInfo\"> \n\t\t\t\t\t\t" + cal.year + " <br><hr>\n\t\t\t\t\t\t" + cal.motor + " <br><hr>\n\t\t\t\t\t\t" + cal.performance + " <br><hr> \n\t\t\t\t\t\t" + cal.km + " <br><hr> \n\t\t\t\t\t\t" + cal.seats + " <br><hr> \n\t\t\t\t\t\t" + cal.fuel + " <br><hr>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>";
    }
    // with this loop you can target all objects of the array that have a truck property (!= "" means: if its not empty) in this case it targets the class: VehicleTruck
    else if (cal.truck != "") {
        document.getElementById("<carsCard></carsCard>").innerHTML += "\n\t\t<div class=\"carCont\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"imgCont\">\n\t\t\t\t\t<img class=\"img-fluid\" src=\"../img/" + cal.img + "\">\n\t\t\t\t\t<div class=\"carName\"> \n\t\t\t\t\t\t" + cal.model + " \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carInfo\"> \n\t\t\t\t\t\t" + cal.year + " <br><hr>\n\t\t\t\t\t\t" + cal.performance + " <br><hr> \n\t\t\t\t\t\t" + cal.km + " <br><hr> \n\t\t\t\t\t\t" + cal.seats + " <br><hr> \n\t\t\t\t\t\t" + cal.fuel + " <br><hr>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>";
    }
    // this statement will target the parant class Vehicle
    else {
        document.getElementById("<carsCard></carsCard>").innerHTML += "\n\t\t<div class=\"carCont\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"imgCont\">\n\t\t\t\t\t<img class=\"img-fluid\" src=\"../img/" + cal.img + "\">\n\t\t\t\t\t<div class=\"carName\"> \n\t\t\t\t\t\t" + cal.model + " \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carInfo\"> \n\t\t\t\t\t\t" + cal.year + " <br><hr>\n\t\t\t\t\t\t" + cal.performance + " <br><hr> \n\t\t\t\t\t\t" + cal.km + " <br><hr> \n\t\t\t\t\t\t" + cal.seats + " <br><hr> \n\t\t\t\t\t\t" + cal.fuel + " <br><hr>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>";
    }
    ;
}
;

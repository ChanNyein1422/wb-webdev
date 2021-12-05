this.car = "Honda Fits";

var NeoKimGarage = {
  car: "Toyota Axio",
  getCar: function () {
    return this.car;
  },
};

var gettingCar = NeoKimGarage.getCar();
console.log(gettingCar);

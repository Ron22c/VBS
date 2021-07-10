const cars = [
    {
        id: 1,
        type:'suv',
        parkingStallNumber: 100,
        price: 500
    },
    {
        id: 2,
        type:'sadan',
        parkingStallNumber: 200,
        price: 300
    },
    {
        id: 3,
        type:'hachback',
        parkingStallNumber: 300,
        price: 200
    },
]

class Car {

    constructor(id, type, parkingStallNumber, isBooked, price  ) {
        this.id = id;
        this.type = type;
        this.parkingStallNumber = parkingStallNumber;
        this.isBooked = isBooked;
        this.price = price;
    }

    static addCars(car) {
        cars.push(car);
    }

    static getAllCars() {
        return cars;
    }

    static getCarById(id) {
        return cars.filter(car => car.id = id);
    }
}

module.exports = Car;
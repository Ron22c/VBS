const Cars = require('../models/Car');
const Bookings = require('../models/BookingDetails');
const BookingDetails = require('../models/BookingDetails');

class BookingService {

    //{type: "suv", duration: {from: 13.00, to:14.00}}
    static getListOfAvailableVehicles(vehicleType, duration) {
        
        console.log(`fetching available vehicles for query: type: ${vehicleType}, duration: ${JSON.stringify(duration)}`);

        let cars = Cars.getAllCars();
        
        let bookings = Bookings.getAllBookings(); 
        
        let vehicles = cars.filter(car => car.type == vehicleType);
        
        let durationMatch = bookings.filter(booking => booking.fromTime == duration.from && booking.toTime == duration.to);
        
        let bookedVehiclesIds = durationMatch.map(element => element.id);

        let availableVehicles = vehicles.filter(vehicle => !bookedVehiclesIds.includes(vehicle.id));
        
        if(availableVehicles && Array.isArray(availableVehicles) && availableVehicles.length > 0) {
            console.log(`available vehicles are: ${JSON.stringify(availableVehicles)}`);

            return availableVehicles;
        }
        
        return [];
    }

    static bookVehicle(vehicleType, duration, userId) {
        
        console.log(`booking vehicles for query: type: ${vehicleType}, duration: ${duration}`);

        let vehicles = this.getListOfAvailableVehicles(vehicleType, duration);

        if(vehicles && Array.isArray(vehicles) && vehicles.length <= 0) {
            console.log('NO vehichles found');
            return;
        }

        let booking = new BookingDetails(userId, vehicles[0].id, duration.from, duration.to);
        
        BookingDetails.addBooking(booking);

        console.log(`booking added successfully for type: ${vehicleType}, duration: ${JSON.stringify(duration)}`);
    }

    static calculateAmount(userId) {
        console.log(`calculating bill for user id: ${userId}`);
        
        let validBookingsByTheUser = BookingDetails.getAllBookings()
                                        .filter(booking => booking.userId == userId && !booking.isPaid);
        
        let amount = 0;

        validBookingsByTheUser.map(element => {
            let car = Cars.getCarById(element.vehicleId);
            let duration = element.duration;

            amount = amount + (car.price*duration);
            BookingDetails.markBookingAsPaid(element.id);
        });

        console.log(`amount: ${amount}`);
        return amount;
    }
}

module.exports = BookingService;
const BookingService = require('./services/BookingService');
const BookingDetails = require('./models/BookingDetails');

let main = () => {
    let queryVehicles = BookingService.getListOfAvailableVehicles("suv", {from:13.00, to:14.00});
    BookingService.bookVehicle("suv", {from:13.00, to:14.00}, 1);
    console.log(BookingDetails.getAllBookings());
    console.log(BookingService.calculateAmount(1));

}

main();
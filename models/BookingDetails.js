const bookings = [
    {   
        bookingId: 1,
        userId: 1,
        vehicleId:2,
        fromTime:15.00,
        toTime:16.00
    }
]

class BookingDetails {
    constructor(userId, vehicleId, fromTime, toTime) {
        this.userId = userId;
        this.vehicleId = vehicleId;
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.duration = toTime - fromTime;
        this.isPaid = false;
    }

    static getAllBookings() {
        return bookings;
    }

    static addBooking(booking) {
        bookings.push(booking);
    }

    static markBookingAsPaid(bookingId) {
        bookings.map(book => {if(book.id = bookingId) book.isPaid= true});
    }
}

module.exports = BookingDetails;
import React, { useState } from "react";
import { cancelBooking, getBookingByConfirmationCode } from "../utils/ApiFunctions";
import { room_list } from "../../assets/images/assets";

const FindBooking = () => {
    const [confirmationCode, setConfirmationCode] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [bookingInfo, setBookingInfo] = useState({
        bookingId: "",
        room: { id: "", roomType:""  },
        bookingConfirmationCode: "",
        roomNumber: "",
        checkInDate: "",
        checkOutDate: "",
        guestFullName: "",
        guestEmail: "",
        numOfAdults: "",
        numOfChildren: "",
        totalNumOfGuest: "",
    })
    const [isDeleted, setIsDeleted] = useState(false);

    const clearBookingInfo = {
        bookingId: "",
        room: { id: "", roomType:"" },
        bookingConfirmationCode: "",
        roomNumber: "",
        checkInDate: "",
        checkOutDate: "",
        guestFullName: "",
        guestEmail: "",
        numOfAdults: "",
        numOfChildren: "",
        totalNumOfGuest: "",

    }
    const handleInputChange = (e) => {
        setConfirmationCode(e.target.value);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const data = await getBookingByConfirmationCode(confirmationCode);
            setBookingInfo(data);
        } catch (error) {
            setBookingInfo(clearBookingInfo);
            if (error.response && e.response.status === 404) {
                setError(error.response.data.message)
            } else {
                setError(error.response);
            }

        }
        setTimeout(() => {
            setIsLoading(false);

        }, 2000);

    }

    const handleBookingCancellation = async (bookingId) => {
        try {
            await cancelBooking(bookingInfo.bookingId);
            setIsDeleted(true);
            setSuccessMessage("Booking has been cancelled successfully.")
            setBookingInfo(clearBookingInfo);
            setConfirmationCode("");
            setError("");
        } catch (error) {
            setError(error.message);
        }
        setTimeout(() => {
            setSuccessMessage("");
            setIsDeleted(false);

        }, 2000)
    }
    const numOfGuest = (numOfAdults, numOfChildren)=>{
        return numOfAdults + numOfChildren;
    }

    const roomType=(roomId)=>{
       const room = room_list.find(room => room.id === roomId);
       return room.roomType;
    
}



    return (
        <>
            <div className="container mt-5 d-flex flex-column 
            justify-content-center align-items-center">
                <h2>Find My Booking</h2>
                <form onSubmit={handleFormSubmit} className="col-md-6">
                    <div className="input-group mb-3">
                        <input className="form-control"
                            id="confirmationCode"
                            name="confirmationCode"
                            value={confirmationCode}
                            onChange={handleInputChange}
                            placeholder="Enter the booking confirmation code"
                        />
                        <button className="btn btn-hotel input-group-text">Find booking</button>
                    </div>
                </form>
                {isLoading ? (<div>Finding booking......</div>
                ) : error ? (<div className="text-danger">{error}</div>
                ) : bookingInfo.bookingConfirmationCode ? (
                    <div className="col-md-6 mt-4 mb-5">
                        <div style={{textAlign:"left", border:"0.1px solid black", borderRadius:"6px"}}>
                        <h3>Booking Information</h3>
                        <p>Booking Confirmation Code:{bookingInfo.bookingConfirmationCode}</p>
                        <p>Booking ID:{bookingInfo.id}</p>
                        <p>Room Number:{bookingInfo.roomId}</p>
                        <p>Room Type:{roomType(bookingInfo.roomId)}</p>
                        <p>Check-in Date:{bookingInfo.checkInDate}</p>
                        <p>Check-in Date:{bookingInfo.checkOutDate}</p>
                        <p>Full Name:{bookingInfo.guestFullName}</p>
                        <p>Email Address: {bookingInfo.guestEmail}</p>
                        <p>Adults:{bookingInfo.numOfAdults}</p>
                        <p>Children:{bookingInfo.numOfChildren}</p>
                        <p>Total Guest:{numOfGuest(bookingInfo.numOfAdults, bookingInfo.numOfChildren)}</p>
                        </div>
                        {!isDeleted && (
                            <button className="btn btn-danger"
                                onClick={() => { handleBookingCancellation(bookingInfo.bookId) }}>
                                Cancel Booking
                            </button>
                        )}
                    </div>
                ) : (
                    <div>find booking......</div>
                )}
                {isDeleted && (
                    <div className="alert alert-success mt-3" row="alert">
                        {successMessage}
                    </div>
                )}

            </div>
        </>


    )
}
export default FindBooking;
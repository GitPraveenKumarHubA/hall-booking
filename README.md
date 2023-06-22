# hall-booking

Hall Booking API is used for creating a room, booking an existing room, retrieving all room details and also the customer details with booking data as well

*Method: POST*
- Create Room

https://hall-booking-apk.onrender.com/createRoom

For creating a room, seats, amenities, and prices are mandatory. If any of the fields is missing the room can't be created.

```
{
    "roomDetails": {
        "id": "Raveen",
        "seatsAvailable": 500,
        "amenities": [
            "AC",
            "Projector",

        ],
        "ratePerHour": 5000
    }
}
```


*Method: GET*

- Get all rooms with booking data
  
https://hall-booking-apk.onrender.com/fetchBookedRooms

*Method: POST*

- Book room
  
https://hall-booking-apk.onrender.com/bookRoom


For booking a room, customer name, date, starting time and end time are mandatory. If any of the fields is missing the room can't be booked. roomID should be given from the rooms that were created already. If room ID is not available, the room can't be booked.

```
{
  "customerName" : "Praveen Kumar A",
  "roomID" : 2,
  "date" : "19/06/2023",
  "startTime" : "18:00:00",
  "endTime" : "19:00:00"
}
```

*Method: GET*

- Get all customers' details with booking data.

https://hall-booking-apk.onrender.com/fetchCustomerDetails

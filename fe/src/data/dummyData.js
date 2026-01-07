export const trips = [
  {
    id: "1",
    from: "Hyderabad",
    to: "Bangalore",
    date: "2025-12-25",
    departure: "22:00",
    arrival: "06:00",
    operators: "Shanmukh Travels",
    price: 1200,
    rating: 4.5,
    capacity: 12
  },
  {
    id: "2",
    from: "Hyderabad",
    to: "Chennai",
    date: "2025-12-25",
    departure: "21:00",
    arrival: "05:00",
    operators: "Orange Tours",
    price: 1100,
    rating: 4.2,
    capacity: 8
  },
  {
    id: "3",
    from: "Bangalore",
    to: "Chennai",
    date: "2025-12-26",
    departure: "09:00",
    arrival: "15:00",
    operators: "RedBus Express",
    price: 900,
    rating: 4.0,
    capacity: 15
  },
  {
    id: "4",
    from: "Hyderabad",
    to: "Bangalore",
    date: "2025-12-26",
    departure: "18:00",
    arrival: "02:00",
    operators: "VRL Travels",
    price: 1500,
    rating: 4.8,
    capacity: 5
  },
  {
    id: "5",
    from: "Chennai",
    to: "Coimbatore",
    date: "2025-12-27",
    departure: "06:00",
    arrival: "12:00",
    operators: "KPN Travels",
    price: 850,
    rating: 4.1,
    capacity: 20
  }
]

export const bookings = [
  {
    id: "b1",
    seat: "A1",
    bookedAt: "2025-12-20",
    trip: trips[0]
  }
]
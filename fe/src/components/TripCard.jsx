import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  emphasize
} from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import EventSeatIcon from "@mui/icons-material/EventSeat"
import axios from "axios"

export default function TripCard({ trip }) {
  console.log(trip)

  async function BookSeat() {
const user=JSON.parse(localStorage.getItem("user"))
if(!user){
  alert("Please login to book a seat")
  return
}
console.log(user.email,trip._id)

await axios.post("http://localhost:8888/api/bookings",{
  email:user.email,
  tripId:trip._id
})

alert("Seat booked successfully")





  }
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <Typography variant="h6">
              {trip.from} → {trip.to}
            </Typography>
            <Typography color="text.secondary">
              {trip.operators}
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography>{trip.departure}</Typography>
            <Typography color="text.secondary">Departure</Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography>{trip.arrival}</Typography>
            <Typography color="text.secondary">Arrival</Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography>
              <StarIcon fontSize="small" /> {trip.rating}
            </Typography>
          </Grid>

          <Grid item xs={6} md={1}>
            <Typography>
              <EventSeatIcon /> {trip.capacity}
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6">₹{trip.price}</Typography>
            <Button variant="contained" fullWidth onClick={BookSeat}>
              Book Seat
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

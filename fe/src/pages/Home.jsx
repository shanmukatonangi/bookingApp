import { Container, Typography } from "@mui/material"
import axios from "axios"
import TripCard from "../components/TripCard"
import { useState } from "react"

export default function Home() {

const [trips,setTrips]=useState([])

async function fetchtrips(){
  const res= await axios.get("http://localhost:8888/trips")
  setTrips(res.data)

}
fetchtrips()

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4">Book Bus Tickets</Typography>
      <Typography color="text.secondary">
        Travel smart with comfort and safety
      </Typography>

      {trips.map((trip)=> <TripCard key={trip._id} trip={trip}/>)}


    </Container>
  )
}
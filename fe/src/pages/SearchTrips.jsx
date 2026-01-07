import {
  Container,
  TextField,
  Button,
  Grid,
  Card,
  Typography
} from "@mui/material"
import { useRef, useState } from "react"
import { trips as dummyTrips } from "../data/dummyData"
import TripCard from "../components/TripCard"
import axios from "axios"

export default function SearchTrips() {
  const fromRef = useRef()
  const toRef = useRef()
  const dateRef = useRef()
  const departureRef = useRef()
  const arrivalRef = useRef()
  const operatorRef = useRef()

  // let random=[
  //   {id:1,from:"hyd",to:"delhi",travels:"shanmukh"},
  //   {id:2,from:"hyd",to:"delhi",travels:"praveen"},
  
  // ]

  // random.map((trip)=>console.log(trip))

  const [results, setResults] = useState([])

  const handleSearch =async () => {

    const params={}
    if(fromRef.current.value){
      params.from=fromRef.current.value
    }
    //hyderabad  param={from:"hyderabad"}
    if(toRef.current.value){
      params.to=toRef.current.value
    }
    //delhi  param={from:"hyderabad",to:"delhi"}
    if(dateRef.current.value){
      params.date=dateRef.current.value
    }
    if(departureRef.current.value){
      params.departure=departureRef.current.value
    }
    if(arrivalRef.current.value){
      params.arrival=arrivalRef.current.value
    }
    if(operatorRef.current.value){
      params.operators=operatorRef.current.value
    }

    const res=await axios.get("http://localhost:8888/find/trip",{params})
    console.log(res)
    // const filtered = dummyTrips.filter(trip => {
    //   return (
    //     (!fromRef.current.value ||
    //       trip.from.toLowerCase().includes(fromRef.current.value.toLowerCase())) &&
    //     (!toRef.current.value ||
    //       trip.to.toLowerCase().includes(toRef.current.value.toLowerCase())) &&
    //     (!dateRef.current.value ||
    //       trip.date === dateRef.current.value) &&
    //     (!departureRef.current.value ||
    //       trip.departure === departureRef.current.value) &&
    //     (!arrivalRef.current.value ||
    //       trip.arrival === arrivalRef.current.value) &&
    //     (!operatorRef.current.value ||
    //       trip.operators.toLowerCase().includes(operatorRef.current.value.toLowerCase()))
    //   )
    // })

  setResults(res.data)
  }

  return (
    <Container sx={{ mt: 4 }}>
      {/* SEARCH PANEL */}
      <Card sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Search Buses
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField label="From" fullWidth inputRef={fromRef} />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField label="To" fullWidth inputRef={toRef} />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              type="date"
              label="Journey Date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              inputRef={dateRef}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              type="time"
              label="Departure"
              InputLabelProps={{ shrink: true }}
              fullWidth
              inputRef={departureRef}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              type="time"
              label="Arrival"
              InputLabelProps={{ shrink: true }}
              fullWidth
              inputRef={arrivalRef}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Operator"
              fullWidth
              inputRef={operatorRef}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSearch}
            >
              Search Buses
            </Button>
          </Grid>
        </Grid>
      </Card>

      {/* RESULTS */}
      {results.length === 0 && (
        <Typography>No buses found</Typography>
      )}
     

      {results.map(trip => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </Container>
  )
}

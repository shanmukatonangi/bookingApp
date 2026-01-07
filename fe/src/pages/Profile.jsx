import { Container, Card, Typography } from "@mui/material"
import { bookings } from "../data/dummyData"

export default function Profile() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        My Bookings
      </Typography>
      {bookings.map((b, i) => (
        <Card key={i} sx={{ p: 2, mb: 2 }}>
          <Typography>{b.route}</Typography>
          <Typography color="text.secondary">
            Seat: {b.seat} | {b.date}
          </Typography>
        </Card>
      ))}
    </Container>
  )
}
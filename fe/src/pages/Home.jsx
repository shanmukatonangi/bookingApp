import { Container, Typography } from "@mui/material"

export default function Home() {
  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4">Book Bus Tickets</Typography>
      <Typography color="text.secondary">
        Travel smart with comfort and safety
      </Typography>
    </Container>
  )
}
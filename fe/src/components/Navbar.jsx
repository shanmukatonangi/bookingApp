import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <DirectionsBusIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          RedBus
        </Typography>
        <Button color="inherit" component={Link} to="/home">Home</Button>
        <Button color="inherit" component={Link} to="/search">Search</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button>
      </Toolbar>
    </AppBar>
  )
}
import { Container, TextField, Button, Card, Typography } from "@mui/material"
import { useRef } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Login() {
 const nameref=useRef()
 const emailref=useRef()
 const phoneref=useRef()
 const navigate = useNavigate()

async function LoginButton(){
  const userdetails={
    name:nameref.current.value,
    email:emailref.current.value,
    phone:phoneref.current.value
  }

 try {
await axios.post("http://localhost:8888/api/users",userdetails)

localStorage.setItem("user",JSON.stringify(userdetails))
navigate("/search")


  
 } catch (error) {
  alert("Login failed" + error)
  return
 }
 
  }




  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField label="Name" fullWidth margin="normal" inputRef={nameref} />
        <TextField label="Email" fullWidth margin="normal" inputRef={emailref} />
         <TextField label="phone" fullWidth margin="normal" inputRef={phoneref} />
       
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={LoginButton}>
          Login
        </Button>
      </Card>
    </Container>
  )
}
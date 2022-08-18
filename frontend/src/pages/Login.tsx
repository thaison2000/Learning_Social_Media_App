import { Avatar, Box, Card, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import Input from '../components/Input'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlPasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card sx={{ opacity: [0.9, 0.8, 0.7], padding: '0px', display: 'flex', flexDirection: 'column', width: '20%', height: '42%', borderRadius: 0 }}>
        <Card sx={{ backgroundColor: 'green'}}>
          <Typography sx={{padding: '10px',marginBottom: '10px', textAlign: 'center', fontWeight: '1000', fontSize: '20px', color: 'white' }}>E-Learning Login</Typography>
        </Card>
        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: ''}}>
          <Input title='email' handleInput={handlEmailInput} style={{ margin: '20px' }} />
          <Input title='password' handleInput={handlPasswordInput} />
          <CustomButton title='Login'/>
          <Typography sx={{textAlign: 'center', marginTop: '20px' }}>
            Do you have an Account ? 
            <Link to='/register' style={{textDecoration: 'none', color: 'green'}}> Register</Link></Typography>
        </Box>
      </Card>
    </Box>
  )
}

export default Login
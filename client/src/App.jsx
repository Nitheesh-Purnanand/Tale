import { useState } from 'react'
import './App.css'
import Messenger from './components/messenger'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Accountprovider from './components/context/Accountprovider'
function App() {
  const [count, setCount] = useState(0)
  const clientId = "958670145374-hb6785atpp3effhs6fhcvmpgaatb22s6.apps.googleusercontent.com"
  return (
    <>
    <GoogleOAuthProvider clientId={clientId}><Accountprovider><Messenger></Messenger></Accountprovider></GoogleOAuthProvider>
    </>
  );
}

export default App

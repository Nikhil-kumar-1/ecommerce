import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Constants from '../../Constants/Constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function EmailVerification() {
  const API_URL = Constants.API_URL;
  const navigate = useNavigate()
  const [loading, setloading] = useState(true)
  const { token } = useParams()
  useEffect(() => {
    const queryParamters = {
      token: token
    }
    axios.get(API_URL  + 'api/v1/users/verify-email', { params: queryParamters })
      .then((response) => {
        console.log(response.data)
        // setloading(false)
        if(response.data.status === 'success'){
          navigate('/')
        } else {
          navigate('/register')
        }
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])
  console.log(token)
  return (
    <div>
      {
        loading ? <h1>Verifying Email</h1> : <h1>Email Verified</h1>
      }
    </div>
  )
}

export default EmailVerification

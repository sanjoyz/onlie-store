import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Context } from './index'
import AppRouter from './components/AppRounter'
import NavBar from './components/NavBar'
import { check } from './http/userApi'
import { Spinner } from 'react-bootstrap'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner style={{ top: '50%', right: '50%', position: 'absolute', textAlign: 'center' }} animation='grow' />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>

  )
})

export default App

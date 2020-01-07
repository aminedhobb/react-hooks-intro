import React, { useState, useEffect } from 'react'

const initialLocationState = {
  latitude: null,
  longitude: null,
  state: null
}

const App = () => {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const [mousePosition, setMousePosition] = useState({x: null, y: null})
  const [status, setStatus] = useState(navigator.onLine)
  const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState)
  let mounted = true

  useEffect(() => {
    document.title = `You have clicked ${count} times`
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    navigator.geolocation.getCurrentPosition(handleGeolocation)
    const watchId = navigator.geolocation.watchPosition(handleGeolocation)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
      navigator.geolocation.clearWatch(watchId)
      mounted = false
    }
  }, [count])

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const handleGeolocation = (event) => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      })
    }
  }

  const handleOnline = () => setStatus(true)
  const handleOffline = () => setStatus(false)

  const incrementCount = () => setCount(prevCount => prevCount + 1)
  const toggleLight = () => setIsOn(!isOn)

  return(
    <>
      <h2> button </h2>
      <button onClick={incrementCount}>I was clicked {count} times </button>
      <h2> light </h2>
      <img
        onClick={toggleLight}
        src={
          isOn
          ? "https://icon.now.sh/highlight/fd0"
          : "https://icon.now.sh/highlight/aaa"
        }
        style={{
          height: "50px",
          width: "50px",
        }}
        alt = "light"
      />
      <h2> Mouse Position </h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />
      <h2> Network Status </h2>
      <p> You are <strong>{status ? "online" : "offline"}</strong></p>
      <h2> Geolocation </h2>
      <p> latitude is {latitude} </p>
      <p> longitude is {longitude} </p>
      <p> speed is {speed ? speed : "0" } </p>
    </>
  )
}

export default App;

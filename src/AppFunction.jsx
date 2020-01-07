import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)

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
    </>
  )
}

export default App;

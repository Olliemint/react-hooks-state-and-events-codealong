import React,{useState} from 'react'

const Toggle = () => {
  const [isON, setIsOn] = useState(false)
  const color = isON ? 'green' : 'red'
  
  function handleClick() {
    setIsOn((isON)=> !isON)
  }

  return (
    <div>
      <h1>Toggle me </h1>

      <button style={{background: color}} onClick={handleClick} type="submit">{ isON ? 'ON' : 'OFF' }</button>
    </div>
  )
}

export default Toggle

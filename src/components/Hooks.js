import { useState } from 'react'

export function Hook() {
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState([])

  const handleClick = () => {
    setCounter(counter + 1)
    setValues(values.concat(counter))
  }
  return (
    <div className='container'>
      <h1>HOOKS</h1>
      <h4>{counter}</h4>
      <h4>{values}</h4>
      <button onClick={handleClick}>PRESS</button>
    </div>
  )
}

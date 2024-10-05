// import React, { useState } from 'react'

// function State() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1)
//   };
//   const decrement = () => {
//     setCount(count - 1)
//   };
//   const reset = () => {
//     setCount(0)
//   }
//   return (
//     <div>
//       <h1>Use Effect Hook </h1>
//       <h1>Count: {count}</h1>
//       <button type="button" onClick={increment}>Increment</button>
//       <button type="button" onClick={decrement}>Decrement</button>
//       <button type="button" onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default State;


import React, {useState, useEffect} from 'react'

function State() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(50);
    const handleIncrement = () => {
        setCount(count + 1)
    };
    const handledecrement = () => {
      setCount1(count1 - 1)
  };
    useEffect(()=>{
      console.log("Use Effect Called")
    }, [count1])
  return (
    <div>
      <h1>Use Effect Hook </h1>
      <h1>Count: {count}</h1>
      <h1>Count: {count1}</h1>
      <button type="button" onClick={handleIncrement}>Increment</button>
      <button type="button" onClick={handledecrement}>Decrement</button>
    </div>
  )
}

export default State;
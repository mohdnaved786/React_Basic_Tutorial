// import React, {useState} from 'react'

// function State() {
//  const stateName = useState("Naved");
//  const name = stateName[0];
//  const setName = stateName[1]
//  const handleClick = () =>{
//     setName("Awwaltech");
//  };
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button type="button" onClick={handleClick}>Change</button>
//     </div>
//   )
// }

// export default State;




import React, {useState} from 'react'

function State() {
 const [name, setName] = useState("Naved");
 const [roll, setRoll] = useState(100);
 const handleClick = () =>{
    setName("Awwaltech");
    setRoll(101)
 };
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Roll: {roll}</h1>
      <button type="button" onClick={handleClick}>Change</button>
    </div>
  )
}

export default State;

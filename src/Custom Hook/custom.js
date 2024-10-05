import { useState } from "react";
function useCustomCounter(){
    const [count, setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count + 1)
    };
    return {
        count,
        handleIncrement
    };
}
export default useCustomCounter;




// App.js Code

// import React, {useEffect} from "react";
// import useCustomCounter from "./Custom Hook/custom";

// function App() {
//   const data = useCustomCounter();
//   const data1 = useCustomCounter();
//   // useEffect(()=>{
//   //     console.log('call')
//   // })
//   return (
//     <div>
//     <h1>Count Up: {data.count}</h1>
//     <button onClick={data.handleIncrement}>Increment</button>

//     <h1>Count Up: {data1.count}</h1>
//     <button onClick={data1.handleIncrement}>Increment</button>
//     </div>
//   );
// }

// export default App;

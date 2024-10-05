import React, { useEffect, useState } from 'react'

function MyApi() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((res) => {
        // console.log("===>", res)
        setData(res)
      })
    })
  }, [])
  // console.warn("This is my data",data)
  // fetch("https://jsonplaceholder.typicode.com/todos").then((oppo)=>{
  //   oppo.json().then((naved)=>{
  //     console.log(naved)
  //   })
  // })
  return (
    <div>
      <h1>Get API Call in React JS</h1>
      <table border="1">
         <thead style={{backgroundColor:'black', color:'white', textAlign: 'center'}}>
         <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>Value</td>
          </tr>
         </thead>
        {
          data.map((item) =>
            <tbody key={item.id}>
              <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.userId}</td>
            </tr>
            </tbody>
          )
        }
      </table>
    </div>
  )
}

export default MyApi;
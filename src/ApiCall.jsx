import React,{ useState, useEffect } from 'react'
import axios from "axios"

const ApiCall = () => {
    const [dataType, setDataType] = useState("character")// Default to characters
    const [items, setItems] = useState([])
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/${dataType}`)
          setItems(response.data.results)// Store fetched data
          console.log(response.data.results)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
      fetchData()
  }, [dataType])
  
  return (
    <div>
        {console.log('return')}
      <h1>Rick and Morty {dataType}</h1>
      <label>
        Select Data Type:
        <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
          <option value="character">Characters</option>
          <option value="episode">Episodes</option>
          <option value="location">Locations</option>
        </select>
      </label>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.id} - {item.name}</li>
        ))}
      </ul>
    </div>
  )
}


export default ApiCall
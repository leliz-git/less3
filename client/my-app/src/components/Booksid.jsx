import { useState } from "react"
import { useParams } from "react-router-dom"
const Booksid=()=>{
    const {id}= useParams()
    const [books,setbooks]=useState([{id:1,name:"a", auther:"aaa", price:60},{id:2,name:"b", auther:"bbb", price:80},{id:3,name:"c", auther:"ccc", price:70}])
    const book= books.find((b)=>{return b.id===Number(id)})
    
    return(
      <p>id: {book.id} <br></br> name: {book.name}<br></br>
      auther: {book.auther}<br></br> price: {book.price}
      </p>
    )
    
}

export default Booksid
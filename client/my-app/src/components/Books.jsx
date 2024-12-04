import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
//import Booksid from "./Booksid"

const Books=()=>{
    const [books,setbooks]=useState([{id:1,name:"a", auther:"aaa", price:60},{id:2,name:"b", auther:"bbb", price:80},{id:3,name:"c", auther:"ccc", price:70}])
    return(
        <>
       {/* // <Booksid books></Booksid> */}
       { books.map((b)=>{
            return<div><br></br>
               
               <Link to={`/Booksid/${b.id}`}>book{b.id}<br></br> </Link>
               name:{b.name}<br></br>auther:{b.auther}
            </div>
            
        } )}
       
     
    <Outlet></Outlet>
    </>
    )
}
export default Books
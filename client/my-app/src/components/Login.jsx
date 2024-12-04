import { useContext, useRef, useReducer, useState } from "react"
import UserContex from './contex/UserContex'
import PassContex from './contex/PassContex'


const Login = ()=>{
     let[name, setname] = useState("")
     let[password, setpasssword] = useState("")

     const {UserContex, setu} = useContext(UserContex)
     const {PassContex, setp} = useContext(PassContex)

     const handle = () => {
        setname(inputn)
    }
    return(
        <>
             <div>name:<input type="name" onChange={(e)=>setname(e.target.value)}/></div><br></br>
             <div>password:<input type="password" onChange={(e)=>setpasssword(e.target.value)}/></div>
            <button onClick={handle}>
                click me
            </button>
        </>
    )
}
export default Login
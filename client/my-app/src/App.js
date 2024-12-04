import logo from './logo.svg';
import React, { Suspense } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Booksid from './components/Booksid';
import  {useContext, useState} from "react"
import PassContex from './components/contex/PassContex'
import UserContex from './components/contex/UserContex'

const LazyHome = React.lazy(()=>import('./components/Home'))
const LazyBooks = React.lazy(()=>import('./components/Books'))
const LazyLogin = React.lazy(()=>import('./components/Login'))
const LazyBooksid = React.lazy(()=>import('./components/Booksid'))

function App() {
 const[name, setname]= useState("")
  return (
    <div className="App">
      <div id="navbar">
         <Link to={'/Login'}>Login</Link>
         <Link to={'/Home'}>Home</Link>
         <Link to={'/Books'}>Books</Link>
  <br></br>
    </div>
    <UserContex.Provider value={{name, setname }}>
         <Routes>
        <Route path='/' element={<Suspense fallback="loading..."><LazyHome /></Suspense> } />
        <Route path='/Login' element={<Suspense fallback="loading..."><LazyLogin /></Suspense> } />
        <Route path='/Home' element={<Suspense fallback="loading..."><LazyHome /></Suspense> } />
        <Route path='/Books' element={<Suspense fallback="loading..."><LazyBooks /></Suspense> } />
        <Route path='/Booksid/:id' element={<Booksid></Booksid>}/>
        {/* <Route path='/AllTasks' element={<Suspense fallback="loading..."><LazyAllTasks /></Suspense> }>
          <Route path='NewTask' element={<Suspense fallback="loading..."><LazyNewTask /></Suspense> } />
          <Route path=':Id' element={<Suspense fallback="loading..."><LazyTaskById /></Suspense> } />
        </Route> */}

      </Routes>
      </UserContex.Provider>
    </div>
  );
}

export default App;

import Header from "./components/header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Outlet, redirect } from "react-router-dom";
import { useEffect } from "react";


function App() {
  useEffect(()=>{
    redirect('home')
    console.log('hii')
  },[])
  
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
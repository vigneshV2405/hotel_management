import Header from "./components/header/header.jsx";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Outlet } from "react-router-dom";
import './index.css';


function App() {
  
  return (
    <div>
      <Header/>
      <Outlet/>
      
    </div>
  );
}

export default App;
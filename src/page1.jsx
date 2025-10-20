import Bg from "./components/bg"
import Heading from './components/heading'
import React from "react";
import {Link} from 'react-router-dom'
import './page1.css'
import './page2.jsx'
function Page1(){
  return(
    <div>
    <Bg></Bg>
    <Heading></Heading>
    <p id="p1-main">Our Home in the World of Comics</p>
    {/* <a id = "p1-end" href="C:\Users\ASUS\Desktop\Comics_Lab\ComicsStudiesLab\src\page2.jsx"><button>Enter</button></a> */}
    <Link id="p1-end" to="/page2">Enter</Link>

    

    </div>
    

  );
}
export default Page1
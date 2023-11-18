import Menu from "./Menu"
import Content from "./Content"
import { useState } from "react"
function Body() {
    const [personalDetails, setPersonalDetails]= useState({name: "Marcus Aurelius",email:"marcusTheGreat@gmail.com", ph:"+44 7548822290", address:"Rome, Italy"});
    return ( 
       <main>
           <Menu personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>
           <Content personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
       </main>
    )
  }
  
  export default Body
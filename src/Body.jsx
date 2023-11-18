import Menu from "./Menu"
import Content from "./Content"
import { useState } from "react"
import React from 'react';
import { v4 as uuid } from 'uuid';

const educationList = [
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2,
        isVisible:true,
        location:"dholakhpur",
        degree:"btech"

    },
    {
        key: uuid(),
        name: "B",
        start: 1,
        to: 2,
        isVisible:true,
        location:"dholakhpur",
        degree:"btech"
    },
    {
        key: uuid(),
        name: "C",
        start: 1,
        to: 2,
        isVisible:true,
        location:"dholakhpur",
        degree:"btech"
    }
];
const experienceList = [
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2,
        isVisible: true,
        location: "dholakhpur",
        position: "aaa",
        description: "heyyeh"

    },
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2,
        isVisible: true,
        location: "dholakhpur",
        position: "aaa",
        description: "heyyeh"
    },
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2,
        isVisible: true,
        location: "dholakhpur",
        position: "aaa",
        description: "heyyeh"
    }
];
function Body() {

    const [personalDetails, setPersonalDetails]= useState({name: "Marcus Aurelius",email:"marcusTheGreat@gmail.com", ph:"+44 7548822290", address:"Rome, Italy"});
    const [alignment, setAlignment]= useState(1);
    const [data, setData] = useState([educationList,experienceList]);
    return ( 
       <main>
           <Menu personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} setAlignment={setAlignment} setData={setData} data={data} />
           <Content personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} alignment={alignment} data={data} />
       </main>
    )
  }
  
  export default Body
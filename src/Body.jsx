import Menu from "./Menu"
import Content from "./Content"
import { useState } from "react"
import React from 'react';
import { v4 as uuid } from 'uuid';

const educationList = [
    {
        key: uuid(),
        name: "London City University",
        start: "08/2020",
        to: "present",
        isVisible: true,
        location: "New York City, US",
        degree: "PHd"

    }
];
const experienceList = [
    {
        key: uuid(),
        name: "London City University",
        start: "08/2020",
        to: "present",
        isVisible: true,
        location: "London",
        position: "SDE",
        description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"

    }
];
function Body() {

    const [personalDetails, setPersonalDetails] = useState({ name: "Marcus Aurelius", email: "marcusTheGreat@gmail.com", ph: "+44 7548822290", address: "Rome, Italy" });
    const [alignment, setAlignment] = useState(1);
    const [data, setData] = useState([educationList, experienceList]);
    return (
        <main>
            <Menu personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} setAlignment={setAlignment} setData={setData} data={data} />
            <Content personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} alignment={alignment} data={data} />
        </main>
    )
}

export default Body
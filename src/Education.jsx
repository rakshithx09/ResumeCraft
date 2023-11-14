import React from 'react';
import { v4 as uuid } from 'uuid';


const list = [
    {
        key:uuid(),
        name: "A",
        start: 1,
        to: 2
    },
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2
    },
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2
    }
];
list.forEach((item)=>{
    console.log(item.key);
})
const icon = {
    visible: "https://img.icons8.com/material-outlined/24/000000/visible--v1.png",
    invisible: "https://img.icons8.com/material-sharp/24/invisible.png"

}

function Education() {
    return (
        <>
            <div className="educationC">
                <h2><img width="40" height="40" src="https://img.icons8.com/color/48/graduation-cap.png" alt="graduation-cap"/>Education </h2>
                <ul>
                    {
                        list.map((item)=>{
                            return (
                            
                            <li  key={item.key} className="education"> <h3>{item.name} </h3> <img width="24" height="24" src={icon.invisible} alt="visible--v1"/> </li>
                           
                            
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default Education
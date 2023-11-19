import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import EducationForm from './EducationForm';

const list = [
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2,
        isVisible:true,
        location:"dholakhpur"

    },
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2,
        isVisible:true,
        location:"dholakhpur"
    },
    {
        key: uuid(),
        name: "A",
        start: 1,
        to: 2,
        isVisible:true,
        location:"dholakhpur"
    }
];

const icon = {
    visible: "https://img.icons8.com/material-outlined/24/000000/visible--v1.png",
    invisible: "https://img.icons8.com/material-sharp/24/invisible.png"

}
function retrieveEducation(data,setData){
    const school= document.querySelector('.schoolInput');
    const degree= document.querySelector('.degreeInput');
    const start= document.querySelector('.startInput');
    const end= document.querySelector('.endInput');
    const location= document.querySelector('.locationInput');
    data[0][data[0].length-1]={
        ...data[0][data[0].length-1],
        name: school.value,
        start: start.value,
        degree: degree.value,
        to:end.value,
        /* isVisible:true, */
    location:location.value
    };
    /* setData([...educationList, {key: uuid(),
        name: school.value,
        start: start.value,
        to:end.value,
        isVisible:true,
    location:location.value}]); */
    setData([data[0],data[1]]);
}
function Education({personalDetails, setPersonalDetails, setData, data}) {
    const [addSection, setAddSection] = useState(false);
    const [educationList, setEducationList]=useState(list)
    return (
        <>
            <div className="educationC">
                <h2><i className="fa-solid fa-graduation-cap" style={{color: "#ffffff" }}></i>Education </h2>

                {
                    addSection ? <EducationForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} setData={setData} data={data} / > :
                        (<ul>
                            {
                                data[0].map((item,index) => {
                                    return (
                                        
                                        <li key={item.key} className="education">
                                        <h3>{item.name} </h3> 
                                        <img width="24" height="24" src={ item.isVisible? icon.visible : icon.invisible} alt="visible--v1" onClick={()=>{/* item.isVisible=!item.isVisible; */ data[0][index].isVisible=!item.isVisible; setData([data[0],data[1]]); return}}/> </li>
                                        

                                    )
                                })
                            }
                        </ul>)
                }
                <div className="btnC">
                    {
                        addSection ? 
                        <><button className='cancelBtn' onClick={() => { setAddSection(false); data[0].pop(); setData([data[0],data[1]]) }}>Cancel</button><button className='saveBtn' onClick={() => {retrieveEducation(data,setData); setAddSection(false); return; }}>Save</button></> 
                        : 
                        <button className="addEducationButton" onClick={() => { setAddSection(true); data[0].push({ key: uuid(), isVisible:true}); setData([data[0],data[1]]); console.log(data);return;  }}>Add Education</button>
                    }
                </div>
            </div>
        </>
    )
}
export default Education
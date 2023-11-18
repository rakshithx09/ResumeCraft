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
function retrieveEducation(educationList,setEducationList){
    const school= document.querySelector('.schoolInput');
    const degree= document.querySelector('.degreeInput');
    const start= document.querySelector('.startInput');
    const end= document.querySelector('.endInput');
    const location= document.querySelector('.locationInput');
    setEducationList([...educationList, {key: uuid(),
        name: school.value,
        start: start.value,
        to:end.value,
        isVisible:true,
    location:location.value}]);
}
function Education({personalDetails, setPersonalDetails}) {
    const [addSection, setAddSection] = useState(false);
    const [educationList, setEducationList]=useState(list)
    return (
        <>
            <div className="educationC">
                <h2><i className="fa-solid fa-graduation-cap" style={{color: "#ffffff" }}></i>Education </h2>

                {
                    addSection ? <EducationForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/ > :
                        (<ul>
                            {
                                educationList.map((item) => {
                                    return (
                                        
                                        <li key={item.key} className="education">
                                        <h3>{item.name} </h3> 
                                        <img width="24" height="24" src={ item.isVisible? icon.visible : icon.invisible} alt="visible--v1" onClick={()=>{item.isVisible=!item.isVisible; setEducationList([...educationList]); return}}/> </li>
                                        

                                    )
                                })
                            }
                        </ul>)
                }
                <div className="btnC">
                    {
                        addSection ? 
                        <><button className='cancelBtn' onClick={() => { setAddSection(false) }}>Cancel</button><button className='saveBtn'onClick={() => {retrieveEducation(educationList,setEducationList); setAddSection(false); return; }}>Save</button></> 
                        : 
                        <button className="addEducationButton" onClick={() => { setAddSection(true); return; }}>Add Education</button>
                    }
                </div>
            </div>
        </>
    )
}
export default Education
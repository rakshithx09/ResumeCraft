import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ExperienceForm from './ExperienceForm';

const list = [
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

const icon = {
    visible: "https://img.icons8.com/material-outlined/24/000000/visible--v1.png",
    invisible: "https://img.icons8.com/material-sharp/24/invisible.png"

}
function retrieveExperience(experienceList, setExperienceList) {
    const company = document.querySelector('.companyInput');
    const position = document.querySelector('.positionInput');
    const start = document.querySelector('.startInput');
    const end = document.querySelector('.endInput');
    const location = document.querySelector('.locationInput');
    const description = document.querySelector('.descriptionInput');
    setExperienceList([...experienceList, {
        key: uuid(),
        name: company.value,
        start: start.value,
        to: end.value,
        isVisible: true,
        location: location.value,
        position: position.value,
        description: description.value
    }]);
}
function Experience({personalDetails, setPersonalDetails}) {
    const [addSection, setAddSection] = useState(false);
    const [experienceList, setExperienceList] = useState(list)
    return (
        <>
            <div className="educationC experienceC">
                <h2><i className="fa-solid fa-briefcase" style={{ color: "#ffffff" }}></i>Experience </h2>

                {
                    addSection ? <ExperienceForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/> :
                        (<ul>
                            {
                                experienceList.map((item) => {
                                    return (

                                        <li key={item.key} className="experience education">
                                            <h3>{item.name} </h3>
                                            <img width="24" height="24" src={item.isVisible ? icon.visible : icon.invisible} alt="visible--v1" onClick={() => { item.isVisible = !item.isVisible; setExperienceList([...experienceList]); return }} /> </li>


                                    )
                                })
                            }
                        </ul>)
                }
                <div className="btnC">
                    {
                        addSection ?
                            <><button className='cancelBtn' onClick={() => { setAddSection(false) }}>Cancel</button><button className='saveBtn' onClick={() => { retrieveExperience(experienceList, setExperienceList); setAddSection(false); return; }}>Save</button></>
                            :
                            <button className="addEducationButton addExperienceBtn" onClick={() => { setAddSection(true); return; }}>Add Experience</button>
                    }
                </div>
            </div>
        </>
    )
}
export default Experience
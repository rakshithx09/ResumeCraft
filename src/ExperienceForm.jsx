
function ExperienceForm({personalDetails, setPersonalDetails}) {
    return (<div className="educationFormC">
        <h3>Company</h3>
        <input type="text" className="companyInput" required/*  value="Dholakhpur Institute of Technology" */ />
        <h3>Position</h3>
        <input type="text" className="positionInput"/* value="PHd" */ />

        <div className="dateC">
            <div>
                <h3>Start Date</h3>
                <input type="text"  className="startInput"/* value="13-9-2022" */ />
            </div>
            <div>
                <h3>End Date</h3>
                <input type="text" className="endInput"/* value="15-8-2026" */ />
            </div>
        </div>


        <h3>Location</h3>
        <input type="text" className="locationInput"/* value="Dholakhpur" */ />
        <h3>Description</h3>
        <input type="text" className="descriptionInput"/* value="Dholakhpur" */ />
    </div>)
}

export default ExperienceForm
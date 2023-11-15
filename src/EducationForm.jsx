
function EducationForm() {
    return (<div className="educationFormC">
        <h3>School</h3>
        <input type="text" className="schoolInput"/*  value="Dholakhpur Institute of Technology" */ />
        <h3>Degree</h3>
        <input type="text" className="degreeInput"/* value="PHd" */ />

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
    </div>)
}

export default EducationForm
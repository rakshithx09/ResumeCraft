
function updateEducation() {
    data[0][data[0].length - 1].name = e.target.value;
    data[0][data.length - 1] = { ...data[0][data.length - 1], name: e.target.value };
}
function EducationForm({ personalDetails, setPersonalDetails, setData, data }) {
    return (<div className="educationFormC">
        <h3>School</h3>
        <input type="text" className="schoolInput" onChange={(e) => { data[0][data[0].length - 1] = { ...data[0][data[0].length - 1], name: e.target.value }; console.log(data[0]) ; setData([data[0], data[1]]); return; }} value={data[0][data[0].length - 1].name}/>
        <h3>Degree</h3>
        <input type="text" className="degreeInput" onChange={(e) => { data[0][data[0].length - 1] = { ...data[0][data[0].length - 1], degree: e.target.value }; setData([data[0], data[1]]); return; }} value={data[0][data[0].length - 1].degree} />

        <div className="dateC">
            <div>
                <h3>Start Date</h3>
                <input type="text" className="startInput" onChange={(e) => { data[0][data[0].length - 1] = { ...data[0][data[0].length - 1], start: e.target.value }; setData([data[0], data[1]]); return; }} value={data[0][data[0].length - 1].start} />
            </div>
            <div>
                <h3>End Date</h3>
                <input type="text" className="endInput" onChange={(e) => { data[0][data[0].length - 1] = { ...data[0][data[0].length - 1], to: e.target.value }; setData([data[0], data[1]]); return; }} value={data[0][data[0].length - 1].to} />
            </div>
        </div>


        <h3>Location</h3>
        <input type="text" className="locationInput" onChange={(e) => { data[0][data[0].length - 1] = { ...data[0][data[0].length - 1], location: e.target.value }; setData([data[0], data[1]]); return; }} value={data[0][data[0].length - 1].location} />
    </div>)
}

export default EducationForm
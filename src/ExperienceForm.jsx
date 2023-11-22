
function ExperienceForm({personalDetails, setPersonalDetails, setData, data}) {
    return (<div className="educationFormC">
        <h3>Company</h3>
        <input type="text" className="companyInput" onChange={(e) => { data[1][data[1].length - 1] = { ...data[1][data[1].length - 1], name: e.target.value }; console.log(data[1]) ; setData([data[0], data[1]]); return; }} value={data[1][data[1].length - 1].name} />
        <h3>Position</h3>
        <input type="text" className="positionInput" onChange={(e) => { data[1][data[1].length - 1] = { ...data[1][data[1].length - 1], position: e.target.value }; console.log(data[1]) ; setData([data[0], data[1]]); return; }} value={data[1][data[1].length - 1].position} />

        <div className="dateC">
            <div>
                <h3>Start Date</h3>
                <input type="text"  className="startInput" onChange={(e) => { data[1][data[1].length - 1] = { ...data[1][data[1].length - 1], start: e.target.value }; console.log(data[1]) ; setData([data[0], data[1]]); return; }} value={data[1][data[1].length - 1].start} />
            </div>
            <div>
                <h3>End Date</h3>
                <input type="text" className="endInput" onChange={(e) => { data[1][data[1].length - 1] = { ...data[1][data[1].length - 1], to: e.target.value }; console.log(data[1]) ; setData([data[0], data[1]]); return; }} value={data[1][data[1].length - 1].to} />
            </div>
        </div>


        <h3>Location</h3>
        <input type="text" className="locationInput" onChange={(e) => { data[1][data[1].length - 1] = { ...data[1][data[1].length - 1], location: e.target.value }; console.log(data[1]) ; setData([data[0], data[1]]); return; }} value={data[1][data[1].length - 1].location} />
        <h3>Description</h3>
        <input type="text" className="descriptionInput" onChange={(e) => { data[1][data[1].length - 1] = { ...data[1][data[1].length - 1], description: e.target.value }; console.log(data[1]) ; setData([data[0], data[1]]); return; }} value={data[1][data[1].length - 1].description}/>
    </div>)
}

export default ExperienceForm
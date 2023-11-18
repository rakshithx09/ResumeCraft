import Education from "./Education";
import Experience from "./Experience";
function Menu({ personalDetails, setPersonalDetails, setAlignment, setData, data }) {
    return (
        <div className="menu">
            <h2>Layout</h2>
            <div className="alignmentC">

                <div className="alignment top" onClick={() => { setAlignment(1) }}>
                    <div className="color"></div>
                    <div></div>
                </div>
                <div className="alignment left" onClick={() => { setAlignment(2) }}>
                    <div className="color"></div>
                    <div></div>
                </div>
                <div className="alignment right" onClick={() => { setAlignment(3) }}>
                    <div className="color"></div>
                    <div></div>
                </div>
            </div>

            <div className="personalDetailsC">
                <h2><i className="fa-solid fa-circle-info" style={{ color: "#ffffff" }}></i>Personal Details</h2>

                <h3>Full Name</h3>
                <input type="text" value={personalDetails.name} placeholder="Marcus Aurelius" onChange={(e) => { setPersonalDetails({ ...personalDetails, name: e.target.value }) }} />

                <h3>Email Address</h3>
                <input type="text" value={personalDetails.email} placeholder="marcusTheGreat@gmail.com" onChange={(e) => { setPersonalDetails({ ...personalDetails, email: e.target.value }) }} />

                <h3>Phone Number</h3>
                <input type="text" value={personalDetails.ph} placeholder="+44 7548822290" onChange={(e) => { setPersonalDetails({ ...personalDetails, ph: e.target.value }) }} />

                <h3>Address</h3>
                <input type="text" value={personalDetails.address} placeholder="Rome, Italy" onChange={(e) => { setPersonalDetails({ ...personalDetails, address: e.target.value }) }} />
            </div>

            <Education personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} setData={setData} data={data} />
            <Experience personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} setData={setData} data={data} />
        </div>
    )
}


export default Menu
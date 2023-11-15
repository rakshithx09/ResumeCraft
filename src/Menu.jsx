import Education from "./Education" ;
import Experience from "./Experience";
function Menu() {
    return (
        <div className="menu">
            <h2>Layout</h2>
            <div className="alignmentC">

                <div className="alignment top" onClick={() => { changeAlignment(1) }}>
                    <div className="color"></div>
                    <div></div>
                </div>
                <div className="alignment left" onClick={() => { changeAlignment(2) }}>
                    <div className="color"></div>
                    <div></div> 
                </div>
                <div className="alignment right" onClick={() => { changeAlignment(3) }}>
                    <div className="color"></div>
                    <div></div> 
                </div>
            </div>
            
            <div className="personalDetailsC">
                <h2><i className="fa-solid fa-circle-info" style={{color: "#ffffff"}}></i>Personal Details</h2>

                <h3>Full Name</h3>
                <input type="text" />

                <h3>Email Address</h3>
                <input type="text" />

                <h3>Phone Number</h3>
                <input type="text" />

                <h3>Address</h3>
                <input type="text" />
            </div>

            <Education />
        <Experience />
        </div>
    )
}


export default Menu
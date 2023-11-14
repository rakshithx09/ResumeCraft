import Education from "./Education" ;
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
                <h2><img width="40" height="40" src="https://img.icons8.com/cotton/40/business-contact--v2.png" alt="business-contact--v2"/>Personal Details</h2>

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
        </div>
    )
}


export default Menu
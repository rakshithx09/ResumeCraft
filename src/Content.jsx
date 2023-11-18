import Resume from "./Resume"
function Content({personalDetails, setPersonalDetails}){
    return (
        <div className="content">
           <Resume personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} /> 
        </div>
    )
}

export default Content
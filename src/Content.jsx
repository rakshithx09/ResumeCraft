import Resume from "./Resume"
function Content({personalDetails, setPersonalDetails, alignment, data}){
    return (
        <div className="content">
           <Resume personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} alignment={alignment} data={data} /> 
        </div>
    )
}

export default Content
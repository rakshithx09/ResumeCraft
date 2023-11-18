import ResumeEducation from "./ResumeEducation"
import ProfessionalExperience from "./ProfessionalExperience"
function Resume({personalDetails, setPersonalDetails, alignment, data}) {
    
    return (
        <div className={alignment==1 ? "resume topAlign" : alignment==2 ? "resume leftAlign" : "resume rightAlign"}>
            <div className="accent ">
                <h1>{personalDetails.name}</h1>
                <div className="socials">
                    <h3><i className="fa-regular fa-envelope" style={{color: "#ffffff"}}></i>{personalDetails.email}</h3>
                    <h3><i className="fa-solid fa-phone" style={{color: "#ffffff"}}></i>{personalDetails.ph}</h3>
                    <h3><i className="fa-solid fa-location-pin" style={{color: "#ffffff"}}></i>{personalDetails.address}</h3>
                </div> 
            </div>
            <div className="resumeBody">
                <h2>Education</h2>
                <ResumeEducation personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} data={data} />
                <h2>Professional Experience</h2>
                <ProfessionalExperience personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} data={data} />
            </div>
        </div>
    )
}
export default Resume
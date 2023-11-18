import ResumeEducation from "./ResumeEducation"
import ProfessionalExperience from "./ProfessionalExperience"
function Resume({personalDetails, setPersonalDetails}) {
    
    return (
        <div className="resume leftAlign">
            <div className="accent ">
                <h1>{personalDetails.name}</h1>
                <div className="socials">
                    <h3><i class="fa-regular fa-envelope" style={{color: "#ffffff"}}></i>{personalDetails.email}</h3>
                    <h3><i class="fa-solid fa-phone" style={{color: "#ffffff"}}></i>{personalDetails.ph}</h3>
                    <h3><i class="fa-solid fa-location-pin" style={{color: "#ffffff"}}></i>{personalDetails.address}</h3>
                </div> 
            </div>
            <div className="resumeBody">
                <h2>Education</h2>
                <ResumeEducation personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>
                <h2>Professional Experience</h2>
                <ProfessionalExperience personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>
            </div>
        </div>
    )
}
export default Resume
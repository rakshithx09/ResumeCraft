function ResumeEducation({ personalDetails, setPersonalDetails, data }) {
    return (
        <div>
            {data[0].map((education) => {
                
                return (education.isVisible ? 
                 (
                        <div className="educationCR" key={education.key}>
                            <div className="educationCRL">
                                <div className="timeline">{education.start}-{education.to}</div>
                                <div className="locationR">{education.location}</div>
                            </div>
                            <div className="educationCRR">
                                <h3 className="universityR"> {education.name} </h3>
                                <p className="universityInfoR"> {education.degree}</p>
                            </div>
                        </div>
                ) : null)
            })}
        </div>
    );
}
/* 
function ResumeEducation({ personalDetails, setPersonalDetails, data }) {
    return (
        <div className="educationCR">
            <div className="educationCRL">
                <div className="timeline">08/2020 – present</div>
                <div className="locationR">New York City, US</div>
            </div>
            <div className="educationCRR">
                <p className="universityR">London City University</p>
                <p className="universityInfoR">Bachelors in Economics</p>
            </div>
        </div>
    );
} */

export default ResumeEducation
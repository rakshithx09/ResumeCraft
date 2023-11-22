function ProfessionalExperience({ personalDetails, setPersonalDetails, data }) {
    return (
        <div>
            {data[1].map((experience) => {
                return (experience.isVisible ? 
                    (
            <div className="experienceCR educationCR" key={experience.key}>
                <div className="experienceCRL educationCRL">
                    <div className="timeline"><p>{experience.start}-{experience.to}</p></div>
                    <div className="locationR"><p>{experience.location}</p></div>
                </div>
                <div className="experienceCRR educationCRR">
                    <h3 className="companyR">{experience.name}</h3>
                    <h4 className="positionInfoR">{experience.position}</h4>
                    <p className="companyInfoR">{experience.description}</p>
                </div>
            </div>
            ) : null)
        })}
        </div>
    );
}

export default ProfessionalExperience
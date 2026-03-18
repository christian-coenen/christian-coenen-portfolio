import './QualificationProcessIntroSection.css'

const QualificationProcessIntroSection = ({ title, intro }) => {
    return (
        <section className="qualification-process-intro-section">
            <div className="qualification-process-intro-inner">
                <h2 className="qualification-process-intro-header">{title}</h2>

                <p className="qualification-process-intro-paragraph">{intro}</p>
            </div>
        </section>
    )
}

export default QualificationProcessIntroSection

import AboutIllustration from '../illustrations/AboutIllustration'
import './AboutSection.css'

const AboutSection = () => {
    return (
        <section className='about-section'>
            <div className='about-inner'>
                <div className='about-content'>
                    <h2 className='about-header'>Over</h2>

                    <blockquote className='about-quote'>
                        'Jaren geleden verscheen de man die het digitale landschap wilde uitdagen: Christian Coenen.
                        Met zijn baanbrekende ideeën begon een nieuw tijdperk en de wereld die we kenden, veranderde voorgoed.'
                    </blockquote>

                    <p className='about-paragraph'>
                        Ik ben een gedreven ontwikkelaar en toekomstig ondernemer met brede interesse in technologie en digitale innovatie.
                        Ik ontwikkel interactieve webapplicaties met HTML, CSS, JavaScript en React, en bouw backends met Node.js, ondersteund door Supabase voor dataverwerking.
                    </p>
                </div>

                <div className='about-illustration'>
                    <AboutIllustration />
                </div>
            </div>
        </section >
    )
}

export default AboutSection

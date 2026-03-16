import SkillItem from '../../ui/SkillItem'
import './SkillsSection.css'

const SkillsSection = () => {
    return (
        <section className="skills-section">
            <div className="skills-inner">
                <div className="skills-content">
                    <h2 className="skills-header">Vaardigheden</h2>
                    
                    <div className="skill-items">
                        <SkillItem iconClass="devicon-html5-plain" title="HTML5" description="Structuur van webdocumenten" />
                        <SkillItem iconClass="devicon-css3-plain" title="CSS3" description="Styling en layout van webinterfaces" />
                        <SkillItem iconClass="devicon-javascript-plain" title="JavaScript" description="Logica en interactie in webapplicaties" />
                        <SkillItem iconClass="devicon-react-plain" title="React" description="Component-gebaseerde frontend library" />
                        <SkillItem iconClass="devicon-nodejs-plain" title="Node.js" description="JavaScript runtime voor backend services" />
                        <SkillItem iconClass="devicon-postgresql-plain" title="PostgreSQL" description="Relationeel databasesysteem" />
                        <SkillItem iconClass="devicon-supabase-plain" title="Supabase" description="Backend-as-a-service boven PostgreSQL" />
                        <SkillItem iconClass="devicon-csharp-plain" title="C#" description="Objectgeoriënteerde programmeertaal" />
                        <SkillItem iconClass="devicon-dot-net-plain" title=".NET" description="Framework voor backend en applicaties" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection

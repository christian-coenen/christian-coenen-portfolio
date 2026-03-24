import { projects } from '../../../data/projects'
import ProjectItem from '../../ui/ProjectItem'
import './ProjectsOverviewSection.css'

const ProjectsOverviewSection = () => {
    return (
        <section className="projects-overview-section">
            <div className="projects-overview-inner">
                <ul className="projects-overview-list">
                    {Object.entries(projects).reverse().map(([key, project]) => (
                        <ProjectItem
                            key={key}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={`/projects/${key}`}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProjectsOverviewSection

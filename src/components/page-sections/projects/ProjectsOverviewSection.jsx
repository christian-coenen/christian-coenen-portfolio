import { projects } from '../../../data/projects'
import ProjectItem from '../../ui/ProjectItem'
import './ProjectsOverviewSection.css'

const ProjectsOverviewSection = () => {
    return (
        <section className="projects-overview-section">
            <div className="projects-overview-inner">
                <ol className="projects-overview-list">
                    {Object.entries(projects).reverse().map(([key, project], i) => (
                        <ProjectItem
                            key={key}
                            index={i}
                            category={project.category}
                            title={project.title}
                            year={project.year}
                            technologies={project.technologies}
                            link={project.link}
                            description={project.description}
                        />
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default ProjectsOverviewSection

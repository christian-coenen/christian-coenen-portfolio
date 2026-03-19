import { useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import PortfolioLayout from '../components/layout/PortfolioLayout'
import ProjectDetailSection from '../components/page-sections/project-detail/ProjectDetailSection'

const ProjectPage = () => {
    const { projectId } = useParams()

    const project = projects[projectId]

    {/* Temporary "not found" message for projects */}
    if (!project) {
        return (
            <PortfolioLayout>
                <div>Project niet gevonden.</div>
            </PortfolioLayout>
        )
    }

    return (
        <PortfolioLayout>
            <ProjectDetailSection title={project.title} description={project.description} />
        </PortfolioLayout>
    )
}

export default ProjectPage

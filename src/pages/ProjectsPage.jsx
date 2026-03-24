import PortfolioLayout from '../components/layout/PortfolioLayout'
import ProjectsIntroSection from '../components/page-sections/projects/ProjectsIntroSection'
import ProjectsOverviewSection from '../components/page-sections/projects/ProjectsOverviewSection'

const ProjectPage = () => {
    return (
        <PortfolioLayout>
            <ProjectsIntroSection />
            <ProjectsOverviewSection />
        </PortfolioLayout>
    )
}

export default ProjectPage

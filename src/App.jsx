import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/features/navigation/ScrollToTop'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import QualificationsPage from './pages/QualificationsPage'
import QualificationProcessPage from './pages/QualificationProcessPage'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                <Route path="/qualifications" element={<QualificationsPage />} />
                <Route path="/qualifications/:processId" element={<QualificationProcessPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

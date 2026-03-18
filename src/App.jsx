import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/features/navigation/ScrollToTop'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import QualificationsPage from './pages/QualificationsPage'
import QualificationProcessPage from './pages/QualificationProcessPage'

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/qualifications" element={<QualificationsPage />} />
                <Route path="/qualifications/:processId" element={<QualificationProcessPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

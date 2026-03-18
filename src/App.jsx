import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import QualificationsPage from './pages/QualificationsPage'
import QualificationProcessPage from './pages/QualificationProcessPage'

const App = () => {
    return (
        <BrowserRouter>
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

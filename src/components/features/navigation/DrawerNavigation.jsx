import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import './DrawerNavigation.css'

const DrawerNavigation = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <div className={`drawer-navigation ${isOpen ? 'is-open' : ''}`}>
            <div className="drawer-navigation-overlay" onClick={onClose} />

            <div className="drawer-navigation-panel">
                <div
                    className="drawer-navigation-close-panel"

                >
                    <button
                        type="button"
                        className="drawer-navigation-close-button"
                        onClick={onClose}
                        aria-label="Close drawer navigation"
                    >
                        <X className="drawer-navigation-close-button-icon" />
                    </button>
                </div>

                <ul className="drawer-navigation-list">
                    <li className="drawer-navigation-link">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `drawer-navigation-link ${isActive ? 'current' : ''}`
                            }
                            onClick={onClose}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="drawer-navigation-link">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `drawer-navigation-link ${isActive ? 'current' : ''}`
                            }
                            onClick={onClose}
                        >
                            Projecten
                        </NavLink>
                    </li>

                    <li className="drawer-navigation-link">
                        <NavLink
                            to="/qualifications"
                            className={({ isActive }) =>
                                `drawer-navigation-link ${isActive ? 'current' : ''}`
                            }
                            onClick={onClose}
                        >
                            Kwalificaties
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DrawerNavigation

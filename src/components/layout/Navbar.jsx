import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BrandLogo from '../../assets/icons/BrandLogo'
import HamburgerButton from '../features/navigation/HamburgerButton'
import DrawerNavigation from '../features/navigation/DrawerNavigation'
import './Navbar.css'

const Navbar = () => {
    const [isDrawerNavigationOpen, setIsDrawerNavigationOpen] = useState(false)

    const toggleDrawerNavigation = () => {
        setIsDrawerNavigationOpen(prev => !prev)
    }

    const closeDrawerNavigation = () => {
        setIsDrawerNavigationOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <BrandLogo size={48} />
                    <span className="navbar-logo-text">Christian Coenen</span>
                </Link>

                <div className="navbar-actions">
                    <div className="navbar-navigation">
                        <ul className="navbar-navigation-list">
                            <li className="navbar-navigation-link">
                                <NavLink
                                    to="/F"
                                    className={({ isActive }) =>
                                        `drawer-navigation-link ${isActive ? 'current' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="navbar-navigation-link">
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        `drawer-navigation-link ${isActive ? 'current' : ''}`
                                    }
                                >
                                    Projecten
                                </NavLink>
                            </li>

                            <li className="navbar-navigation-link">
                                <NavLink
                                    to="/qualifications"
                                    className={({ isActive }) =>
                                        `drawer-navigation-link ${isActive ? 'current' : ''}`
                                    }
                                >
                                    Kwalificaties
                                </NavLink>
                            </li>
                        </ul>

                        <div className="navbar-hamburger-button">
                            <HamburgerButton
                                isOpen={isDrawerNavigationOpen}
                                onToggle={toggleDrawerNavigation}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <DrawerNavigation
                isOpen={isDrawerNavigationOpen}
                onClose={closeDrawerNavigation}
            />
        </nav>
    )
}

export default Navbar

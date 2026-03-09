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
        <nav className='navbar'>
            <div className='navbar-inner'>
                <Link to='/home' className='navbar-logo'>
                    <BrandLogo size={48} />
                    <span className='navbar-logo-text'>Christian Coenen</span>
                </Link>

                <div className='navbar-actions'>
                    <div className='navbar-navigation'>
                        <ul className='navbar-navigation-list'>
                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/home'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link current"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/projects'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link current"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    Projecten
                                </NavLink>
                            </li>

                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/qualifications'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link current"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    Kwalificaties
                                </NavLink>
                            </li>
                        </ul>

                        <div className='navbar-hamburger-button'>
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

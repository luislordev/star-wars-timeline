import { faBookJournalWhills, faHatWizard, faHome, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const routerNav = [
    { name: 'Inicio', route: '/', icon: faHome },
    { name: 'Línea temporal', route: '/timeline', icon: faHourglassHalf },
    { name: 'Libros', route: '/books', icon: faBookJournalWhills },
    { name: 'Comics', route: '/comics', icon: faHatWizard },
]

export const SideBar = () => {
    return (
        <div className='drawer-side z-50'>
            <label htmlFor="sidebar" className="drawer-overlay"></label>
            <nav className="menu p-4 w-60 h-full bg-base-100 text-base-content">
                <ul>
                    {routerNav.map((item) => (
                        <li key={item.route}>
                            <Link to={item.route}>
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

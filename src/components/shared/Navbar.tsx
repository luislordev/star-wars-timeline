import { Link } from 'react-router-dom'
import { ToggleTheme } from './ToggleTheme'

const routerNav = [
    { name: 'Inicio', route: '/', },
    { name: 'Línea temporal', route: '/timeline', },
    { name: 'Libros', route: '/books', },
    { name: 'Comics', route: '/comics', },
]

export const Navbar = () => {
    return (
        <div className="navbar sticky top-0 z-40  shadow-sm bg-opacity-90 backdrop-filter backdrop-blur bg-base-100">
            <div className='container mx-auto'>
                <div className="flex-none md:hidden">
                    <label htmlFor="sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className='flex-1'>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Star Wars Timeline</Link>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal">
                        {routerNav.map((item) => (
                            <li key={item.route} className='mx-1'>
                                <Link to={item.route}>
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-none">
                    <ToggleTheme />
                </div>
            </div>
        </div>
    )
}

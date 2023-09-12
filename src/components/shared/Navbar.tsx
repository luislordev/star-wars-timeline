import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ToggleTheme } from './ToggleTheme'
import { LanguageSelector } from './LanguageSelector'

const routerNav = [
    { name: 'common:navbar.home', route: '/', },
    { name: 'common:navbar.timeline', route: '/timeline', },
    { name: 'common:navbar.books', route: '/books', },
    { name: 'common:navbar.comics', route: '/comics', },
]

export const Navbar = () => {

    const { t } = useTranslation()

    return (
        <div className="navbar sticky top-0 z-40  shadow-sm bg-opacity-90 backdrop-filter backdrop-blur bg-base-100">
            <div className='container mx-auto'>
                <div className="flex-none md:hidden">
                    <label htmlFor="sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className='flex-1'>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        {t('common:navbar.title')}
                    </Link>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal">
                        {routerNav.map((item) => (
                            <li key={item.route} className='mx-1'>
                                <Link to={item.route}>
                                    <span>{t(item.name)}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center">
                    <LanguageSelector />
                    <ToggleTheme />
                </div>
            </div>
        </div>
    )
}

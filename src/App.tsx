import { Footer } from './components/shared/Footer'
import { Navbar } from './components/shared/Navbar'
import { SideBar } from './components/shared/SideBar'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <>
      <div className="bg-base-100 drawer">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className='drawer-content'>
          <Navbar />
          <main>
            <AppRouter />
          </main>
          <Footer />
        </div>
        <SideBar />
      </div>
    </>
  )
}

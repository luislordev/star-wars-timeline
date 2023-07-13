import { Footer } from './components/shared/Footer'
import { Navbar } from './components/shared/Navbar'
import { SideBar } from './components/shared/SideBar'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <>
      <div className="bg-base-100 drawer">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <main className='drawer-content'>
          <Navbar />
          <AppRouter />
          <Footer />
        </main>
        <SideBar />
      </div>
    </>
  )
}

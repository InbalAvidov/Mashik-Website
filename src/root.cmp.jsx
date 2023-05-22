import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// import { store } from './store/store'
import { AppNav } from './cmps/app.nav'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Projects } from './pages/projects'
import { Clients } from './pages/clients'
import { Contact } from './pages/contact'
import { Footer } from './cmps/footer'

export function App() {
    return (
        // <Provider >
            <Router >
                <section className="app main-layout">
                    <AppNav />
                    <main className='main-app main-layout full' >
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<About />} path="/about" />
                            <Route element={<Projects />} path="/projects" />
                            <Route element={<Clients />} path="/clients" />
                            <Route element={<Contact />} path="/contact" />
                        </Routes>
                    </main>
                    <Footer />
                </section>
            </Router>
        // </Provider>
    )
}

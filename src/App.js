import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Web from './pages/Web'
import Editing from './pages/Editing'
import { useLayoutEffect } from 'react'
import Layout from './layouts'

const Wrapper = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Wrapper>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/web" element={<Web />} />
                            <Route path="/editing" element={<Editing />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </Wrapper>
            </BrowserRouter>
        </>
    )
}

export default App

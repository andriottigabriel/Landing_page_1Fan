import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import TermosUso from './pages/TermosUso'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/privacy" element={<PoliticaPrivacidade />} />
                <Route path="/terms" element={<TermosUso />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)

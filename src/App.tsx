/**
 * @file App.tsx
 * @description Routing-Einstiegspunkt der Anwendung. Definiert Haupt-, Datenschutz- und Lizenz-Route.
 */

import React from 'react'
import { HashRouter, Routes, Route } from 'react-router'
import HomePage from './pages/Home'
import PrivacyPage from './pages/Privacy'
import LicensePage from './pages/License'

/**
 * @component App
 * @description Legt die Haupt-Routes der Anwendung fest.
 * - "/" => HomePage
 * - "/privacy" => PrivacyPage (Datenschutz)
 * - "/license" => LicensePage (Lizenzen)
 *
 * @returns JSX.Element
 */
export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/license" element={<LicensePage />} />
      </Routes>
    </HashRouter>
  )
}

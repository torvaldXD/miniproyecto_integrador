import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './index.css';
import ActivityForm from './components/ActivityForm';

// Placeholder components
const TodayView = () => <div className="container"><h1>Hoy</h1><p>Próximamente...</p></div>;
const ProgressView = () => <div className="container"><h1>Progreso</h1><p>Próximamente...</p></div>;
const ActivityDetail = () => <div className="container"><h1>Detalle de Actividad</h1><p>Próximamente...</p></div>;
const Auth = () => <div className="container"><h1>Login</h1><p>Próximamente...</p></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="container">
          <nav className="nav">
            <NavLink to="/hoy" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Hoy</NavLink>
            <NavLink to="/crear" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Crear</NavLink>
            <NavLink to="/progreso" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Progreso</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/hoy" element={<TodayView />} />
            <Route path="/crear" element={<ActivityForm />} />
            <Route path="/actividad/:id" element={<ActivityDetail />} />
            <Route path="/progreso" element={<ProgressView />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<TodayView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

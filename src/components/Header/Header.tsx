import { useState } from 'react';
import { useIdioma } from '../../i18n/IdiomaContexto';
import type { Idioma } from '../../i18n/traducciones';
import './Header.css';

function Header() {
  const { t, idioma, cambiarIdioma } = useIdioma();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const enlaces = [
    { etiqueta: t.nav.inicio, href: '#inicio' },
    { etiqueta: t.nav.nosotros, href: '#nosotros' },
    { etiqueta: t.nav.servicios, href: '#servicios' },
    { etiqueta: t.nav.trabaja, href: '#trabaja' },
    { etiqueta: t.nav.aplicar, href: '#aplicar' },
  ];

  function toggleMenu() {
    setMenuAbierto(!menuAbierto);
  }

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  function seleccionarIdioma(nuevoIdioma: Idioma) {
    cambiarIdioma(nuevoIdioma);
    cerrarMenu();
  }

  return (
    <header className="header">
      <div className="header-contenedor">

        {/* Logo */}
        <a href="#inicio" className="header-logo" onClick={cerrarMenu} aria-label="MarketVoice Innovations">
          <svg width="36" height="36" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M10 15 L35 15 L50 45 L65 15 L90 15 L90 30 L72 30 L50 70 L28 30 L10 30 Z" fill="#2DBFB0"/>
            <path d="M30 55 L50 85 L70 55 L58 55 L50 68 L42 55 Z" fill="#2DBFB0"/>
          </svg>
          <div className="logo-texto">
            <span className="logo-nombre">MARKETVOICE</span>
            <span className="logo-subtitulo">INNOVATIONS</span>
          </div>
        </a>

        {/* Barra derecha unificada */}
        <div className="header-derecha">

          {/* Nav — solo desktop */}
          <nav className="header-nav" aria-label="Navegacion principal">
            {enlaces.map((enlace) => (
              <a key={enlace.href} href={enlace.href} className="header-enlace">
                {enlace.etiqueta}
              </a>
            ))}
          </nav>

          {/* Selector de idioma — siempre visible */}
          <div className="idioma-selector" role="group" aria-label="Seleccionar idioma">
            <button
              className={`idioma-btn ${idioma === 'es' ? 'idioma-btn--activo' : ''}`}
              onClick={() => seleccionarIdioma('es')}
              aria-label="Cambiar a Espanol"
            >
              ES
            </button>
            <span className="idioma-separador" aria-hidden="true">|</span>
            <button
              className={`idioma-btn ${idioma === 'en' ? 'idioma-btn--activo' : ''}`}
              onClick={() => seleccionarIdioma('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Boton aplicar — solo desktop */}
          <a href="#aplicar" className="header-btn-aplicar header-btn-aplicar--desktop">
            {t.nav.btnAplicar}
          </a>

          {/* Hamburguesa — solo mobile */}
          <button
            className="header-hamburguesa"
            onClick={toggleMenu}
            aria-label={menuAbierto ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={menuAbierto}
          >
            <span className={menuAbierto ? 'linea--arriba' : ''}></span>
            <span className={menuAbierto ? 'linea--oculta' : ''}></span>
            <span className={menuAbierto ? 'linea--abajo' : ''}></span>
          </button>
        </div>
      </div>

      {/* Menu mobile desplegable */}
      {menuAbierto && (
        <div className="header-menu-movil" role="navigation" aria-label="Menu movil">
          {enlaces.map((enlace) => (
            <a key={enlace.href} href={enlace.href} className="menu-enlace" onClick={cerrarMenu}>
              {enlace.etiqueta}
            </a>
          ))}
          <a href="#aplicar" className="menu-btn-aplicar" onClick={cerrarMenu}>
            {t.nav.btnAplicar}
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;

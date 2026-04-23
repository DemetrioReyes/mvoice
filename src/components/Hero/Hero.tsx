import { useIdioma } from '../../i18n/IdiomaContexto';
import './Hero.css';

function Hero() {
  const { t } = useIdioma();

  return (
    <section id="inicio" className="hero">
      <div className="hero-fondo" aria-hidden="true"></div>
      <div className="hero-contenido">
        <div className="hero-texto">
          <span className="hero-etiqueta" data-animar>{t.hero.etiqueta}</span>
          <h1 className="hero-titulo" data-animar data-delay="100">
            {t.hero.titulo1} <br />
            <span className="hero-titulo-acento">{t.hero.titulo2}</span>
          </h1>
          <p className="hero-descripcion" data-animar data-delay="200">
            {t.hero.descripcion}
          </p>
          <div className="hero-acciones" data-animar data-delay="300">
            <a href="#aplicar" className="hero-btn-principal">
              {t.hero.btnPrincipal}
            </a>
            <a href="#nosotros" className="hero-btn-secundario">
              {t.hero.btnSecundario}
            </a>
          </div>
          <div className="hero-estadisticas" data-animar data-delay="400">
            <div className="hero-stat">
              <span className="hero-stat-numero">300+</span>
              <span className="hero-stat-label">{t.hero.stat1}</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true"></div>
            <div className="hero-stat">
              <span className="hero-stat-numero">&lt;12%</span>
              <span className="hero-stat-label">{t.hero.stat2}</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true"></div>
            <div className="hero-stat">
              <span className="hero-stat-numero">15</span>
              <span className="hero-stat-label">{t.hero.stat3}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-tarjeta" data-animar data-delay="200">
            <div className="tarjeta-icono">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(45,191,176,0.15)"/>
                <path d="M16 18C16 16.9 16.9 16 18 16H30C31.1 16 32 16.9 32 18V26C32 27.1 31.1 28 30 28H26L22 32V28H18C16.9 28 16 27.1 16 26V18Z" stroke="#2DBFB0" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="22" r="1.5" fill="#2DBFB0"/>
                <circle cx="24" cy="22" r="1.5" fill="#2DBFB0"/>
                <circle cx="28" cy="22" r="1.5" fill="#2DBFB0"/>
              </svg>
            </div>
            <div>
              <h3 className="tarjeta-titulo">{t.hero.t1Titulo}</h3>
              <p className="tarjeta-texto">{t.hero.t1Texto}</p>
            </div>
          </div>
          <div className="hero-tarjeta hero-tarjeta--desplazada" data-animar data-delay="300">
            <div className="tarjeta-icono">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(45,191,176,0.15)"/>
                <path d="M14 34L20 28M20 28C21.3 29.3 22.9 30 24.5 30C28.1 30 31 27.1 31 23.5C31 19.9 28.1 17 24.5 17C20.9 17 18 19.9 18 23.5C18 25.1 18.7 26.7 20 28Z" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h3 className="tarjeta-titulo">{t.hero.t2Titulo}</h3>
              <p className="tarjeta-texto">{t.hero.t2Texto}</p>
            </div>
          </div>
          <div className="hero-tarjeta" data-animar data-delay="400">
            <div className="tarjeta-icono">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="rgba(45,191,176,0.15)"/>
                <path d="M18 26C18 24.3 19.3 23 21 23H27C28.7 23 30 24.3 30 26V32H18V26Z" stroke="#2DBFB0" strokeWidth="2" fill="none"/>
                <circle cx="24" cy="18" r="4" stroke="#2DBFB0" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div>
              <h3 className="tarjeta-titulo">{t.hero.t3Titulo}</h3>
              <p className="tarjeta-texto">{t.hero.t3Texto}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>{t.hero.scroll}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4V16M10 16L5 11M10 16L15 11" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;

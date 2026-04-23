import { useIdioma } from '../../i18n/IdiomaContexto';
import './MisionVision.css';

function MisionVision() {
  const { t } = useIdioma();

  return (
    <section id="nosotros" className="mision-vision">
      <div className="mv-contenedor">
        <div className="mv-encabezado" data-animar>
          <span className="mv-etiqueta">{t.mv.etiqueta}</span>
          <h2 className="mv-titulo">{t.mv.titulo}</h2>
          <p className="mv-subtitulo">{t.mv.subtitulo}</p>
        </div>

        <div className="mv-grid">
          <div className="mv-card" data-animar data-delay="100">
            <div className="mv-card-icono" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L6 10V22L16 28L26 22V10L16 4Z" stroke="#2DBFB0" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                <circle cx="16" cy="16" r="4" fill="#2DBFB0"/>
              </svg>
            </div>
            <h3 className="mv-card-titulo">{t.mv.misionTitulo}</h3>
            <p className="mv-card-texto">{t.mv.misionTexto}</p>
          </div>

          <div className="mv-card" data-animar data-delay="200">
            <div className="mv-card-icono" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="11" stroke="#2DBFB0" strokeWidth="2" fill="none"/>
                <path d="M16 9V16L20 20" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="mv-card-titulo">{t.mv.visionTitulo}</h3>
            <p className="mv-card-texto">{t.mv.visionTexto}</p>
          </div>

          <div className="mv-card mv-card--destacada" data-animar data-delay="300">
            <div className="mv-card-icono" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 5L19.5 12L27 13L21.5 18.5L23 26L16 22.5L9 26L10.5 18.5L5 13L12.5 12L16 5Z" stroke="#2DBFB0" strokeWidth="2" fill="none" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mv-card-titulo">{t.mv.porQueTitulo}</h3>
            <ul className="mv-lista">
              {t.mv.porQueLista.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisionVision;

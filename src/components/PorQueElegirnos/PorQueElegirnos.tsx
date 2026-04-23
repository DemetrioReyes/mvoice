import { useIdioma } from '../../i18n/IdiomaContexto';
import './PorQueElegirnos.css';

const iconosSVG = [
  <svg key="datos" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 3V21H21" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round"/><path d="M7 16L11 11L14 14L18 9" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="hibrido" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#2DBFB0" strokeWidth="2"/><path d="M12 5V3M12 21V19M5 12H3M21 12H19M7.05 7.05L5.64 5.64M18.36 18.36L16.95 16.95M16.95 7.05L18.36 5.64M5.64 18.36L7.05 16.95" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="industria" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#2DBFB0" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#2DBFB0" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#2DBFB0" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="#2DBFB0" strokeWidth="2"/></svg>,
  <svg key="escala" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 17L9 11L13 15L21 7" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 7H21V13" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="bilingue" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#2DBFB0" strokeWidth="2"/><path d="M3 12H21M12 3C10 7 10 17 12 21M12 3C14 7 14 17 12 21" stroke="#2DBFB0" strokeWidth="1.5"/></svg>,
  <svg key="prueba" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 11L12 14L22 4" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16" stroke="#2DBFB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

function PorQueElegirnos() {
  const { t } = useIdioma();

  return (
    <section id="servicios" className="pqe">
      <div className="pqe-contenedor">
        <div className="pqe-encabezado" data-animar>
          <span className="pqe-etiqueta">{t.pqe.etiqueta}</span>
          <h2 className="pqe-titulo">{t.pqe.titulo}</h2>
          <p className="pqe-subtitulo">{t.pqe.subtitulo}</p>
        </div>

        <div className="pqe-grid">
          {t.pqe.razones.map((razon, index) => (
            <div key={index} className="pqe-card" data-animar data-delay={String((index % 3) * 100)}>
              <div className="pqe-card-icono" aria-hidden="true">
                {iconosSVG[index]}
              </div>
              <h3 className="pqe-card-titulo">{razon.titulo}</h3>
              <p className="pqe-card-texto">{razon.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="pqe-banner">
          <div className="pqe-banner-texto">
            <h3>{t.pqe.bannerTitulo}</h3>
            <p>{t.pqe.bannerTexto}</p>
          </div>
          <a href="#aplicar" className="pqe-banner-btn">
            {t.pqe.bannerBtn}
          </a>
        </div>
      </div>
    </section>
  );
}

export default PorQueElegirnos;

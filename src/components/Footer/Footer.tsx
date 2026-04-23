import { useIdioma } from '../../i18n/IdiomaContexto';
import './Footer.css';

const hrefsEmpresa = ['#nosotros', '#servicios', '#trabaja', '#aplicar'];
const hrefsServicios = ['#servicios', '#servicios', '#servicios', '#servicios'];

function Footer() {
  const { t } = useIdioma();
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div className="footer-principal">
          <div className="footer-marca" data-animar>
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                <path d="M10 15 L35 15 L50 45 L65 15 L90 15 L90 30 L72 30 L50 70 L28 30 L10 30 Z" fill="#2DBFB0"/>
                <path d="M30 55 L50 85 L70 55 L58 55 L50 68 L42 55 Z" fill="#2DBFB0"/>
              </svg>
              <div className="footer-logo-texto">
                <span className="footer-logo-nombre">MARKETVOICE</span>
                <span className="footer-logo-sub">INNOVATIONS</span>
              </div>
            </div>
            <p className="footer-descripcion">{t.footer.descripcion}</p>
          </div>

          <div className="footer-columna" data-animar data-delay="100">
            <h4 className="footer-columna-titulo">{t.footer.colEmpresa}</h4>
            <nav aria-label="Footer empresa">
              {t.footer.enlacesEmpresa.map((label, i) => (
                <a key={i} href={hrefsEmpresa[i]} className="footer-enlace">{label}</a>
              ))}
            </nav>
          </div>

          <div className="footer-columna" data-animar data-delay="200">
            <h4 className="footer-columna-titulo">{t.footer.colServicios}</h4>
            <nav aria-label="Footer servicios">
              {t.footer.enlacesServicios.map((label, i) => (
                <a key={i} href={hrefsServicios[i]} className="footer-enlace">{label}</a>
              ))}
            </nav>
          </div>

          <div className="footer-columna" data-animar data-delay="300">
            <h4 className="footer-columna-titulo">{t.footer.colContacto}</h4>
            <div className="footer-contacto">
              <span className="footer-enlace-texto">{t.footer.cobertura}</span>
              <span className="footer-enlace-texto">{t.footer.idiomasTexto}</span>
              <a href="#aplicar" className="footer-btn-contacto">
                {t.footer.btnPiloto}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-inferior">
          <p className="footer-copyright">
            {anioActual} {t.footer.copyright}
          </p>
          <p className="footer-slogan">{t.footer.slogan}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

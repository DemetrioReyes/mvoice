import { useIdioma } from '../../i18n/IdiomaContexto';
import './BeneficiosLaborales.css';

function BeneficiosLaborales() {
  const { t } = useIdioma();

  return (
    <section id="trabaja" className="beneficios">
      <div className="beneficios-contenedor">
        <div className="beneficios-encabezado" data-animar>
          <span className="beneficios-etiqueta">{t.beneficios.etiqueta}</span>
          <h2 className="beneficios-titulo">{t.beneficios.titulo}</h2>
          <p className="beneficios-subtitulo">{t.beneficios.subtitulo}</p>
        </div>

        <div className="beneficios-layout">
          <div className="beneficios-lista">
            {t.beneficios.lista.map((beneficio, index) => (
              <div key={index} className="beneficio-item" data-animar data-delay={String(index * 100)}>
                <div className="beneficio-numero">{String(index + 1).padStart(2, '0')}</div>
                <div className="beneficio-contenido">
                  <h3 className="beneficio-titulo">{beneficio.titulo}</h3>
                  <p className="beneficio-descripcion">{beneficio.descripcion}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="beneficios-panel" data-animar data-delay="200">
            <div className="panel-rotacion">
              <span className="panel-rotacion-numero">&lt;12%</span>
              <span className="panel-rotacion-label">{t.beneficios.rotacionLabel}</span>
              <span className="panel-rotacion-comparacion">{t.beneficios.rotacionComparacion}</span>
            </div>

            <div className="panel-proceso">
              <h4 className="panel-proceso-titulo">{t.beneficios.procesoTitulo}</h4>
              <div className="panel-pasos">
                {t.beneficios.pasos.map((paso) => (
                  <div key={paso.numero} className="panel-paso">
                    <div className="paso-numero">{paso.numero}</div>
                    <p className="paso-texto">{paso.texto}</p>
                  </div>
                ))}
              </div>
            </div>

            <a href="#aplicar" className="panel-btn">
              {t.beneficios.btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeneficiosLaborales;

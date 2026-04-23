import { useIdioma } from '../../i18n/IdiomaContexto';
import './Valores.css';

function Valores() {
  const { t } = useIdioma();

  return (
    <section className="valores">
      <div className="valores-contenedor">
        <div className="valores-encabezado" data-animar>
          <span className="valores-etiqueta">{t.valores.etiqueta}</span>
          <h2 className="valores-titulo">{t.valores.titulo}</h2>
        </div>

        <div className="valores-grid">
          {t.valores.lista.map((valor, index) => (
            <div
              key={valor.numero}
              className="valor-item"
              data-animar
              data-delay={String(index * 100)}
            >
              <span className="valor-numero">{valor.numero}</span>
              <h3 className="valor-titulo">{valor.titulo}</h3>
              <p className="valor-descripcion">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Valores;

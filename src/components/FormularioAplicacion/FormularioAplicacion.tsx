import { useState } from 'react';
import { useIdioma } from '../../i18n/IdiomaContexto';
import type { DatoFormulario } from '../../types';
import './FormularioAplicacion.css';

const estadoInicial: DatoFormulario = {
  nombre: '',
  apellido: '',
  email: '',
  telefono: '',
  ciudad: '',
  pais: '',
  puesto: '',
  experiencia: '',
  idioma: '',
  mensaje: '',
};

function FormularioAplicacion() {
  const { t } = useIdioma();
  const [datos, setDatos] = useState<DatoFormulario>(estadoInicial);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errores, setErrores] = useState<Partial<DatoFormulario>>({});

  function actualizarCampo(campo: keyof DatoFormulario, valor: string) {
    setDatos({ ...datos, [campo]: valor });
    if (errores[campo]) {
      setErrores({ ...errores, [campo]: '' });
    }
  }

  function validarFormulario() {
    const nuevosErrores: Partial<DatoFormulario> = {};
    if (!datos.nombre.trim()) nuevosErrores.nombre = t.formulario.errNombre;
    if (!datos.apellido.trim()) nuevosErrores.apellido = t.formulario.errApellido;
    if (!datos.email.trim()) {
      nuevosErrores.email = t.formulario.errEmailReq;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
      nuevosErrores.email = t.formulario.errEmailInv;
    }
    if (!datos.telefono.trim()) nuevosErrores.telefono = t.formulario.errTelefono;
    if (!datos.puesto) nuevosErrores.puesto = t.formulario.errPuesto;
    if (!datos.idioma) nuevosErrores.idioma = t.formulario.errIdioma;
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  function manejarEnvio(evento: React.FormEvent) {
    evento.preventDefault();
    if (!validarFormulario()) return;
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setDatos(estadoInicial);
    }, 1500);
  }

  if (enviado) {
    return (
      <section id="aplicar" className="formulario">
        <div className="formulario-contenedor">
          <div className="formulario-exito" data-animar>
            <div className="exito-icono" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#2DBFB0" strokeWidth="2"/>
                <path d="M14 24L20 30L34 16" stroke="#2DBFB0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="exito-titulo">{t.formulario.exitoTitulo}</h2>
            <p className="exito-texto">{t.formulario.exitoTexto}</p>
            <button className="exito-btn" onClick={() => setEnviado(false)}>
              {t.formulario.exitoBtn}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="aplicar" className="formulario">
      <div className="formulario-contenedor">
        <div className="formulario-encabezado" data-animar>
          <span className="formulario-etiqueta">{t.formulario.etiqueta}</span>
          <h2 className="formulario-titulo">{t.formulario.titulo}</h2>
          <p className="formulario-subtitulo">{t.formulario.subtitulo}</p>
        </div>

        <form className="formulario-form" onSubmit={manejarEnvio} noValidate data-animar data-delay="100">
          <div className="form-fila">
            <div className="form-grupo">
              <label className="form-label" htmlFor="nombre">{t.formulario.nombre} *</label>
              <input
                id="nombre"
                type="text"
                className={`form-input ${errores.nombre ? 'form-input--error' : ''}`}
                placeholder={t.formulario.nombrePh}
                value={datos.nombre}
                onChange={(e) => actualizarCampo('nombre', e.target.value)}
                autoComplete="given-name"
              />
              {errores.nombre && <span className="form-error" role="alert">{errores.nombre}</span>}
            </div>

            <div className="form-grupo">
              <label className="form-label" htmlFor="apellido">{t.formulario.apellido} *</label>
              <input
                id="apellido"
                type="text"
                className={`form-input ${errores.apellido ? 'form-input--error' : ''}`}
                placeholder={t.formulario.apellidoPh}
                value={datos.apellido}
                onChange={(e) => actualizarCampo('apellido', e.target.value)}
                autoComplete="family-name"
              />
              {errores.apellido && <span className="form-error" role="alert">{errores.apellido}</span>}
            </div>
          </div>

          <div className="form-fila">
            <div className="form-grupo">
              <label className="form-label" htmlFor="email">{t.formulario.email} *</label>
              <input
                id="email"
                type="email"
                className={`form-input ${errores.email ? 'form-input--error' : ''}`}
                placeholder={t.formulario.emailPh}
                value={datos.email}
                onChange={(e) => actualizarCampo('email', e.target.value)}
                autoComplete="email"
              />
              {errores.email && <span className="form-error" role="alert">{errores.email}</span>}
            </div>

            <div className="form-grupo">
              <label className="form-label" htmlFor="telefono">{t.formulario.telefono} *</label>
              <input
                id="telefono"
                type="tel"
                className={`form-input ${errores.telefono ? 'form-input--error' : ''}`}
                placeholder={t.formulario.telefonoPh}
                value={datos.telefono}
                onChange={(e) => actualizarCampo('telefono', e.target.value)}
                autoComplete="tel"
              />
              {errores.telefono && <span className="form-error" role="alert">{errores.telefono}</span>}
            </div>
          </div>

          <div className="form-fila">
            <div className="form-grupo">
              <label className="form-label" htmlFor="ciudad">{t.formulario.ciudad}</label>
              <input
                id="ciudad"
                type="text"
                className="form-input"
                placeholder={t.formulario.ciudadPh}
                value={datos.ciudad}
                onChange={(e) => actualizarCampo('ciudad', e.target.value)}
                autoComplete="address-level2"
              />
            </div>

            <div className="form-grupo">
              <label className="form-label" htmlFor="pais">{t.formulario.pais}</label>
              <input
                id="pais"
                type="text"
                className="form-input"
                placeholder={t.formulario.paisPh}
                value={datos.pais}
                onChange={(e) => actualizarCampo('pais', e.target.value)}
                autoComplete="country-name"
              />
            </div>
          </div>

          <div className="form-fila">
            <div className="form-grupo">
              <label className="form-label" htmlFor="puesto">{t.formulario.puestoLabel} *</label>
              <select
                id="puesto"
                className={`form-select ${errores.puesto ? 'form-input--error' : ''}`}
                value={datos.puesto}
                onChange={(e) => actualizarCampo('puesto', e.target.value)}
              >
                <option value="">{t.formulario.puestoPh}</option>
                {t.formulario.puestos.map((puesto, i) => (
                  <option key={i} value={puesto}>{puesto}</option>
                ))}
              </select>
              {errores.puesto && <span className="form-error" role="alert">{errores.puesto}</span>}
            </div>

            <div className="form-grupo">
              <label className="form-label" htmlFor="idiomaNivel">{t.formulario.idiomaLabel} *</label>
              <select
                id="idiomaNivel"
                className={`form-select ${errores.idioma ? 'form-input--error' : ''}`}
                value={datos.idioma}
                onChange={(e) => actualizarCampo('idioma', e.target.value)}
              >
                <option value="">{t.formulario.idiomaPh}</option>
                {t.formulario.idiomas.map((item) => (
                  <option key={item.valor} value={item.valor}>{item.texto}</option>
                ))}
              </select>
              {errores.idioma && <span className="form-error" role="alert">{errores.idioma}</span>}
            </div>
          </div>

          <div className="form-grupo">
            <label className="form-label" htmlFor="experiencia">{t.formulario.expLabel}</label>
            <select
              id="experiencia"
              className="form-select"
              value={datos.experiencia}
              onChange={(e) => actualizarCampo('experiencia', e.target.value)}
            >
              <option value="">{t.formulario.expPh}</option>
              {t.formulario.experiencias.map((item) => (
                <option key={item.valor} value={item.valor}>{item.texto}</option>
              ))}
            </select>
          </div>

          <div className="form-grupo">
            <label className="form-label" htmlFor="mensaje">{t.formulario.mensajeLabel}</label>
            <textarea
              id="mensaje"
              className="form-textarea"
              placeholder={t.formulario.mensajePh}
              rows={4}
              value={datos.mensaje}
              onChange={(e) => actualizarCampo('mensaje', e.target.value)}
            />
          </div>

          <button type="submit" className="form-btn-enviar" disabled={enviando}>
            {enviando ? t.formulario.btnEnviando : t.formulario.btnEnviar}
          </button>

          <p className="form-nota">{t.formulario.nota}</p>
        </form>
      </div>
    </section>
  );
}

export default FormularioAplicacion;

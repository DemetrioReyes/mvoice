import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { traducciones } from './traducciones';
import type { Idioma, TraduccionesType } from './traducciones';

type IdiomaContextoType = {
  idioma: Idioma;
  t: TraduccionesType;
  cambiarIdioma: (idioma: Idioma) => void;
};

const IdiomaContexto = createContext<IdiomaContextoType>({
  idioma: 'es',
  t: traducciones.es,
  cambiarIdioma: () => {},
});

function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>('es');

  function cambiarIdioma(nuevoIdioma: Idioma) {
    setIdioma(nuevoIdioma);
    document.documentElement.lang = nuevoIdioma;
  }

  return (
    <IdiomaContexto.Provider value={{ idioma, t: traducciones[idioma], cambiarIdioma }}>
      {children}
    </IdiomaContexto.Provider>
  );
}

function useIdioma() {
  return useContext(IdiomaContexto);
}

export { IdiomaProvider, useIdioma };

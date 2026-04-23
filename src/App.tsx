import { useEffect } from 'react';
import { IdiomaProvider, useIdioma } from './i18n/IdiomaContexto';
import useAnimacionScroll from './hooks/useAnimacionScroll';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MisionVision from './components/MisionVision/MisionVision';
import Valores from './components/Valores/Valores';
import PorQueElegirnos from './components/PorQueElegirnos/PorQueElegirnos';
import BeneficiosLaborales from './components/BeneficiosLaborales/BeneficiosLaborales';
import FormularioAplicacion from './components/FormularioAplicacion/FormularioAplicacion';
import Footer from './components/Footer/Footer';

function AppContenido() {
  const { idioma } = useIdioma();
  useAnimacionScroll(idioma);

  useEffect(() => {
    const titulo = idioma === 'en'
      ? 'MarketVoice Innovations | Bilingual Call Center - Careers, Sales & Support'
      : 'MarketVoice Innovations | Call Center Bilingue - Carreras, Ventas y Soporte';

    const descripcion = idioma === 'en'
      ? 'MarketVoice Innovations: high-performance bilingual call center. Trained agents in sales, support and customer service for LATAM, USA and Spain. Apply now or request your 15-day pilot.'
      : 'MarketVoice Innovations: call center bilingue de alto rendimiento. Agentes capacitados en ventas, soporte y servicio al cliente para LATAM, USA y Espana. Aplica ahora o solicita tu piloto de 15 dias.';

    document.title = titulo;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descripcion);

    document.documentElement.lang = idioma;
  }, [idioma]);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <MisionVision />
        <Valores />
        <PorQueElegirnos />
        <BeneficiosLaborales />
        <FormularioAplicacion />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <IdiomaProvider>
      <AppContenido />
    </IdiomaProvider>
  );
}

export default App;

# MarketVoice Innovations - Landing Page

Landing page oficial de MarketVoice Innovations, un call center bilingue de alto rendimiento. La pagina esta dirigida tanto a empresas que buscan servicios de contact center como a talentos que quieren unirse al equipo.

## Descripcion del Proyecto

Pagina web de una sola pagina (SPA) con soporte bilingue (espanol e ingles) que incluye:

- Presentacion de la empresa, mision y vision
- Valores corporativos
- Razones para elegir MarketVoice como proveedor (para empresas)
- Beneficios laborales y proceso de contratacion (para candidatos)
- Formulario de aplicacion a vacantes
- Cambio dinamico de idioma sin recargar la pagina

## Stack Tecnologico

- React 19
- TypeScript 6
- Vite 8
- CSS modular por componente

## Estructura del Proyecto

```
src/
  components/
    Header/              # Navegacion y selector de idioma
    Hero/                # Seccion principal con estadisticas
    MisionVision/        # Mision, vision y por que elegirnos
    Valores/             # Valores corporativos
    PorQueElegirnos/     # Propuesta de valor para empresas
    BeneficiosLaborales/ # Beneficios y proceso de contratacion
    FormularioAplicacion/ # Formulario para candidatos
    Footer/              # Pie de pagina con enlaces y contacto
  hooks/
    useAnimacionScroll.ts # Hook para animaciones al hacer scroll
  i18n/
    IdiomaContexto.tsx   # Contexto global de idioma (es/en)
    traducciones.ts      # Textos en espanol e ingles
  types/
    index.ts             # Tipos compartidos
```

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de produccion
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

## Cobertura

La landing esta orientada a mercados de LATAM, USA y Espana, con contenido completamente disponible en espanol e ingles.

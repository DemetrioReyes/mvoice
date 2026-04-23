export type Idioma = 'es' | 'en';

export type TraduccionesType = {
  nav: {
    inicio: string;
    nosotros: string;
    servicios: string;
    trabaja: string;
    aplicar: string;
    btnAplicar: string;
  };
  hero: {
    etiqueta: string;
    titulo1: string;
    titulo2: string;
    descripcion: string;
    btnPrincipal: string;
    btnSecundario: string;
    stat1: string;
    stat2: string;
    stat3: string;
    t1Titulo: string;
    t1Texto: string;
    t2Titulo: string;
    t2Texto: string;
    t3Titulo: string;
    t3Texto: string;
    scroll: string;
  };
  mv: {
    etiqueta: string;
    titulo: string;
    subtitulo: string;
    misionTitulo: string;
    misionTexto: string;
    visionTitulo: string;
    visionTexto: string;
    porQueTitulo: string;
    porQueLista: string[];
  };
  valores: {
    etiqueta: string;
    titulo: string;
    lista: { numero: string; titulo: string; descripcion: string }[];
  };
  pqe: {
    etiqueta: string;
    titulo: string;
    subtitulo: string;
    razones: { titulo: string; descripcion: string }[];
    bannerTitulo: string;
    bannerTexto: string;
    bannerBtn: string;
  };
  beneficios: {
    etiqueta: string;
    titulo: string;
    subtitulo: string;
    lista: { titulo: string; descripcion: string }[];
    pasos: { numero: string; texto: string }[];
    rotacionLabel: string;
    rotacionComparacion: string;
    procesoTitulo: string;
    btn: string;
  };
  formulario: {
    etiqueta: string;
    titulo: string;
    subtitulo: string;
    nombre: string;
    nombrePh: string;
    apellido: string;
    apellidoPh: string;
    email: string;
    emailPh: string;
    telefono: string;
    telefonoPh: string;
    ciudad: string;
    ciudadPh: string;
    pais: string;
    paisPh: string;
    puestoLabel: string;
    puestoPh: string;
    puestos: string[];
    expLabel: string;
    expPh: string;
    experiencias: { valor: string; texto: string }[];
    idiomaLabel: string;
    idiomaPh: string;
    idiomas: { valor: string; texto: string }[];
    mensajeLabel: string;
    mensajePh: string;
    btnEnviar: string;
    btnEnviando: string;
    nota: string;
    exitoTitulo: string;
    exitoTexto: string;
    exitoBtn: string;
    errNombre: string;
    errApellido: string;
    errEmailReq: string;
    errEmailInv: string;
    errTelefono: string;
    errPuesto: string;
    errIdioma: string;
  };
  footer: {
    descripcion: string;
    colEmpresa: string;
    colServicios: string;
    colContacto: string;
    enlacesEmpresa: string[];
    enlacesServicios: string[];
    cobertura: string;
    idiomasTexto: string;
    btnPiloto: string;
    copyright: string;
    slogan: string;
  };
};

const es: TraduccionesType = {
  nav: {
    inicio: 'Inicio',
    nosotros: 'Nosotros',
    servicios: 'Servicios',
    trabaja: 'Trabaja con Nosotros',
    aplicar: 'Aplicar',
    btnAplicar: 'Aplicar Ahora',
  },
  hero: {
    etiqueta: 'Call Center de Alto Rendimiento',
    titulo1: 'Inicia Tu Nueva',
    titulo2: 'Carrera Aqui',
    descripcion: 'Unete al equipo de MarketVoice Innovations. Crecimiento real, bonos por desempeno y un ambiente que cuida a su gente. Mas de 300 agentes confian en nosotros.',
    btnPrincipal: 'Aplicar a Vacantes',
    btnSecundario: 'Conocer la Empresa',
    stat1: 'Agentes activos',
    stat2: 'Rotacion historica',
    stat3: 'Dias piloto gratis',
    t1Titulo: 'Ventas y Soporte',
    t1Texto: 'Agentes bilingues especializados por industria',
    t2Titulo: 'Datos en Tiempo Real',
    t2Texto: 'Dashboards y analisis predictivo incluidos',
    t3Titulo: 'Equipo Capacitado',
    t3Texto: 'Formacion continua y planes de carrera reales',
    scroll: 'Descubre mas',
  },
  mv: {
    etiqueta: 'Quienes Somos',
    titulo: 'La empresa detras de cada interaccion',
    subtitulo: 'MarketVoice Innovations es el aliado estrategico que transforma cada contacto en una oportunidad de crecimiento para tu negocio.',
    misionTitulo: 'Mision',
    misionTexto: 'Potenciar la experiencia de marca de nuestros clientes a traves de servicios de call center en ventas, soporte y servicio al cliente, combinando tecnologia innovadora, inteligencia de datos y un equipo humano altamente capacitado para generar relaciones duraderas y resultados medibles.',
    visionTitulo: 'Vision',
    visionTexto: 'Ser el aliado estrategico lider en soluciones de contacto omnicanal para empresas de habla hispana, reconocidos por transformar cada interaccion en una oportunidad de crecimiento, fidelizacion y eficiencia operativa.',
    porQueTitulo: 'Por que MarketVoice',
    porQueLista: [
      'Cobertura bilingue: espanol e ingles',
      'Piloto de 15 dias con metricas verificadas',
      'Desde 10 hasta 300 agentes',
      'Sin contratos rigidos',
      'Dashboards en tiempo real',
    ],
  },
  valores: {
    etiqueta: 'Nuestros Valores',
    titulo: 'Los principios que nos guian',
    lista: [
      { numero: '01', titulo: 'Innovacion constante', descripcion: 'Integramos tecnologia de vanguardia como IA, CRM y analisis predictivo para optimizar cada gestion.' },
      { numero: '02', titulo: 'Vocacion de servicio', descripcion: 'Actuamos con empatia, escucha activa y soluciones rapidas, tanto con clientes externos como internos.' },
      { numero: '03', titulo: 'Transparencia y etica', descripcion: 'Cumplimos metricas reales, sin maquillaje de datos, respetando la privacidad y los acuerdos.' },
      { numero: '04', titulo: 'Orientacion a resultados', descripcion: 'Medimos el exito por el ROI de nuestros clientes y la satisfaccion del consumidor final.' },
      { numero: '05', titulo: 'Trabajo en equipo', descripcion: 'Fomentamos un ambiente colaborativo donde cada agente, supervisor y analista suma valor.' },
      { numero: '06', titulo: 'Mejora continua', descripcion: 'Capacitacion semanal, retroalimentacion estructurada y adaptacion agil a los cambios del mercado.' },
    ],
  },
  pqe: {
    etiqueta: 'Para Empresas',
    titulo: 'Por que elegirnos como proveedor',
    subtitulo: 'No solo gestionamos llamadas. Somos el aliado que hace crecer tu negocio a traves de datos, tecnologia y un equipo especializado.',
    razones: [
      { titulo: 'Estrategia basada en datos', descripcion: 'Analizamos cada interaccion para identificar patrones de venta cruzada, fricciones en soporte y oportunidades de upselling. Dashboards en tiempo real.' },
      { titulo: 'Modelo hibrido humano + tecnologia', descripcion: 'Combinamos agentes entrenados con herramientas de automatizacion inteligente: IVR, chatbots y recordatorios predictivos para reducir tiempos de espera.' },
      { titulo: 'Especializacion por industria', descripcion: 'Adaptamos scripts, KPIs y flujos de trabajo a tu sector: retail, tecnologia, salud, servicios financieros o logistica.' },
      { titulo: 'Flexibilidad y escalabilidad', descripcion: 'Desde 10 hasta 300 agentes en modalidad BPO, outsourcing selectivo o campanas estacionales. Sin contratos rigidos.' },
      { titulo: 'Bilingue y multicultural', descripcion: 'Cobertura en espanol e ingles con neutralizacion de acentos y manejo cultural para mercados LATAM, USA y Espana.' },
      { titulo: 'Prueba sin compromiso', descripcion: 'Piloto de 15 dias con metricas validadas por un tercero: calidad de llamada, CSAT y tiempo de resolucion incluidos.' },
    ],
    bannerTitulo: 'Comienza con un piloto de 15 dias sin compromiso',
    bannerTexto: 'Metricas validadas por terceros. Sin contratos rigidos. Resultados reales.',
    bannerBtn: 'Solicitar Piloto',
  },
  beneficios: {
    etiqueta: 'Para Talentos',
    titulo: 'Por que trabajar con nosotros',
    subtitulo: 'En MarketVoice Innovations cada persona importa. Construimos carreras, no solo empleos.',
    lista: [
      { titulo: 'Ambiente de crecimiento real', descripcion: 'No eres un numero. Impulsamos planes de carrera: agente, mentor, QA, supervisor y lider de proyecto, con aumentos salariales por competencias.' },
      { titulo: 'Bonos por desempeno', descripcion: 'Ademas del salario base competitivo, bonos mensuales por calidad, ventas adicionales, fidelizacion y asistencia perfecta.' },
      { titulo: 'Psicosalud y bienestar', descripcion: 'Acceso a plataforma de terapia online, pausas activas, dias de bienestar trimestral y seguimiento contra el burnout.' },
      { titulo: 'Comunidad y reconocimiento', descripcion: 'Eventos mensuales de premiacion, agente estrella, gamificacion con puntos canjeables por cursos, tecnologia o dias libres.' },
      { titulo: 'Estabilidad con proposito', descripcion: 'Trabajas para ayudar a otras empresas a crecer pero tambien para construir una compania que cuida a su gente. Rotacion historica menor al 12%.' },
    ],
    pasos: [
      { numero: '1', texto: 'Envia tu formulario de aplicacion' },
      { numero: '2', texto: 'Entrevista inicial en 48 horas' },
      { numero: '3', texto: 'Evaluacion tecnica y de idioma' },
      { numero: '4', texto: 'Oferta y onboarding' },
    ],
    rotacionLabel: 'Rotacion historica',
    rotacionComparacion: 'vs. 30-40% del sector',
    procesoTitulo: 'Proceso de contratacion',
    btn: 'Ver Vacantes Disponibles',
  },
  formulario: {
    etiqueta: 'Vacantes Abiertas',
    titulo: 'Inicia tu nueva carrera aqui',
    subtitulo: 'Completa el formulario y nuestro equipo de reclutamiento se pondra en contacto contigo en menos de 48 horas.',
    nombre: 'Nombre',
    nombrePh: 'Tu nombre',
    apellido: 'Apellido',
    apellidoPh: 'Tu apellido',
    email: 'Correo electronico',
    emailPh: 'tucorreo@email.com',
    telefono: 'Telefono',
    telefonoPh: '+1 000 000 0000',
    ciudad: 'Ciudad',
    ciudadPh: 'Tu ciudad',
    pais: 'Pais',
    paisPh: 'Tu pais',
    puestoLabel: 'Puesto de interes',
    puestoPh: 'Selecciona un puesto',
    puestos: ['Agente de Ventas', 'Agente de Soporte al Cliente', 'Agente Bilingue (Espanol/Ingles)', 'Mentor de Agentes', 'Analista de Calidad (QA)', 'Supervisor de Campana'],
    expLabel: 'Experiencia en call center',
    expPh: 'Selecciona tu experiencia',
    experiencias: [
      { valor: 'sin-experiencia', texto: 'Sin experiencia (busco aprender)' },
      { valor: 'menos-1', texto: 'Menos de 1 ano' },
      { valor: '1-2', texto: '1 a 2 anos' },
      { valor: '2-5', texto: '2 a 5 anos' },
      { valor: 'mas-5', texto: 'Mas de 5 anos' },
    ],
    idiomaLabel: 'Nivel de ingles',
    idiomaPh: 'Selecciona tu nivel',
    idiomas: [
      { valor: 'basico', texto: 'Basico (A1-A2)' },
      { valor: 'intermedio', texto: 'Intermedio (B1-B2)' },
      { valor: 'avanzado', texto: 'Avanzado (C1-C2)' },
      { valor: 'nativo', texto: 'Nativo' },
      { valor: 'ninguno', texto: 'Sin conocimientos' },
    ],
    mensajeLabel: 'Cuentanos sobre ti',
    mensajePh: 'Por que quieres unirte a MarketVoice Innovations? Comparte algo sobre tu experiencia o motivacion.',
    btnEnviar: 'Enviar Aplicacion',
    btnEnviando: 'Enviando...',
    nota: 'Al enviar este formulario aceptas que MarketVoice Innovations contacte contigo para el proceso de seleccion.',
    exitoTitulo: 'Aplicacion enviada',
    exitoTexto: 'Gracias por tu interes en MarketVoice Innovations. Revisaremos tu solicitud y nos pondremos en contacto en las proximas 48 horas.',
    exitoBtn: 'Enviar otra aplicacion',
    errNombre: 'El nombre es requerido',
    errApellido: 'El apellido es requerido',
    errEmailReq: 'El email es requerido',
    errEmailInv: 'Ingresa un email valido',
    errTelefono: 'El telefono es requerido',
    errPuesto: 'Selecciona un puesto',
    errIdioma: 'Selecciona tu nivel de idioma',
  },
  footer: {
    descripcion: 'Aliado estrategico en soluciones de contacto omnicanal para empresas de habla hispana. Tecnologia, datos y talento humano al servicio de tu marca.',
    colEmpresa: 'Empresa',
    colServicios: 'Servicios',
    colContacto: 'Contacto',
    enlacesEmpresa: ['Nosotros', 'Servicios', 'Trabaja con Nosotros', 'Aplicar a Vacantes'],
    enlacesServicios: ['Ventas Outbound', 'Soporte al Cliente', 'BPO y Outsourcing', 'Campanas Estacionales'],
    cobertura: 'LATAM, USA y Espana',
    idiomasTexto: 'Espanol e Ingles',
    btnPiloto: 'Solicitar Piloto de 15 Dias',
    copyright: 'MarketVoice Innovations. Todos los derechos reservados.',
    slogan: 'Transformando cada interaccion en una oportunidad de crecimiento.',
  },
};

const en: TraduccionesType = {
  nav: {
    inicio: 'Home',
    nosotros: 'About',
    servicios: 'Services',
    trabaja: 'Work With Us',
    aplicar: 'Apply',
    btnAplicar: 'Apply Now',
  },
  hero: {
    etiqueta: 'High Performance Call Center',
    titulo1: 'Start Your New',
    titulo2: 'Career Here',
    descripcion: 'Join the MarketVoice Innovations team. Real growth, performance bonuses and an environment that cares for its people. Over 300 agents trust us.',
    btnPrincipal: 'Apply to Jobs',
    btnSecundario: 'Learn About Us',
    stat1: 'Active agents',
    stat2: 'Historical turnover',
    stat3: 'Free pilot days',
    t1Titulo: 'Sales and Support',
    t1Texto: 'Industry-specialized bilingual agents',
    t2Titulo: 'Real-Time Data',
    t2Texto: 'Dashboards and predictive analytics included',
    t3Titulo: 'Trained Team',
    t3Texto: 'Continuous training and real career paths',
    scroll: 'Discover more',
  },
  mv: {
    etiqueta: 'About Us',
    titulo: 'The company behind every interaction',
    subtitulo: 'MarketVoice Innovations is the strategic partner that transforms every contact into a growth opportunity for your business.',
    misionTitulo: 'Mission',
    misionTexto: 'To empower our clients brand experience through call center services in sales, support and customer service, combining innovative technology, data intelligence and a highly trained human team to generate lasting relationships and measurable results.',
    visionTitulo: 'Vision',
    visionTexto: 'To be the leading strategic partner in omnichannel contact solutions for Spanish-speaking companies, recognized for transforming every interaction into an opportunity for growth, loyalty and operational efficiency.',
    porQueTitulo: 'Why MarketVoice',
    porQueLista: [
      'Bilingual coverage: Spanish and English',
      '15-day pilot with verified metrics',
      'From 10 to 300 agents',
      'No rigid contracts',
      'Real-time dashboards',
    ],
  },
  valores: {
    etiqueta: 'Our Values',
    titulo: 'The principles that guide us',
    lista: [
      { numero: '01', titulo: 'Constant innovation', descripcion: 'We integrate cutting-edge technology such as AI, CRM and predictive analytics to optimize every interaction.' },
      { numero: '02', titulo: 'Service vocation', descripcion: 'We act with empathy, active listening and fast solutions, both with external and internal clients.' },
      { numero: '03', titulo: 'Transparency and ethics', descripcion: 'We deliver real metrics without data manipulation, respecting privacy and agreements at all times.' },
      { numero: '04', titulo: 'Results-oriented', descripcion: 'We measure success by our clients ROI and the satisfaction of the end consumer.' },
      { numero: '05', titulo: 'Teamwork', descripcion: 'We foster a collaborative environment where every agent, supervisor and analyst adds value.' },
      { numero: '06', titulo: 'Continuous improvement', descripcion: 'Weekly training, structured feedback and agile adaptation to market changes.' },
    ],
  },
  pqe: {
    etiqueta: 'For Businesses',
    titulo: 'Why choose us as your provider',
    subtitulo: 'We do more than manage calls. We are the partner that grows your business through data, technology and a specialized team.',
    razones: [
      { titulo: 'Data-driven strategy', descripcion: 'We analyze every interaction to identify cross-selling patterns, support friction points and upselling opportunities. Real-time dashboards included.' },
      { titulo: 'Human + technology hybrid model', descripcion: 'We combine trained agents with intelligent automation tools: IVR, chatbots and predictive reminders to reduce wait times and increase conversions.' },
      { titulo: 'Industry specialization', descripcion: 'We tailor scripts, KPIs and workflows to your sector: retail, technology, healthcare, financial services or logistics.' },
      { titulo: 'Flexibility and scalability', descripcion: 'From 10 to 300 agents in BPO, selective outsourcing or seasonal campaign mode. No rigid contracts.' },
      { titulo: 'Bilingual and multicultural', descripcion: 'Coverage in Spanish and English with accent neutralization and cultural management for LATAM, USA and Spain markets.' },
      { titulo: 'Risk-free trial', descripcion: '15-day pilot with third-party validated metrics: call quality, CSAT and resolution time all included.' },
    ],
    bannerTitulo: 'Start with a 15-day no-commitment pilot',
    bannerTexto: 'Third-party validated metrics. No rigid contracts. Real results.',
    bannerBtn: 'Request Pilot',
  },
  beneficios: {
    etiqueta: 'For Talent',
    titulo: 'Why work with us',
    subtitulo: 'At MarketVoice Innovations every person matters. We build careers, not just jobs.',
    lista: [
      { titulo: 'Real growth environment', descripcion: 'You are not a number. We drive career plans: agent, mentor, QA, supervisor and project leader, with salary increases based on competencies.' },
      { titulo: 'Performance bonuses', descripcion: 'In addition to a competitive base salary, monthly bonuses for quality, additional sales, loyalty and perfect attendance.' },
      { titulo: 'Mental health and wellness', descripcion: 'Access to online therapy platform, active breaks, quarterly wellness days and burnout prevention monitoring.' },
      { titulo: 'Community and recognition', descripcion: 'Monthly award events, star agent program, gamification with points redeemable for courses, technology or days off.' },
      { titulo: 'Stability with purpose', descripcion: 'You work to help other companies grow but also to build a company that cares for its people. Historical turnover under 12%.' },
    ],
    pasos: [
      { numero: '1', texto: 'Submit your application form' },
      { numero: '2', texto: 'Initial interview within 48 hours' },
      { numero: '3', texto: 'Technical and language assessment' },
      { numero: '4', texto: 'Offer and onboarding' },
    ],
    rotacionLabel: 'Historical turnover',
    rotacionComparacion: 'vs. 30-40% industry average',
    procesoTitulo: 'Hiring process',
    btn: 'View Open Positions',
  },
  formulario: {
    etiqueta: 'Open Positions',
    titulo: 'Start your new career here',
    subtitulo: 'Complete the form and our recruitment team will contact you within 48 hours.',
    nombre: 'First name',
    nombrePh: 'Your first name',
    apellido: 'Last name',
    apellidoPh: 'Your last name',
    email: 'Email address',
    emailPh: 'youremail@email.com',
    telefono: 'Phone',
    telefonoPh: '+1 000 000 0000',
    ciudad: 'City',
    ciudadPh: 'Your city',
    pais: 'Country',
    paisPh: 'Your country',
    puestoLabel: 'Position of interest',
    puestoPh: 'Select a position',
    puestos: ['Sales Agent', 'Customer Support Agent', 'Bilingual Agent (Spanish/English)', 'Agent Mentor', 'Quality Analyst (QA)', 'Campaign Supervisor'],
    expLabel: 'Call center experience',
    expPh: 'Select your experience',
    experiencias: [
      { valor: 'sin-experiencia', texto: 'No experience (eager to learn)' },
      { valor: 'menos-1', texto: 'Less than 1 year' },
      { valor: '1-2', texto: '1 to 2 years' },
      { valor: '2-5', texto: '2 to 5 years' },
      { valor: 'mas-5', texto: 'More than 5 years' },
    ],
    idiomaLabel: 'English level',
    idiomaPh: 'Select your level',
    idiomas: [
      { valor: 'basico', texto: 'Basic (A1-A2)' },
      { valor: 'intermedio', texto: 'Intermediate (B1-B2)' },
      { valor: 'avanzado', texto: 'Advanced (C1-C2)' },
      { valor: 'nativo', texto: 'Native' },
      { valor: 'ninguno', texto: 'No knowledge' },
    ],
    mensajeLabel: 'Tell us about yourself',
    mensajePh: 'Why do you want to join MarketVoice Innovations? Share something about your experience or motivation.',
    btnEnviar: 'Submit Application',
    btnEnviando: 'Submitting...',
    nota: 'By submitting this form you agree that MarketVoice Innovations may contact you regarding the selection process.',
    exitoTitulo: 'Application submitted',
    exitoTexto: 'Thank you for your interest in MarketVoice Innovations. We will review your application and get in touch within the next 48 hours.',
    exitoBtn: 'Submit another application',
    errNombre: 'First name is required',
    errApellido: 'Last name is required',
    errEmailReq: 'Email is required',
    errEmailInv: 'Enter a valid email',
    errTelefono: 'Phone is required',
    errPuesto: 'Select a position',
    errIdioma: 'Select your language level',
  },
  footer: {
    descripcion: 'Strategic partner in omnichannel contact solutions for Spanish-speaking companies. Technology, data and human talent at the service of your brand.',
    colEmpresa: 'Company',
    colServicios: 'Services',
    colContacto: 'Contact',
    enlacesEmpresa: ['About', 'Services', 'Work With Us', 'Apply to Jobs'],
    enlacesServicios: ['Outbound Sales', 'Customer Support', 'BPO and Outsourcing', 'Seasonal Campaigns'],
    cobertura: 'LATAM, USA and Spain',
    idiomasTexto: 'Spanish and English',
    btnPiloto: 'Request 15-Day Pilot',
    copyright: 'MarketVoice Innovations. All rights reserved.',
    slogan: 'Transforming every interaction into a growth opportunity.',
  },
};

export const traducciones = { es, en };

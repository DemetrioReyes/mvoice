export type DatoFormulario = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  ciudad: string;
  pais: string;
  puesto: string;
  experiencia: string;
  idioma: string;
  mensaje: string;
};

export type ItemServicio = {
  titulo: string;
  descripcion: string;
};

export type ItemBeneficio = {
  titulo: string;
  descripcion: string;
};

export type ItemValor = {
  numero: string;
  titulo: string;
  descripcion: string;
};

export type EnlaceNav = {
  etiqueta: string;
  href: string;
};

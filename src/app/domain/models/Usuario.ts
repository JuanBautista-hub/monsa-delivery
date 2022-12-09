export interface Usuario {
  Username?:  string;
  Correo?:    string;
  UsuarioID?: number;
  PerfilID?:  number;
  Telefono?:  string;
  RolID?:     number;
  Perfil?:    Perfil;
  Rol?:Rol;
  Avatar?:string;
}

export interface Perfil {
  PerfilID?:        number;
  Nombre?:          string;
  Apellido1?:       string;
  Apellido2?:       string;
  Sexo?:            string;
  Correo?:          string;
  FechaNacimiento?: null;
  Telefono?:        string;
  Activo?:          boolean;
  Eliminado?:       boolean;
  DireccionID?:     null;
}

export interface Rol {
  RolID?:       number;
  Descripcion?: string;
}

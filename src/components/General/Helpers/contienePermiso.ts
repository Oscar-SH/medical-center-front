export const contienePermiso = (permiso: string, permisos: string[] | null) => {
    if (permisos && permisos.includes(permiso)) return true;
    return false;
};
import ability from './ability'


export const canNavigate = (to, moduleId, roleId) => to.matched.some(route => {
    if(to.meta.rolesPermitidos){
        return (moduleId == route.meta.module && to.meta.rolesPermitidos.includes(roleId))
    }else{
        return true
    }
})
export const _ = undefined

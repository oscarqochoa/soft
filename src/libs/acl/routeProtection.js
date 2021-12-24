import ability from './ability'


export const canNavigate = (to, moduleId, roleId) => to.matched.some(route => {
    if(to.meta.permittedRoles){
        return (moduleId == route.meta.module && to.meta.permittedRoles.includes(roleId))
    }else{
        return true
    }
})
export const _ = undefined

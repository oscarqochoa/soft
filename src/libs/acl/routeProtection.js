export const canNavigate = (to, roles) => to.matched.some(route => {
    
    if (route.meta.permittedRoles) {
        const userModuls = roles.map(
            role => role.module_id,
        )
        if (!userModuls.includes(route.meta.module)) return false
        let roleId = roles.filter(
            role => role.module_id === route.meta.module,
        )[0].role_id
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].module_id == route.meta.module) {
                return (roles[i].module_id == route.meta.module && to.meta.permittedRoles.includes(roleId))
            }
        }
    } else {
        return true
    }
})
export const _ = undefined

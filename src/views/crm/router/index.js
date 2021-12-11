import viewRoute from '../views/test/view.router'
import leadRoute from '../views/Lead/lead.route'
import SalesMadeRoute from '../views/sales-made/sales-made.router'
import clientsRoute from '../views/clients/clients.router'
import commissionsRoute from '../views/commissions/commissions.router'
import viewDashboard from '../views/dashboard/dashboard.router'
import PaymentsRoute from '../views/payments/payments.router'
import ListsRoute from '../views/lists/lists.router'

const routes = [
  ...viewRoute,
  ...leadRoute,
  ...clientsRoute,
  SalesMadeRoute,
  ...commissionsRoute,
  ...viewDashboard,
  ...PaymentsRoute,
  ...ListsRoute
]

routes.map(route =>{
  if(route.children){
    route.children.map(child=>{
      if(child.meta){
        child.meta.module = 2
      }else{
        child.meta = {module: 2}
      }
    })
  }
  if(route.meta){
    route.meta.module = 2
  }else{
    route.meta = {module: 2}
  }
})

export default routes



  

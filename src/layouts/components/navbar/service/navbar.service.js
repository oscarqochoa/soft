import {amgApi} from "@/service/axios";

class NavbarService {

  async getUserNotifications(userId) {
    const data = await amgApi.post('/getnotifications', {
        id: userId
    })
    return data.data
  }
}
export default new NavbarService()

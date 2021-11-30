import {amgApi} from "@/service/axios";

class CrmService {
  async getAlgo() {
    // eslint-disable-next-line no-undef
    const data = await amgApi.get('/welcome')
    return data
  }

  async getSaleMade(body, page) {
    // eslint-disable-next-line no-undef
    let data = await amgApi.post(`/salemade?page=${page}`, {
      text: body.text,
      status: body.status,
      program: body.program,
      state_h: body.state_h,
      from: body.from,
      to: body.to,
      orderby: body.orderby,
      order: body.order,
      captured: body.captured,
      seller: body.seller,
      salemade: body.salemade,
      rolsession: body.rolsession,
      statusip: body.statusip,
      sourcesname_id: body.sourcesname_id,
      done: body.done,
      per_page: body.per_page,
    })
    data = data.data
    return data
  }

  async getSellersCrm() {
    // eslint-disable-next-line no-undef
    let data = await amgApi.post('/sellerall/2', {
      roles: '[1,2,5]',
      type: '1',
    })
    data = data.data
    return data
  }

  async getCapturedCrm() {
    // eslint-disable-next-line no-undef
    let data = await amgApi.post('/capturedall/2', {
      roles: '[]',
      type: '1',
    })
    data = data.data
    return data
  }
  //TODO Hacerlo global
  async getPrograms() {
    let data = await amgApi.get('/programs')
    data = data.data
    return data
  }

  async getSources() {
    let data = await amgApi.get('/sourcesnames')
    data = data.data
    return data
  }

  async getStates() {
    let data = await amgApi.post('/get-states', { type: 1 })
    data = data.data
    return data
  }
}
export default new CrmService()

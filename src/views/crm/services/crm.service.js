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
    })
    data = data.data
    return data
  }
}
export default new CrmService()

class CrmService {
  async getAlgo() {
    // eslint-disable-next-line no-undef
    const data = await amgApi.get('/welcome')
    return data
  }
}
export default new CrmService()

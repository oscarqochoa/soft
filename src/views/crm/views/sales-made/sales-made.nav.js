export default {
  title: 'Sales Made',
  icon: 'FileTextIcon',
  route: 'sales-made-crm-new-client',
  tag: 1,
  update() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.tag += 5
        resolve()
      }, 500)
    })
  },
}

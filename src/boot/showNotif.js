import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

const show = (message, jenis) => {
  return Notify.create({
    message: message,
    color: jenis,
    timeout: 1000,
    actions: [{ icon: 'close', color: 'white' }]
  })
}
export default boot(async ({ app }) => {
  app.config.globalProperties.$successNotif = (msg) => {
    show(msg, 'positive')
  }
  app.config.globalProperties.$commonErrorNotif = () => {
    show('Terjadi kesalahan server')
  }
  app.config.globalProperties.$errorNotif = (msg) => {
    show(msg, 'negative')
  }
})

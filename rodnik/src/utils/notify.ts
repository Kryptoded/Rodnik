import { Notify } from "quasar";
function notify(message:string, type:string="negative"):void {
  Notify.create({
    message,
    type,
    timeout: 650
  })
}

export { notify }

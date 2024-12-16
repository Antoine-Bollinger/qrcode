import App from "./lib/app.ts"
import Lang from "./lib/lang.ts"
import Modal from "./lib/modal.ts"

window.onload = () => {
    new Lang()
    new Modal()
    new App()
}
export default class Modal {
    #modal_container: HTMLDialogElement | null
    #modal_button: HTMLElement | null
    #modal_close: HTMLElement | null

    constructor() {
        this.#modal_container = document.querySelector("dialog")
        this.#modal_button = document.getElementById("selectLang")
        this.#modal_close = document.querySelector("p.close_input")
        this.modal_handler()
    }

    modal_handler() {
        this.#modal_button?.addEventListener("click", e => {
            e.preventDefault()
            this.#modal_container?.showModal()
        })
        this.#modal_close?.addEventListener("click", e => {
            e.preventDefault()
            this.#modal_container?.close()
        })
    }
}
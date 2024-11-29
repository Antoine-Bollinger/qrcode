import { isValidUrl } from "./utils.js"

export default class App {
    #url
    #dimensions
    #qrcode
    #qrcode_creator
    #qrcode_container
    #qrcode_downloader

    constructor() {
        this.#qrcode_creator = document.forms[0]
        this.#qrcode_container = document.getElementById("qrcode__container") ?? null
        this.#qrcode_downloader = document.getElementById("qrcode__downloader").querySelector("button") ?? null
        this.qrcode_creator_handler()
        this.qrcode_downloader_handler()
    }

    qrcode_creator_handler() {
        this.#qrcode_creator.addEventListener("submit", e => {
            e.preventDefault()
            this.#qrcode_container.innerHTML = ""
            this.#dimensions = e.target[1].value ?? 512
            this.#url = e.target[0].value ?? ""
            if (isValidUrl(this.#url))
                this.print()
        })
    }

    qrcode_downloader_handler() {
        const observer = new MutationObserver(() => {
            this.#qrcode_downloader.hidden = (this.#qrcode_container.innerHTML.trim() === "")
        })
        observer.observe(this.#qrcode_container, { childList: true, subtree: true, characterData: true })
        this.#qrcode_downloader.addEventListener("click", e => {
            const link = document.createElement("a")
            link.href = this.#qrcode.src
            link.download = "QR-Code.png"
            link.click()
        })
    }

    print() {
        QRCode.toDataURL(this.#url, {
            width: this.#dimensions
        }, (err, url) => {
            this.#qrcode = new Image()
            this.#qrcode.src = url
            this.#qrcode_container.innerHTML = ""
            this.#qrcode_container.appendChild(this.#qrcode)
        })
    }
}
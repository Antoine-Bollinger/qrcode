import QRCode from "qrcode"
import { isValidUrl } from "./utils.js"

export default class App {
    #url: string
    #width: number
    #format: string
    #function: string | undefined
    #qrcode: string | HTMLImageElement
    #qrcode_creator: HTMLFormElement | null
    #qrcode_container: HTMLElement | null
    #qrcode_downloader: HTMLElement | null | undefined
    #qrcode_input_type: HTMLElement | null
    #qrcode_input_width: HTMLElement | null
    #qrcode_input_error: HTMLElement | null
    #href: string

    constructor() {
        this.init()
        this.qrcode_creator_handler()
        this.qrcode_type_handler()
        this.qrcode_downloader_handler()
    }

    init(): void {
        this.#qrcode_creator = document.forms[0] as HTMLFormElement
        this.#qrcode_input_type = document.getElementById("qrcode__type") as HTMLDivElement
        this.#qrcode_input_width = document.getElementById("qrcode__width") as HTMLDivElement
        this.#qrcode_input_error = document.getElementById("qrcode__error") as HTMLParagraphElement
        this.#qrcode_container = document.getElementById("qrcode__container") as HTMLDivElement
        this.#qrcode_downloader = document.getElementById("qrcode__downloader")?.querySelector("button") as HTMLButtonElement

    }

    initialize(): void {
        this.#qrcode_input_error!.innerHTML = ""
        this.#qrcode_container!.innerHTML = ""
    }

    qrcode_creator_handler(): void {
        const functionMap: { [key: string]: () => void } = {
            printSVG: this.printSVG.bind(this),
            printIMG: this.printIMG.bind(this)
        }

        this.#qrcode_creator?.addEventListener("submit", e => {
            e.preventDefault()
            this.initialize()
            try {
                const target = e.target as HTMLFormElement
                const widthInput = target[2] as HTMLInputElement
                const formatSelect = target[1] as HTMLSelectElement
                const urlInput = target[0] as HTMLInputElement
                if (!urlInput.checkValidity()) throw new Error(urlInput.validationMessage)
                this.#qrcode_container!.innerHTML = ""
                this.#width = Number(widthInput.value) || 512
                this.#format = formatSelect.value || "SVG"
                this.#function = formatSelect.options[formatSelect.selectedIndex].dataset.function
                this.#url = urlInput.value ?? ""
                if (!isValidUrl(this.#url)) throw new Error("Please enter a valid url.")
                const selectedFunction = functionMap[this.#function!]
                if (selectedFunction)
                    selectedFunction()
                else
                    throw new Error("Function was not found.")
            } catch (e) {
                this.#qrcode_input_error!.innerHTML = e.message
            }
        })
    }

    qrcode_type_handler(): void {
        this.#qrcode_creator!.elements[1].addEventListener("change", e => {
            const target = e.target as HTMLInputElement
            this.#qrcode_input_width!.hidden = (target.value === "svg")
        })
    }

    qrcode_downloader_handler(): void {
        const observer = new MutationObserver(() => {
            this.#qrcode_downloader!.hidden = (this.#qrcode_container!.innerHTML.trim() === "")
        })
        observer.observe(this.#qrcode_container as Node, { childList: true, subtree: true, characterData: true })
        this.#qrcode_downloader?.addEventListener("click", e => {
            const link = document.createElement("a")
            link.href = this.#href
            link.download = "QR-Code." + this.#format
            link.click()
        })
    }

    printSVG(): void {
        QRCode.toString(this.#url, {
            type: "svg"
        }, (err: Error, string: string) => {
            if (err) throw err
            this.initialize()
            const blob = new Blob([string], { type: "image/svg+xml;charset=utf-8" })
            this.#href = URL.createObjectURL(blob)
            this.#qrcode = string
            this.#qrcode_container!.insertAdjacentHTML("beforeend", string)
        })
    }

    printIMG(): void {
        QRCode.toDataURL(this.#url, {
            width: this.#width,
            type: `image/${this.#format}`
        }, (err: Error, url: string) => {
            if (err) throw err
            this.initialize()
            this.#href = url
            this.#qrcode = new Image()
            this.#qrcode.src = url
            this.#qrcode_container!.appendChild(this.#qrcode)
        })
    }
}
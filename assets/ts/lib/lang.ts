import en from "../data/en.json" assert {type: "json"}
import de from "../data/de.json" assert {type: "json"}
import fr from "../data/fr.json" assert {type: "json"}
import es from "../data/es.json" assert {type: "json"}
import pt from "../data/pt.json" assert {type: "json"}
import { detectLocale } from "./utils"

export default class Lang {
    #lang_selector: HTMLSelectElement
    #regex: RegExp = /{{(.*?)}}/g
    #langs: Object = { en, de, fr, es, pt }
    #lang: string
    #text: Object

    constructor() {
        this.setLang()
        this.generateHtml()
        this.setSelectedLang()
    }

    setLang(): void {
        this.#lang = detectLocale(Object.keys(this.#langs), "en")
        this.#text = this.#langs[this.#lang.substring(0, 2)]
    }

    generateHtml(): void {
        const htmlContent = document.documentElement.innerHTML
        const updatedContent = htmlContent.replace(this.#regex, (match, variable) => {
            const value = this.#text[variable.trim()]
            return value !== undefined ? value : match
        })
        document.documentElement.innerHTML = updatedContent
    }

    setSelectedLang(): void {
        this.#lang_selector = document.forms["changeLang"].elements["lang"]
        const index: number = [...this.#lang_selector.options].findIndex(o => o.value === this.#lang)
        this.#lang_selector.options[index].selected = true
        document.documentElement.lang = this.#lang
    }
}
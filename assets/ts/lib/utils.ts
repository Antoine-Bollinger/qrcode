export const isValidUrl = (url: string) => {
    try {
        new URL(url)
        return true
    } catch (_) {
        return false
    }
}

export const detectLocale = (locales: string[], defaultLocale: string): string => {
    const urlParams = new URLSearchParams(window.location.search)
    const localeParam: string | null = urlParams.get("lang")
    if (localeParam && locales.includes(localeParam)) return localeParam

    const browserLang: string = navigator.language.substring(0, 2)
    if (locales.includes(browserLang)) return browserLang

    return defaultLocale
}
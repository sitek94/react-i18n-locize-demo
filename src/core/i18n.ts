/**
 * @fileoverview i18n initialization
 *
 * 🚓 Keys Naming Convention
 *
 * - camelCase should be used for keys, so that they are distinguishable from plurals
 *   - e.g. "helloWorld", "column1", "column2"
 * - use full words: "description" instead of "desc"
 */

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-locize-backend'
import LastUsed from 'locize-lastused'

const isProduction = import.meta.env.PROD

const locizeOptions = {
  projectId: import.meta.env.VITE_LOCIZE_PROJECT_ID as string,
  apiKey: import.meta.env.VITE_LOCIZE_API_KEY as string,
}

export function initI18n() {
  if (!isProduction) {
    i18n.use(LastUsed)
  }

  i18n
    // Locize Backend
    // https://docs.locize.com/
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)

    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: !isProduction,
      fallbackLng: 'en',
      ns: ['main', 'common', 'glossary'],
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      saveMissing: true,
      backend: locizeOptions,

      locizeLastUsed: {
        ...locizeOptions,

        // debounce interval to send data in milliseconds
        debounceSubmit: 90000,

        // hostnames that are allowed to send last used data
        // please keep those to your local system, staging, test servers (not production)
        allowedHosts: ['localhost'],
      },
    })
}

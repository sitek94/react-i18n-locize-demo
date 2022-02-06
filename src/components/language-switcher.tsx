import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { defaultLocale } from 'core/locale'
import { enUS, es, pl } from 'date-fns/esm/locale'

const languages = {
  en: {
    nativeName: '🇺🇲 English',
    locale: enUS,
  },
  es: {
    nativeName: '🇪🇸 Español',
    locale: es,
  },
  pl: {
    nativeName: '🇵🇱 Polski',
    locale: pl,
  },
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  React.useEffect(() => {
    // In official docs this method is used to get all the languages, and then
    // use them to render the possible options. I'm using it only to check if
    // the languages from locize match the languages that the app supports.
    i18n.services.backendConnector.backend.getLanguages(
      (error: unknown, response: Record<string, unknown>) => {
        console.log(response)
        if (error) {
          console.log(error)
          return
        }

        for (const language in response) {
          if (!(language in languages)) {
            console.error(`Language ${language} is not supported`)
          }
        }
      }
    )
  }, [i18n])

  return (
    <div className="language-switcher">
      {Object.entries(languages).map(([language, { nativeName, locale }]) => {
        const isSelected = language === i18n.resolvedLanguage

        return (
          <button
            type="button"
            key={language}
            aria-selected={isSelected}
            disabled={isSelected}
            className={isSelected ? 'selected' : ''}
            onClick={() => {
              i18n.changeLanguage(language)
              defaultLocale.set(locale)
            }}
          >
            {nativeName}
          </button>
        )
      })}
    </div>
  )
}

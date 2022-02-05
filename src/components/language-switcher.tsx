import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { defaultLocale } from 'core/locale'
import { enUS, es, pl } from 'date-fns/esm/locale'

const languages = {
  en: {
    nativeName: '🇺🇲 English',
    locale: enUS,
  },
  pl: {
    nativeName: '🇵🇱 Polski',
    locale: pl,
  },
  es: {
    nativeName: '🇪🇸 Español',
    locale: es,
  }
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="language-switcher">
      {Object.entries(languages).map(([language, { nativeName, locale }]) => {
        const isSelected = language === i18n.resolvedLanguage
        console.log({ language, resolved: i18n.resolvedLanguage })
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

import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Example, Section } from 'components/lib'

const errorCodes = [400, 401, 403, 404, 500, 503, 504, 999]

export function MultipleFallbackKeys() {
  const { t } = useTranslation()
  const [errorIndex, setErrorIndex] = React.useState<number>(0)

  const errorCode = errorCodes[errorIndex]

  return (
    <Section title={t('multipleFallbackKeys.title')}>
      <Example>
        <span style={{ fontSize: '2rem', marginRight: '0.5rem' }}>
          {errorCode}
        </span>
        <span>
          {t([`common:error.${errorCode}`, 'common:error.unspecific'])}
        </span>
      </Example>
      <button
        onClick={() => setErrorIndex((errorIndex + 1) % errorCodes.length)}
      >
        <span
          role="image"
          aria-label={t('multipleFallbackKeys.button.image')}
          style={{ marginRight: '0.5rem' }}
        >
          💣
        </span>
        {t('multipleFallbackKeys.button.text')}
      </button>
      <p>{t('multipleFallbackKeys.description')}</p>
      <Example>
        {t('multipleFallbackKeys.example', {
          errorCode,
          message: t([`common:error.${errorCode}`, 'common:error.unspecific']),
        })}
      </Example>
    </Section>
  )
}

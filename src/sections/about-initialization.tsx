import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { Section } from 'components/lib'

export function AboutInitialization() {
  const { t } = useTranslation()

  return (
    <Section title={t('about_initialization.title')}>
      <p>
        <Trans i18nKey="about_initialization.description_1">
          i18n is initialized in <code>src/i18n.ts</code> file.
        </Trans>
      </p>
      <a
        href="https://www.i18next.com/"
        target="_blank"
        rel="noreferrer noopener"
      >
        {t('about_initialization.description_2')}
      </a>
      <p>{t('about_initialization.webhook_test')}</p>
    </Section>
  )
}

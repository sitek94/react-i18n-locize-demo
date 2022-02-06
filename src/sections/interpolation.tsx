import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Example, Section } from 'components/lib'

export function Interpolation() {
  const { t } = useTranslation()
  const [name, setName] = React.useState('Pickle Rick')

  return (
    <Section title={t('interpolation.title')}>
      <p>{t('interpolation.description')}</p>
      <Example>{t('interpolation.example', { name })}</Example>
      <label>
        <input
          type="text"
          className="input"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        {t('interpolation.inputLabel')}
      </label>
    </Section>
  )
}

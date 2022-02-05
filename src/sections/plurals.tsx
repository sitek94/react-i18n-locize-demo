import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Example, Section } from 'components/lib'

export function Plurals() {
  const [count, setCount] = React.useState(0)
  const [input, setInput] = React.useState('')

  const { t } = useTranslation()

  // Update count whenever input changes and is not an empty string
  React.useEffect(() => {
    if (input) {
      setCount(Number(input))
    }
  }, [input])

  return (
    <Section title={t('plurals.title')}>
      <p>{t('plurals.description')}</p>
      <Example>
        <code>count === {count}</code>
        <span style={{ marginLeft: '1rem' }}>
          {t('plurals.example', { count })}
        </span>
      </Example>
      <input
        type="text"
        className="input"
        value={input}
        placeholder={String(count)}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </Section>
  )
}

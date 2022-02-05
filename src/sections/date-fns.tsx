import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { subMinutes } from 'date-fns'

import { Section } from 'components/lib'
import {
  format,
  formatDistance,
  formatDistanceStrict,
  formatRelative,
} from 'utils/format'

export function DateFns() {
  const { t } = useTranslation()
  const [count, setCount] = React.useState(0)
  const [speed, setSpeed] = React.useState(1)
  const [stopped, setStopped] = React.useState(true)

  const intervalMs = 1000 / speed

  function reset() {
    setCount(0)
    setSpeed(1)
  }

  React.useEffect(() => {
    if (stopped) {
      return
    }
    const intervalId = setInterval(() => {
      setCount(count + 1)
    }, intervalMs)
    return () => clearInterval(intervalId)
  }, [intervalMs, stopped, count, setCount])

  const now = new Date()
  const past = subMinutes(now, count)

  return (
    <Section title={t('date-fns.title')} className="date-fns">
      <pre>
        <code>
          now = new Date() <br />
          past = subMinutes(now, {count})
        </code>
      </pre>

      <table>
        <tbody>
          <tr>
            <th>{`format(past, 'PPP')`}</th>
            <td>{format(past, 'PPP')}</td>
          </tr>
          <tr>
            <th>{`formatDistance(past, now)`}</th>
            <td>{formatDistance(past, now)}</td>
          </tr>
          <tr>
            <th>{`formatDistanceStrict(past, now)`}</th>
            <td>{formatDistanceStrict(past, now)}</td>
          </tr>
          <tr>
            <th>{`formatRelative(past, now)`}</th>
            <td>{formatRelative(past, now)}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => setStopped(!stopped)}>
        {stopped ? t('common:start') : t('common:stop')}
      </button>
      <label className="range-field">
        <span>{t('common:speed')}</span>
        <input
          type="range"
          min={0}
          max={1000}
          value={speed}
          onChange={e => setSpeed(Number(e.target.value))}
        />
      </label>
      <button onClick={reset}>{t('common:reset')}</button>
    </Section>
  )
}

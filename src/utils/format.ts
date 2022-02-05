/**
 * [date-fns i18n usage](https://date-fns.org/v2.28.0/docs/I18n#usage)
 */

import { defaultLocale } from 'core/locale'
import * as fns from 'date-fns'

/**
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * [Patterns](https://date-fns.org/v2.28.0/docs/format)
 */
export function format(...args: Parameters<typeof fns.format>) {
  const [date, formatStr, options] = args
  const locale = defaultLocale.get()

  return fns.format(date, formatStr, { locale, ...options })
}

/**
 * Return the distance between the given dates in words.
 */
export function formatDistance(...args: Parameters<typeof fns.formatDistance>) {
  const [date, baseDate, options] = args
  const locale = defaultLocale.get()

  return fns.formatDistance(date, baseDate, { locale, ...options })
}

/**
 * Return the distance between the given dates in words, using strict units. This is like formatDistance,
 * but does not use helpers like 'almost', 'over', 'less than' and the like.
 */
export function formatDistanceStrict(
  ...args: Parameters<typeof fns.formatDistance>
) {
  const [date, baseDate, options] = args
  const locale = defaultLocale.get()

  return fns.formatDistanceStrict(date, baseDate, { locale, ...options })
}

/**
 * Represent the date in words relative to the given base date.
 */
export function formatRelative(...args: Parameters<typeof fns.formatRelative>) {
  const [date, baseDate, options] = args
  const locale = defaultLocale.get()

  return fns.formatRelative(date, baseDate, { locale, ...options })
}

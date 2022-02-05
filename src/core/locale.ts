/**
 * Default Locale
 *
 * I'm not sure if this solution is 100% legit, because in date-fns docs,
 * they set localeId on the window object:
 * ```
 * window.__localeId__ = 'en'
 * ```
 * react-datepicker builds on top of that, and even exposes helpers to
 * set and get locale:
 *
 * [react-datepicker/date_utils.js](https://github.com/Hacker0x01/react-datepicker/blob/master/src/date_utils.js#L348)
 *
 * But quite frankly I don't know why it should be done that way. So, I'm going
 * to start with this solution, see if it works, and if it beats me, we'll see 🙈
 *
 * Anyway, this implementation is based on this PR:
 * [date-fns/pull/2816](https://github.com/date-fns/date-fns/pull/2816/files)
 */

import type { Locale } from 'date-fns'
import enUS from 'date-fns/esm/locale/en-US'

let __defaultLocale__ = enUS

export const defaultLocale = {
  get() {
    return __defaultLocale__
  },
  set(locale: Locale) {
    __defaultLocale__ = locale
  },
}

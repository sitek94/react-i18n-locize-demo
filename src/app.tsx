import * as React from 'react'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from 'components/language-switcher'
import { Header, Main, Navbar } from 'components/lib'
import { AboutInitialization } from 'sections/about-initialization'
import { DateFns } from 'sections/date-fns'
import { Interpolation } from 'sections/interpolation'
import { MultipleFallbackKeys } from 'sections/multiple-fallback-keys'
import { Plurals } from 'sections/plurals'

export function App() {
  const { t } = useTranslation()

  return (
    <>
      <Header>
        <h1>{t('app_title')} ⚗️</h1>
      </Header>
      <Navbar>
        <LanguageSwitcher />
      </Navbar>
      <Main>
        <AboutInitialization />
        <Plurals />
        <Interpolation />
        <MultipleFallbackKeys />
        <DateFns />
      </Main>
    </>
  )
}

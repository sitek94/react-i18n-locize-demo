import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { initI18n } from 'core/i18n'

import { OverlaySpinner } from 'components/spinner'

import { App } from './app'

initI18n()

ReactDOM.render(
  <React.Suspense fallback={<OverlaySpinner />}>
    <App />
  </React.Suspense>,
  document.getElementById('root')
)

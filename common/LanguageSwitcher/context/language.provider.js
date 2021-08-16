import React, { useReducer, useEffect } from 'react'
import LanguageContext from './language.context'
import languageReducer, { initialState } from './language.reducer'
import { addLocaleData, IntlProvider } from 'react-intl'
import pt from 'react-intl/locale-data/pt'
import en from 'react-intl/locale-data/en'

import { InjectRTL } from '../rtl'
addLocaleData([...pt, ...en])

const LanguageProvider = ({ children, messages }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState)
  const toggleLanguage = lang => {
    dispatch({ type: 'CURRENT_LANGUAGE', payload: lang })
    localStorage.setItem('lang', lang)
  }
  useEffect(() => {
    const localLang = localStorage.getItem('lang')
    if (localLang) {
      toggleLanguage(localLang)
    } else {
      toggleLanguage(navigator.language.split('-')[0])
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ state, toggleLanguage, dispatch }}>
      <IntlProvider locale={state.lang} messages={messages[state.lang]}>
        <InjectRTL lang={state.lang}>{children}</InjectRTL>
      </IntlProvider>
    </LanguageContext.Provider>
  )
}
export default LanguageProvider

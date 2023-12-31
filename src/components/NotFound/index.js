import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {NfCon, NfImg, NfHeading, NfDesc} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext>
    {value => {
      const {isDarkTheme} = value
      const textHeading = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const textDesc = isDarkTheme ? '#e2e8f0' : '#475569'
      const NfImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <NavigationBar />
          <NfCon bgColor={bgColor}>
            <NfImg src={NfImage} alt="Failure view" />
            <NfHeading textHeading={textHeading}>Page Not Found</NfHeading>
            <NfDesc textDesc={textDesc}>
              We are sorry the page you requested could not be found.
            </NfDesc>
          </NfCon>
        </>
      )
    }}
  </ThemeAndVideoContext>
)

export default NotFound

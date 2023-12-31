import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  FailureCon,
  FailureImg,
  FailureHeading,
  FailureDesc,
  FailureBtn,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext>
      {value => {
        const {isDarkTheme} = value
        const textHeading = isDarkTheme ? '#606060' : '#231f20'
        const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
        const textDesc = isDarkTheme ? '#606060' : '#f9f9f9'
        const FailureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureCon bgColor={bgColor}>
            <FailureImg src={FailureImage} alt="Failure view" />
            <FailureHeading textHeading={textHeading}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDesc textDesc={textDesc}>
              We are having some Trouble to complete your request.
              <br />
              Please try again
            </FailureDesc>
            <FailureBtn type="button" onClick={onClickRetry}>
              Retry
            </FailureBtn>
          </FailureCon>
        )
      }}
    </ThemeAndVideoContext>
  )
}

export default FailureView

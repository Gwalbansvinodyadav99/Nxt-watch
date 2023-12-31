import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavContainer,
  LogoLink,
  NavLogo,
  ThemeProfileLogoutCon,
  CustomThemeChangeBtn,
  CustomProfileImage,
  CustomLogOut,
  PopupLogoutCon,
  PopupDesc,
  CancelAndConfirmBtnCon,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#ffffff' : '#00306e'
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <NavContainer bgColor={bgColor}>
          <LogoLink to="/">
            <NavLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ThemeProfileLogoutCon>
            <CustomThemeChangeBtn
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </CustomThemeChangeBtn>
            <CustomProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <CustomLogOut type="button" bgColor={bgColor} color={color}>
                  Logout
                </CustomLogOut>
              }
              className="popup-content"
            >
              {close => (
                <PopupLogoutCon bgColor={bgColor}>
                  <PopupDesc>Are you sure, you want to logout</PopupDesc>
                  <CancelAndConfirmBtnCon>
                    <CancelButton
                      type="button"
                      onClick={() => close()}
                      data-testid="closeButton"
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </CancelAndConfirmBtnCon>
                </PopupLogoutCon>
              )}
            </Popup>
          </ThemeProfileLogoutCon>
        </NavContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)

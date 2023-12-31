import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavCon,
  NavigationBarCon,
  Container,
  ElementsCon,
  NavLink,
  NavListCon,
  BottomCon,
  BottomDesc,
  IconImage,
  BottomHeading,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const color = isDarkTheme ? '#f9f9f9' : '#231f20'
        const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickTabHome = () => {
          changeTab('Home')
        }

        const onClickTabGaming = () => {
          changeTab('Gaming')
        }

        const onClickTabTrending = () => {
          changeTab('Trending')
        }

        const onClickTabSaved = () => {
          changeTab('Saved')
        }

        return (
          <NavCon>
            <NavigationBarCon bgColor={bgColor}>
              <Container>
                <NavLink to="/">
                  <NavListCon
                    key="home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickTabHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                  </NavListCon>
                </NavLink>
                <NavLink to="/trending">
                  <NavListCon
                    key="home"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTabTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                  </NavListCon>
                </NavLink>
                <NavLink to="/gaming">
                  <NavListCon
                    key="home"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickTabGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                  </NavListCon>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavListCon
                    key="home"
                    bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                    onClick={onClickTabSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                  </NavListCon>
                </NavLink>
              </Container>
              <BottomCon>
                <BottomHeading color={color}>ContactUs</BottomHeading>
                <ElementsCon>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                    alt="twitter logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ElementsCon>
                <BottomDesc color={color}>
                  Enjoy! Now to see your channels and recommendations
                </BottomDesc>
              </BottomCon>
            </NavigationBarCon>
          </NavCon>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}

export default NavigationBar

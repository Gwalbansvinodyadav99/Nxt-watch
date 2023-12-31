import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import GamingCard from '../GamingCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  GamingCon,
  GamingHeaderCon,
  LogoCon,
  GamingHeaderName,
  LoadingView,
  GamingVideosCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.initial,
    })
    const jwtToken = Cookies.get('jwt_token')
    const GamingApi = 'https://apis.ccbp.in/videos/gaming'
    const GamingOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(GamingApi, GamingOptions)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" width="50" height="50" />
    </LoadingView>
  )

  onRetry = () => {
    this.getGamingVideos()
  }

  getFailureView = () => <FailureView onRetry={this.onRetry} />

  getGamingView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosCon>
        {gamingVideos.map(eachVideo => (
          <GamingCard GamingVideo={eachVideo} key={eachVideo.id} />
        ))}
      </GamingVideosCon>
    )
  }

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.getGamingView()
      case apiStatusConstants.inProgress:
        return this.getLoadingView()
      case apiStatusConstants.failure:
        return this.getFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <ThemeAndVideoContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
            const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
            return (
              <div>
                <Header />
                <NavigationBar />
                <GamingCon bgColor={bgColor} data-testid="gaming">
                  <GamingHeaderCon>
                    <LogoCon bgColor={bgColor}>
                      <SiYoutubegaming size={30} color="#ff0000" />
                    </LogoCon>
                    <GamingHeaderName textColor={textColor}>
                      Gaming
                    </GamingHeaderName>
                  </GamingHeaderCon>
                  {this.renderGamingVideos()}
                </GamingCon>
              </div>
            )
          }}
        </ThemeAndVideoContext.Consumer>
      </>
    )
  }
}

export default Gaming

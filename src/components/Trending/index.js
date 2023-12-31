import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import TrendingCard from '../TrendingCard'
import FailureView from '../FailureView'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import NavigationBar from '../NavigationBar'

import {
  LoadingView,
  TrendingVideosCon,
  TrendingCon,
  TrendingHeaderCon,
  LogoCon,
  TrendingHeaderName,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.initial,
    })
    const jwtToken = Cookies.get('jwt_token')
    const TrendingApi = 'https://apis.ccbp.in/videos/trending'
    const TrendingOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(TrendingApi, TrendingOptions)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        trendingVideos: updatedData,
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
    this.getTrendingVideos()
  }

  getFailureView = () => <FailureView onRetry={this.onRetry} />

  getTrendingView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideosCon>
        {trendingVideos.map(eachVideo => (
          <TrendingCard TrendingVideo={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideosCon>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.getTrendingView()
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
                <TrendingCon bgColor={bgColor} data-testid="trending">
                  <TrendingHeaderCon>
                    <LogoCon bgColor={bgColor}>
                      <HiFire size={30} color="#ff0000" />
                    </LogoCon>
                    <TrendingHeaderName textColor={textColor}>
                      Trending
                    </TrendingHeaderName>
                  </TrendingHeaderCon>
                  {this.renderTrendingVideos()}
                </TrendingCon>
              </div>
            )
          }}
        </ThemeAndVideoContext.Consumer>
      </>
    )
  }
}
export default Trending

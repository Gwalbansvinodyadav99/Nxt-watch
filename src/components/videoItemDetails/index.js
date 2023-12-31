/* eslint-disable import/no-unresolved */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import PlayVideoView from '../PlayVideoView'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {LoadingView, VideosDetailsViewCon} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    videoDetails: [],
    // eslint-disable-next-line react/no-unused-state
    isLiked: false,
    // eslint-disable-next-line react/no-unused-state
    isDisliked: false,
    // eslint-disable-next-line react/no-unused-state
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  FormattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
  })

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const apiOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, apiOptions)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = this.FormattedData(fetchedData)
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        videoDetails: updatedData,
        // eslint-disable-next-line react/no-unused-state
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
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

  clickedLiked = () => {
    this.setState(prev => ({
      isLiked: !prev.isLiked,
      isDisLiked: false,
    }))
  }

  clickedDisLiked = () => {
    this.setState(prev => ({
      isDisLiked: !prev.isDisLiked,
      isLiked: false,
    }))
  }

  getFailureView = () => <FailureView onRetry={this.onRetry} />

  getVideoItemDetails = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state
    return (
      <PlayVideoView
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
        clickSaved={this.clickSaved}
      />
    )
  }

  renderVideoDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.getVideoItemDetails()
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
            const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
            return (
              <>
                <Header />
                <NavigationBar />
                <VideosDetailsViewCon
                  data-testid="videoItemDetails"
                  bgColor={bgColor}
                >
                  {this.renderVideoDetails()}
                </VideosDetailsViewCon>
              </>
            )
          }}
        </ThemeAndVideoContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails

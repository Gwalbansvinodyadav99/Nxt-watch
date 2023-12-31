import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideos from '../HomeVideos'

import {
  HomeContainer,
  BannerCon,
  LeftBannerCon,
  LogoImage,
  RemoveBtn,
  BannerHeading,
  CloseCon,
  GetKnowBtn,
  SearchBarCon,
  SearchBar,
  LoadingView,
  SearchIconBtn,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerDisplay: 'flex',

    apiStatus: apiStatusConstants.initial,
    homeVideos: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        name: eachItem.channel.name,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,

        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onGetLoadingView = () => (
    <LoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingView>
  )

  onGetFailureView = () => <FailureView onRetry={this.onRetry} />

  onGetVideosView = () => {
    const {homeVideos} = this.state
    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  onClickCloseBanner = () => {
    this.setState({bannerDisplay: 'none'})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos())
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchInput = () => {
    this.getHomeVideos()
  }

  renderHomeVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.onGetVideosView()
      case apiStatusConstants.failure:
        return this.onGetFailureView()
      case apiStatusConstants.inProgress:
        return this.onGetLoadingView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, searchInput} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'
          return (
            <>
              <Header />
              <NavigationBar />
              <HomeContainer bgColor={bgColor} data-testid="home">
                <BannerCon display={display}>
                  <LeftBannerCon>
                    <LogoImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                    <BannerHeading>
                      Buy Nxt Watch Premium prepaid plans with <br /> UpI
                    </BannerHeading>
                    <GetKnowBtn>GetKnowBtn</GetKnowBtn>
                  </LeftBannerCon>
                  <CloseCon>
                    <RemoveBtn type="button" onClick={this.onClickCloseBanner}>
                      <AiOutlineClose size={25} />
                    </RemoveBtn>
                  </CloseCon>
                </BannerCon>
                <SearchBarCon>
                  <SearchBar
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    onKeyDown={this.onEnterInput}
                    bgColor={bgColor}
                    color={textColor}
                  />
                  <SearchIconBtn type="button" onClick={this.onSearchInput}>
                    <AiOutlineSearch size={20} />
                  </SearchIconBtn>
                </SearchBarCon>
                {this.renderHomeVideos()}
              </HomeContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home

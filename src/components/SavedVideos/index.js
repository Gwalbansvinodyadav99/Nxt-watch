import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import TrendingCard from '../TrendingCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  SavedCon,
  SavedHeaderCon,
  LogoCon,
  SavedHeaderName,
  SavedVideosList,
  NoSavedViewCon,
  NoSavedImg,
  NoSavedHeading,
  NoSavedDesc,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
      return (
        <div>
          <Header />
          <NavigationBar />
          <SavedCon bgColor={bgColor} data-testid="savedVideos">
            <SavedHeaderCon>
              <LogoCon bgColor={bgColor}>
                <HiFire size={30} color="#ff0000" />
              </LogoCon>
              <SavedHeaderName textColor={textColor}>
                Saved Videos
              </SavedHeaderName>
            </SavedHeaderCon>
            {savedVideos > 0 ? (
              <SavedVideosList>
                {savedVideos.map(eachVideo => (
                  <TrendingCard videoDetails={eachVideo} key={eachVideo.id} />
                ))}
              </SavedVideosList>
            ) : (
              <NoSavedViewCon bgColor={bgColor}>
                <NoSavedImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedHeading color={headingColor}>
                  No saved videos found
                </NoSavedHeading>
                <NoSavedDesc color={noteColor}>
                  You can save your videos while watching them
                </NoSavedDesc>
              </NoSavedViewCon>
            )}
          </SavedCon>
        </div>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos

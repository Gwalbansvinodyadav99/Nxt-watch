import HomeCard from '../HomeCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  VideoCardList,
  NoVideosView,
  NoVideoImage,
  NoVideoHeading,
  NoVideoDesc,
  NoVideoRetryBtn,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const VideosCount = homeVideos.length
  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'
        return VideosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
            <NoVideoHeading headingColor={headingColor}>
              No Search results found
            </NoVideoHeading>

            <NoVideoDesc noteColor={noteColor}>
              Try different key words or remove search filter
            </NoVideoDesc>
            <NoVideoRetryBtn type="button" onClick={onClickRetry}>
              Retry
            </NoVideoRetryBtn>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos

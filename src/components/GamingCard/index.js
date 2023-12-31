import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NavLink,
  GamingCardCon,
  GamingCardImg,
  GamingCardTitle,
  GamingCardViewCount,
} from './styledComponents'

const GamingCard = props => {
  const {GamingVideo} = props
  const {id, title, thumbnailUrl, viewCount} = GamingVideo

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const noteColor = isDarkTheme ? '#cccccc' : '#424242'
        const bgColor = isDarkTheme ? '#000000' : '#ffffff'
        return (
          <NavLink to={`/videos/${id}`}>
            <GamingCardCon bgColor={bgColor}>
              <GamingCardImg src={thumbnailUrl} alt="thumbnail image" />
              <GamingCardTitle textColor={textColor}>{title}</GamingCardTitle>
              <GamingCardViewCount noteColor={noteColor}>
                {viewCount} Watching Worldwide
              </GamingCardViewCount>
            </GamingCardCon>
          </NavLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GamingCard

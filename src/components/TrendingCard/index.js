import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NavLink,
  TrendingCardCon,
  TrendingCardImg,
  TrendingCardTitle,
  TrendingCardViewCount,
  TrendingProfile,
  TrendingDetailsCon,
  TrendingName,
  Dot,
} from './styledComponents'

const TrendingCard = props => {
  const {TrendingVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = TrendingVideo

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <NavLink to={`/videos/${id}`}>
            <TrendingCardCon>
              <TrendingCardImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendingProfile src={profileImageUrl} alt="channel logo" />
              <TrendingDetailsCon>
                <TrendingCardTitle textColor={textColor}>
                  {title}
                </TrendingCardTitle>
                <TrendingName textColor={textColor}>{name}</TrendingName>
                <div>
                  <TrendingCardViewCount textColor={textColor}>
                    {viewCount} views
                  </TrendingCardViewCount>
                  <Dot textColor={textColor}>{publishedAt} years ago</Dot>
                </div>
              </TrendingDetailsCon>
            </TrendingCardCon>
          </NavLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default TrendingCard

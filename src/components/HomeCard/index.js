import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavLink,
  HomeCardCon,
  CardImage,
  CardDetailsCon,
  CardProfileImg,
  CardDetails,
  CardTitle,
  CardName,
  CardViewsAndAgeCon,
} from './styledComponents'

const HomeCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    viewCount,
    publishedAt,
    profileImageUrl,
  } = video
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <NavLink to={`/videos/${id}`}>
            <HomeCardCon>
              <CardImage src={thumbnailUrl} alt="video thumbnail" />
              <CardDetailsCon>
                <CardProfileImg src={profileImageUrl} alt="channel logo" />
                <CardDetails>
                  <CardTitle textColor={textColor}>{title}</CardTitle>
                  <CardName textColor={textColor}>{name}</CardName>
                  <CardViewsAndAgeCon>
                    <CardName textColor={textColor}>{viewCount} Views</CardName>
                    <CardName textColor={textColor}>
                      {publishedAt} years ago
                    </CardName>
                  </CardViewsAndAgeCon>
                </CardDetails>
              </CardDetailsCon>
            </HomeCardCon>
          </NavLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeCard

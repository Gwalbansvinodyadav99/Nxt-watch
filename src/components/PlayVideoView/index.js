import ReactPlayer from 'react-player'
import {BiListPlus} from 'react-icons/bi'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideosTitle,
  PlayVideosStatusCon,
  PlayVideoStatus,
  PlayVideosDot,
  PlaySocialButtonsCon,
  BtnCon,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelCon,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  return (
    <>
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo, savedVideos} = value
          const textColor = isDarkTheme ? '#64748b' : '#231f20'
          let isSaved
          const index = savedVideos.findIndex(
            eachVideo => eachVideo.id === videoDetails.id,
          )
          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }
          const saveIconColor = isSaved ? '#2563eb' : textColor

          const onClickSave = () => {
            addVideo(videoDetails)
          }

          const onClickLike = () => {
            clickLiked()
          }

          const onClickDislike = () => {
            clickDisLiked()
          }

          return (
            <VideoPlayer>
              <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
              <PlayVideosTitle color={textColor}>
                {videoDetails.title}
              </PlayVideosTitle>
              <PlayVideosStatusCon>
                <PlayVideoStatus color={textColor}>
                  {videoDetails.viewsCount}{' '}
                  <PlayVideosDot>&#8226;</PlayVideosDot>
                  {videoDetails.publishedAt}
                </PlayVideoStatus>
                <PlaySocialButtonsCon>
                  <BtnCon>
                    <SocialButton
                      type="button"
                      color={isLiked ? '#2563eb' : '#64748b'}
                      onClick={onClickLike}
                    >
                      <AiOutlineLike size={25} />
                      <ButtonText>Like</ButtonText>
                    </SocialButton>
                  </BtnCon>
                  <BtnCon>
                    <SocialButton
                      type="button"
                      color={isDisLiked ? '#2563eb' : '#64748b'}
                      onClick={onClickDislike}
                    >
                      <AiOutlineDislike size={25} />
                      <ButtonText>DisLike</ButtonText>
                    </SocialButton>
                  </BtnCon>
                  <BtnCon>
                    <SocialButton
                      type="button"
                      color={saveIconColor}
                      onClick={onClickSave}
                    >
                      <BiListPlus size={25} />
                      <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                    </SocialButton>
                  </BtnCon>
                </PlaySocialButtonsCon>
              </PlayVideosStatusCon>
              <HrLine />
              <ChannelCon>
                <ChannelImage
                  src={videoDetails.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelInfo>
                  <ChannelName color={textColor}>
                    {videoDetails.name}
                  </ChannelName>

                  <ChannelSubscribers color={textColor}>
                    {videoDetails.subscriberCount} subscribers
                  </ChannelSubscribers>
                  <ChannelDescription color={textColor}>
                    {videoDetails.description}
                  </ChannelDescription>
                </ChannelInfo>
              </ChannelCon>
            </VideoPlayer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    </>
  )
}

export default PlayVideoView

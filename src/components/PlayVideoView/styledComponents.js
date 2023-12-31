import styled from 'styled-components'

export const VideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: 30px;
`
export const PlayVideosTitle = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 22px;
`
export const PlayVideosStatusCon = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PlayVideoStatus = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: 'Roboto';
`
export const PlayVideosDot = styled.p`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const PlaySocialButtonsCon = styled.div`
  display: flex;
  justify-content: space-around;
`
export const BtnCon = styled.div`
  display: flex;
  max-width: 120px;
  align-items: center;
`
export const SocialButton = styled.button`
  width: 90px;
  height: 36px;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 5px;
`
export const ButtonText = styled.span`
  margin-left: 8px;
  color: #2563eb;
  margin-bottom: 10px;
`
export const HrLine = styled.hr`
  width: 100%;
  border: 1px solid '#909090';
`
export const ChannelCon = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
`
export const ChannelImage = styled.img`
  width: 70px;
  height: 33px;
  border-radius: 90%;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.h1`
  font-size: 18px;
  color: ${props => props.color};
`
export const ChannelSubscribers = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`
export const ChannelDescription = styled.h1`
  font-size: 20px;
  color: ${props => props.color};
  font-weight: 600;
`

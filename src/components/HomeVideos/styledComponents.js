import styled from 'styled-components'

export const VideoCardList = styled.ul`
  flex-wrap: wrap;
  max-width: 80%;
  display: flex;
`
export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideoImage = styled.img`
  width: 50%;
  margin-bottom: 10px;
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.headingColor};
  padding-bottom: 10px;
`
export const NoVideoDesc = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  padding-bottom: 10px;
`
export const NoVideoRetryBtn = styled.button`
  width: 80px;
  height: 36px;
  background-color: #4f46e5;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto';
  border-radius: 5px;
  margin-top: 15px;
`

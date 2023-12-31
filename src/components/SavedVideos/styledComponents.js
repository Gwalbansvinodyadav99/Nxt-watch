import styled from 'styled-components'

export const SavedCon = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const SavedHeaderCon = styled.div`
  display: flex;
`
export const LogoCon = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  align-items: center;
`
export const SavedHeaderName = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
`
export const SavedVideosList = styled.ul`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin: 5px;
`
export const NoSavedViewCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color : ${props => props.bgColor}
  justify-content: center;
  min-height: 100vh;
`
export const NoSavedImg = styled.img`
  width: 50%;
  margin-bottom: 20px;
`
export const NoSavedHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${props => props.color};
`
export const NoSavedDesc = styled.p`
color = ${props => props.color};
font-family: 'Roboto';
padding-top: 10px;
font-size: 20px;
padding-bottom: 10px;
`

import styled from 'styled-components'

export const NfCon = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NfImg = styled.img`
  width: 40%;
  margin-bottom: 15px;
`
export const NfHeading = styled.h1`
  font-family: 'Roboto';
  color : ${props => props.textHeading}
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 15px;
`

export const NfDesc = styled.p`
  font-family: 'Roboto';
  color : ${props => props.textDesc}
  font-size: 16px;
  padding-bottom: 15px;
`

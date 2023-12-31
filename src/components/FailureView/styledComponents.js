import styled from 'styled-components'

export const FailureCon = styled.div`
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImg = styled.img`
  width: 40%;
  margin-bottom: 15px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color : ${props => props.textHeading}
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 15px;
`

export const FailureDesc = styled.p`
  font-family: 'Roboto';
  color : ${props => props.textDesc}
  font-size: 16px;
  padding-bottom: 15px;
`
export const FailureBtn = styled.button`
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

import styled from 'styled-components'

export const GamingCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  background-color: ${props => props.bgColor};
`

export const GamingHeaderCon = styled.div`
  display: flex;
`
export const LogoCon = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  align-items: center;
`
export const GamingHeaderName = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
`
export const LoadingView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GamingVideosCon = styled.ul`
  flex-wrap: wrap;
  max-width: 100%;
  display: flex;
  margin: 5px;
`

import styled from 'styled-components'

export const TrendingCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  margin-top: 60px;
  margin-bottom: 0px;
  margin-right: 60px;
  background-color: ${props => props.bgColor};
`

export const TrendingHeaderCon = styled.div`
  display: flex;
`
export const LogoCon = styled.div`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  align-items: center;
`
export const TrendingHeaderName = styled.h1`
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
export const TrendingVideosCon = styled.ul`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  margin: 5px;
`

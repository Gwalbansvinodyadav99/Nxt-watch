import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CustomInput = styled.input`
  width: 150px;
  height: 38px;
  color: #94a3b8;
  padding-left: 10px;
  border-radius: 5px;
`
export const CustomLabel = styled.label`
  color: #475569;
  padding-bottom: 3px;
`
export const CustomCheckBoxCon = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`

export const CustomButton = styled.button`
  max-width: 250px;
  min-height: 38px;
  border-radius: 5px;
  background-color: #3b82f6;
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;
`
export const CustomCheckBox = styled.input`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  align-self: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;s

`
export const UserNameAndPasswordCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const SubmitError = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  padding-top: 2px;
`

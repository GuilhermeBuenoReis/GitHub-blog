import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 54rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
  gap: 0.5rem;
  margin-bottom: 4rem;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.colors.baseInput};
    border: 1px solid ${({ theme }) => theme.colors.baseBorder};
    color: ${({ theme }) => theme.colors.baseSubtitle};
    border-radius: 6px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.baseSubtitle};
    }
  }
`

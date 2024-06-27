import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13rem;
  display: flex;
  border: none;
  background: ${({ theme }) => theme.colors.baseProfile};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -8.5rem;
`
export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;

  img {
    width: 9rem;
    height: 9rem;
    border-radius: 8px;
  }
`
export const InformationUser = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  > span {
    color: ${({ theme }) => theme.colors.baseTitle};
    font-size: ${({ theme }) => theme.fontSize[24]};
    line-height: 160%;
  }

  p {
    line-height: 160%;
  }

  > div {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        color: ${({ theme }) => theme.colors.baseSubtitle};
        line-height: 160%;
        border: none;
        background: transparent;
        transition: 0.4s;

        &:hover {
          color: ${({ theme }) => theme.colors.blue};
        }
      }
    }
  }
`
export const GithubDirect = styled.div`
  display: flex;
  position: absolute;
  align-items: baseline;
  top: 0.5rem;
  right: 0.5rem;
  gap: 0.5rem;

  button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.blue};
  }
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};

    svg {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

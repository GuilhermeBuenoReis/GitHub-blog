import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors.baseProfile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: transparent;
      border: none;

      color: ${({ theme }) => theme.colors.blue};
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize[12]};
    color: ${({ theme }) => theme.colors.baseTitle};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    li {
      gap: 0.5rem;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.baseSpan};
      line-height: 0px;

      svg {
        color: ${({ theme }) => theme.colors.baseLable};
      }
    }
  }
`

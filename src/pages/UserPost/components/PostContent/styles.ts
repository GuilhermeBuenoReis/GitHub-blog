import styled from 'styled-components'

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.blue};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme.colors.basePost};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`

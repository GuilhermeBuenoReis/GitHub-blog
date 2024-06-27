import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.basePost};
  border: 2px solid ${({ theme }) => theme.colors.basePost};
  padding: 2rem;
  transition: 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.baseLable};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.fontSize[20]};
      color: ${({ theme }) => theme.colors.baseTitle};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: ${({ theme }) => theme.fontSize[14]};
      color: ${({ theme }) => theme.colors.baseSpan};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`

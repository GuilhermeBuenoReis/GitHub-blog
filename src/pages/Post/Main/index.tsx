import { IpostProps } from '../'
import { formattedDate } from '../../../utils/formatter'
import { MainContainer } from './styles'

interface PostProps {
  post: IpostProps
}

export function MainScreen({ post }: PostProps) {
  const dateFormatted = formattedDate(post.created_at)

  return (
    <MainContainer to={`/UserPost/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{dateFormatted}</span>
      </div>
      <p>{post.body}</p>
    </MainContainer>
  )
}

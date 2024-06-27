import { FaChevronLeft, FaCalendarDay, FaComment } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { AiFillGithub } from 'react-icons/ai'
import { PostHeaderContainer } from './styles'
import { IpostProps } from '../../../Post'
import { useNavigate } from 'react-router-dom'
import { formattedDate } from '../../../../utils/formatter'

interface PostHeaderProps {
  postData: IpostProps
}

export function HeaderPost({ postData }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDateNow = formattedDate(postData.created_at)
  return (
    <PostHeaderContainer>
      <header>
        <button onClick={goBack}>
          <FaChevronLeft size={20} />
          <span>Voltar</span>
        </button>

        <button>
          <FaArrowUpRightFromSquare />
          <span>ver no github</span>
        </button>
      </header>

      <h1>{postData.title}</h1>

      <ul>
        <li>
          <AiFillGithub />
          <span>{postData.html_url}</span>
        </li>
        <li>
          <FaCalendarDay />
          <span>{formattedDateNow}</span>
        </li>
        <li>
          <FaComment />
          <span>{postData.comments}</span>
        </li>
      </ul>
    </PostHeaderContainer>
  )
}

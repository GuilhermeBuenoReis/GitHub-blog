import { useCallback, useEffect, useState } from 'react'
import { HeaderPost } from './components/PostHeader/PostHeader'
import { IpostProps } from '../Post'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { PostContent } from './components/PostContent'

export function UserPost() {
  const [postData, setPostData] = useState<IpostProps>({} as IpostProps)

  const { id } = useParams()

  const getPostDatails = useCallback(async () => {
    const response = await api.get(
      `/repos/guilhermebuenoreis/Github-blog/issues/${id}`,
    )

    setPostData(response.data)
  }, [id])

  useEffect(() => {
    getPostDatails()
  }, [getPostDatails])

  return (
    <>
      <HeaderPost postData={postData} />
      <PostContent content={postData.body} />
    </>
  )
}

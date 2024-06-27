import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SerchForm'
import { MainScreen } from './Main'
import { MainContent } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

export interface IpostProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Post() {
  const [posts, setPosts] = useState<IpostProps[]>([])

  const getPost = useCallback(async (query: string = '') => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:guilhermebuenoreis/Github-blog`,
    )

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    getPost()
  }, [getPost])

  return (
    <>
      <Profile />
      <SearchForm getPost={getPost} postLenth={posts.length} />

      <MainContent>
        {posts.map((post) => (
          <MainScreen key={post.number} post={post} />
        ))}
      </MainContent>
    </>
  )
}

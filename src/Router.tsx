import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { Post } from './pages/Post'
import { UserPost } from './pages/UserPost'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Post />} />
        <Route path="/UserPost/:id" element={<UserPost />} />
      </Route>
    </Routes>
  )
}

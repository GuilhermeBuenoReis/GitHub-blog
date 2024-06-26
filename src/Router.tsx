import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Post />} />
      </Route>
    </Routes>
  )
}

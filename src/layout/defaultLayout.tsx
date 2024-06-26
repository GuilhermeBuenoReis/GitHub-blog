import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { LayoutContainer } from './style'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  )
}

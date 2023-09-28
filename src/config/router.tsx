import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Home from '@/pages/home'
import Contact from '@/pages/contact'
import { Spinner } from '@/components/ui'
import PageLogin from '@/pages/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLogin />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

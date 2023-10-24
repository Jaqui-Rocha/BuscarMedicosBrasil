import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Home from '@/pages/home/home'
import Contact from '@/pages/contact'
import { Spinner } from '@/components/ui'
import PageLogin from '@/pages/login'
import BaseLayout from '@/pages/baseLayout'
import Profile from '@/pages/Profile'
import Dados from '@/pages/Profile/dados'
import Administradores from '@/pages/Profile/administradores'
import UsuarioCadastrado from '@/pages/usuariosCadastrados'
import Specialties from '@/pages/Specialties'
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLogin />
  },
  {
    path: '/Layout',
    element: <BaseLayout />,
    children: [
      {
        path: '/Layout',
        element: <Home />
      },
      {
        path: '1',
        element: <Profile />,
        children: [
          {
            path: '/Layout/1/Dados',
            element: <Dados />
          },
          {
            path: '/Layout/1/Administradores',
            element: <Administradores />
          }
        ]
      },
      {
        path: '2',
        element: <UsuarioCadastrado />
      },
      {
        path: '5',
        element: <Specialties />
      }
    ]
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

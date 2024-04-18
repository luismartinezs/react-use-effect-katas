import SkipToContent from '@/components/SkipToContent'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'

const routes = [
  {
    path: '/',
    label: 'App',
  },
  // new component link here
]

export default function Root() {
  const mainContentRef = useRef<HTMLElement>(null)
  return (
    <>
      <SkipToContent mainContentRef={mainContentRef} />
      <header>
        <h1 className="text-lg font-bold">React playground</h1>
        <nav className="pb-2 mb-2 border-b border-sky-500">
          <ul className="flex flex-wrap w-full space-x-2">
            {routes.map((route, idx) => (
              <li key={route.path}>
                <a href={route.path} className="whitespace-nowrap">
                  {route.label}
                </a>
                {idx < routes.length - 1 && <span className="inline-block ml-2">-</span>}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main ref={mainContentRef} tabIndex={-1}>
        <Outlet />
      </main>
    </>
  )
}

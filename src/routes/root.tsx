import SkipToContent from '@/components/SkipToContent'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'

const routes = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/sub-unsub',
    label: 'Subscribe Unsubscribe',
  },
  // new component link here
  { path: 'dependency-change-detector', label: 'Dependency change detector' },
  { path: 'web-socket-chat-client', label: 'Web socket chat client' },
]

export default function Root() {
  const mainContentRef = useRef<HTMLElement>(null)
  return (
    <>
      <SkipToContent mainContentRef={mainContentRef} />
      <header>
        <h2 className="text-lg font-bold">React useEffect Katas 🥷🏻</h2>
        <nav className="pb-2 mb-2 border-b border-sky-500">
          <ul className="flex flex-wrap w-full space-x-2">
            {routes.map((route, idx) => (
              <li key={route.path}>
                <a href={route.path} className="whitespace-nowrap">
                  {route.label}
                </a>
                {idx < routes.length - 1 && <span className="inline-block ml-2">&#x2022;</span>}
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

import SkipToContent from '@/components/SkipToContent'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom'

const routes = [
  {
    path: '/',
    label: 'Home',
  },
  // new component link here
  { path: 'complex-value', label: 'Complex value' },
  { path: 'resize-window', label: 'Resize window' },
  { path: 'window-size', label: 'Window size' },
  { path: 'websocket-chat', label: 'Websocket chat' },
  { path: 'sub-unsub', label: 'Sub unsub' },
  { path: 'planetary-data-fetcher', label: 'Planetary data fetcher' },
  { path: 'dependency-change-detector', label: 'Dependency change detector' },
]

export default function Root() {
  const mainContentRef = useRef<HTMLElement>(null)
  return (
    <>
      <SkipToContent mainContentRef={mainContentRef} />
      <header>
        <div className="flex gap-2 items-center">
          <img src="./react-katas-icon.png" alt="React Katas Icon" className="w-8 h-8" />
          <h2 className="text-lg font-bold">React useEffect Katas 🥷🏻</h2>
        </div>
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

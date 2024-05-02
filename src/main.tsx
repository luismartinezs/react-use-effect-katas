import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '@/App'
import ErrorPage from '@/error-page'
import Root from '@/routes/root'
// new component import here
import ComplexValue from './katas/ComplexValue';
import ResizeWindow from './katas/ResizeWindow';
import WindowSize from './katas/WindowSize';
import WebsocketChat from './katas/WebsocketChat';
import SubUnsub from './katas/SubUnsub';
import PlanetaryDataFetcher from './katas/PlanetaryDataFetcher';
import DependencyChangeDetector from './katas/DependencyChangeDetector';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      // new component route here
      { path: 'complex-value', element: <ComplexValue /> },
      { path: 'resize-window', element: <ResizeWindow /> },
      { path: 'window-size', element: <WindowSize /> },
      { path: 'websocket-chat', element: <WebsocketChat /> },
      { path: 'sub-unsub', element: <SubUnsub /> },
      { path: 'planetary-data-fetcher', element: <PlanetaryDataFetcher /> },
      { path: 'dependency-change-detector', element: <DependencyChangeDetector /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

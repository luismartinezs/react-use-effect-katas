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
import WebsocketChat from './katas/WebsocketChat';
import SubUnsub from './katas/SubUnsub';
import PlanetaryDataFetcher from './katas/PlanetaryDataFetcher';
import DependencyChangeDetector from './katas/DependencyChangeDetector';
import WebSocketChatClient from './katas/WebSocketChatClient';

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

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
import SubscribeUnsubscribe from '@/katas/SubscribeUnsubscribe'
// new component import here
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
      { path: 'planetary-data-fetcher', element: <PlanetaryDataFetcher /> },
      { path: 'dependency-change-detector', element: <DependencyChangeDetector /> },
      { path: 'web-socket-chat-client', element: <WebSocketChatClient /> },
      {
        path: '/sub-unsub',
        element: <SubscribeUnsubscribe />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

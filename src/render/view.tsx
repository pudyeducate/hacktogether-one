import ViewModel from '@pages/ViewModel'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactTogether } from 'react-together'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactTogether
      sessionParams={{
        appId: import.meta.env['VITE_APP_ID'],
        apiKey: import.meta.env['VITE_API_KEY'],
        name: 'T6cU5V',
        password: 'hszWXh',
      }}
    >
      {/* <ViewModel /> */}
    </ReactTogether>
  </React.StrictMode>
)

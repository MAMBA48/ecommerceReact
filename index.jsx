import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './theme/GlobalStyle'
import { Layout } from './components/layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
      <Layout>
        
      </Layout>
  </React.StrictMode>,
)

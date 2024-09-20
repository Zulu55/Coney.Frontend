import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './utils/i18n'  // Importa la configuración de i18n para manejar los idiomas

// Crea la raíz de React en el elemento con ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'))

// Renderiza la aplicación usando el nuevo método de React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

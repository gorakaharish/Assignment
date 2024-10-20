import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Usercontextprovider from './context/Usercontextprovider.jsx'

createRoot(document.getElementById('root')).render(
<Usercontextprovider>
    <App />
    </Usercontextprovider>
)

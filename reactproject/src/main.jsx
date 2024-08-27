
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ArticleProvider } from './Article.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ArticleProvider>
    <App />
    </ArticleProvider>
  ,
)

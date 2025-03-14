import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Store from './store/index.ts'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={Store}>
        <App />
    </Provider>
)
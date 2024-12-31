import {StrictMode} from 'react'
import {renderToString} from 'react-dom/server'
import App from './App'
import Head from './components/Head'

export function render(_url: string) {
    const head = renderToString(
        <StrictMode>
            <Head/>
        </StrictMode>
    )
    const html = renderToString(
        <StrictMode>
            <App/>
        </StrictMode>,
    )
    return {html, head}
}
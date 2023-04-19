//引入react核心库
import React, {StrictMode} from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom/client'
//
import {BrowserRouter} from 'react-router-dom'
//引入App
import App from './App'
//引入bootstrap相关样式
import 'bootstrap/dist/css/bootstrap.min.css'

// ReactDOM.render(
// 	<BrowserRouter>
// 		<App/>
// 	</BrowserRouter>,
// 	document.getElementById('root')
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<StrictMode>
			<App/>
		</StrictMode>
	</BrowserRouter>
);
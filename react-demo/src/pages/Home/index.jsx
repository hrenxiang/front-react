import React, { Component } from 'react'
import MyLink from "../../components/MyLink";
import {Redirect, Route, Switch} from "react-router-dom";
import News from "./News";
import Message from "./Message";


export default class Home extends Component {
	render() {
		return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						<li>
							{/* 如果App.jsx中使用的是多级路径，这里要保持一致，不然页面会加载不出来 */}
							<MyLink to="/huangrx/home/news">News</MyLink>
						</li>
						<li>
							<MyLink to="/huangrx/home/message">Message</MyLink>
						</li>
					</ul>
					{/* 注册路由 */}
					<Switch>
						<Route path="/huangrx/home/news" component={News}/>
						<Route path="/huangrx/home/message" component={Message}/>
						<Redirect to="/huangrx/home/news"/>
					</Switch>
				</div>
			</div>
		)
	}
}
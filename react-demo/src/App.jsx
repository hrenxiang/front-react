import React, {Component} from 'react'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Antd from "./pages/Antd";
import Test from "./pages/Test";
import Header from "./components/Header";
import MyLink from "./components/MyLink";


export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 原生html中，靠<a>跳转不同的页面 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

                            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                            <NavLink activeClassName='active' className="list-group-item" to="/huangrx/home">Home</NavLink>
                            {/*<NavLink activeClassName='active' className="list-group-item" to="/home">Test</NavLink>*/}
                            <NavLink activeClassName='active' className="list-group-item" to="/huangrx/about">About</NavLink>

                            {/* 验证精准或模糊匹配 */}
                            <MyLink activeClassName='active' className="list-group-item" to="/huangrx/antd/a/b">Antd</MyLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path="/huangrx/home" component={Home}/>

                                    {/* 如果不加Switch，点击Home组件时，也会显示 Test组件中的内容，Switch是找到第一个匹配的既结束*/}
                                    <Route path="/huangrx/home" component={Test}/>

                                    {/* 多级路径，如果在index.html中使用./css/bootstrap.css引入样式，因为会到根路径，localhost:3000 下找资源，所以刷新的时候会导致样式丢失 */}
                                    {/* 可以使用 %PUBLIC_URL% 或者不使用 . 或者不使用 BrowserRouter而用 HashRouter*/}
                                    <Route path="/huangrx/about" component={About}/>

                                    {/* 使用exact开启路由的精准匹配，既必须完全匹配路径，默认是false既模糊匹配*/}
                                    <Route exact={false} path="/huangrx/antd/" component={Antd}/>

                                    <Redirect to='/huangrx/home'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

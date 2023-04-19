import {NavLink, Routes, Route, Navigate, useRoutes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Test from "./pages/Test";
import routes from "./routes";
import Message from "./pages/Home/Message";
import News from "./pages/Home/News";
import Header from "./components/Header";

function App() {

    // const element = useRoutes([
    //     {
    //         path: '/about',
    //         element: <About/>
    //     },
    //     {
    //         path: '/home',
    //         element: <Home/>,
    //         children: [
    //             {
    //                 path: 'message',
    //                 element: <Message/>
    //             },
    //             {
    //                 path: 'news',
    //                 element: <News/>
    //             }
    //         ]
    //     },
    //     {
    //         path: '/test',
    //         element: <Test/>
    //     },
    //     {
    //         path: '/',
    //         element: <Home/>
    //     }
    // ]);

    const element = useRoutes(routes);

    function computedClassName(params) {
        console.log(params)
        return params.isActive ? 'list-group-item huangrx' : 'list-group-item'
    }

    function computedClassName2({isActive}) {
        console.log(isActive)
        return isActive ? 'list-group-item huangrx' : 'list-group-item'
    }

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
                        {/*<NavLink className="list-group-item" to="/about">About</NavLink>*/}
                        {/*<NavLink className={(isActive) => computedClassName(isActive)} to="/home">Home</NavLink>*/}
                        {/*<NavLink className={computedClassName2} to="/test">Test</NavLink>*/}

                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        {/* end表示 子级路由如果被选中，父级路由就不再高亮 */}
                        <NavLink className="list-group-item" end to="/home">Home</NavLink>
                        <NavLink className="list-group-item" to="/test">Test</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {/*<Routes>*/}
                            {/*    /!* caseSensitive 路由是否忽略大小写进行匹配 默认不区分大小写*!/*/}
                            {/*    <Route caseSensitive={true} path="/about" element={<Test/>}/>*/}
                            {/*    <Route path="/about" element={<About/>}/>*/}
                            {/*    <Route path="/home" element={<Home/>}/>*/}
                            {/*    <Route path="/test" element={<Test/>}/>*/}
                            {/*    <Route path="/" element={<Navigate to="/home"/>}/>*/}
                            {/*</Routes>*/}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

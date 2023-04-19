import About from "../pages/About";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Message from "../pages/Home/Message";
import News from "../pages/Home/News";
import Detail from "../pages/Home/Message/Detail";

export default [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'message',
                element: <Message/>,
                children: [
                    // {
                    //     path: 'detail/:id/:title/:content',
                    //     element: <Detail/>,
                    // }


                    // search 和 state 传参都用这个
                    {
                        path: 'detail',
                        element: <Detail/>,
                    }
                ]
            },
            {
                path: 'news',
                element: <News/>
            }
        ]
    },
    {
        path: '/test',
        element: <Test/>
    },
    {
        path: '/',
        element: <Home/>
    }
]
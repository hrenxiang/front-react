import React from 'react'
import {
    useInRouterContext,
    useLocation,
    useNavigationType,
    useParams,
    useResolvedPath,
    useSearchParams
} from "react-router-dom";

export default function Detail() {
    {
        // 接收params参数
        // const {id, title, content} = useParams();
        // return (
        //     <ul>
        //         <li>ID:{id}</li>
        //         <li>TITLE:{title}</li>
        //         <li>CONTENT:{content}</li>
        //     </ul>
        // )





        // 接收search参数
        // const a = useSearchParams();
        // console.log('@', a)
        //
        // const [search, setSearch] = useSearchParams();
        // console.log(search)
        // return (
        //     <ul>
        //         <li>ID:{search.get('id')}</li>
        //         <li>TITLE:{search.get('title')}</li>
        //         <li>CONTENT:{search.get('content')}</li>
        //     </ul>
        // )

        console.log('测试是否存在于上下文中', useInRouterContext());
        console.log('当前路由导航类型', useNavigationType());
        console.log(
            '给定一个URL值，解析其中的path,search,hash值',
            useResolvedPath('/user?id=001&name=tom#qwe'),
        );



        // 接收state参数
        // const a = useLocation();
        // console.log('#', a)
        //
        const {state: {id,title,content}} = useLocation();
        console.log('@',id,title,content)
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{content}</li>
            </ul>
        )
    }
}

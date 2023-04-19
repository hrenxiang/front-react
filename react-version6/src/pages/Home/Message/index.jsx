import React, {useState} from 'react'
import {Link, Outlet} from "react-router-dom";

export default function Message() {

    const [messages] = useState(
        [
            {id: '001', title: '消息一', content: '你好，中国'},
            {id: '002', title: '消息二', content: '傻瓜，日子'},
            {id: '003', title: '消息三', content: '大聪明，漂亮'}
        ]
    );

    return (
        <div>
            <ul>
                {/*<li>*/}
                {/*	<a href="/message1">message001</a>&nbsp;&nbsp;*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*	<a href="/message2">message002</a>&nbsp;&nbsp;*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*	<a href="/message/3">message003</a>&nbsp;&nbsp;*/}
                {/*</li>*/}

                {
                    messages.map((message) => {
                        return (
                            <li key={message.id}>
                                {/*<Link to={`detail/${message.id}/${message.title}/${message.content}`}>{message.title}</Link>*/}

                                {/*<Link to={`detail?id=${message.id}&title=${message.title}&content=${message.content}`}>{message.title}</Link>*/}

                                <Link to={`detail`} state={{id: message.id, title:message.title, content:message.content}}>{message.title}</Link>
                            </li>
                        );
                    })
                }
            </ul>

            {/* 指定路由组件的展示位置 */}
            <Outlet/>
        </div>
    )

}

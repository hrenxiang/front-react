import React from 'react';
import {NavLink, Outlet, useOutlet} from "react-router-dom";
// import React, {useState} from 'react';
// import {Navigate} from "react-router-dom";

function Home(props) {
    // const [sum, setSum] = useState(1);

    const outlet = useOutlet();
    console.log(outlet)

    return (
        <div>
            <h1>Home</h1>
            {/*{sum === 2 ? <Navigate to='/about'/> : <h3>当前的值是：{sum}</h3>}*/}
            {/*<button onClick={() => {setSum(2)}}>点我值加2</button>*/}


            <div>
                <ul className="nav nav-tabs">
                    <li>
                        {/* 不写斜杠 ，代表在在父级路径下追加这个路径 */}
                        <NavLink className='list-group-item' to="news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className='list-group-item' to="message">Message</NavLink>
                    </li>
                </ul>

                {/* 指定路由组件呈现的位置 */}
                <Outlet/>
            </div>


        </div>
    );
}

export default Home;
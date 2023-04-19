import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    function showAbout() {
        navigate('/about')
    }

    function showDetail() {
        navigate(
            '/home/message/detail',
            {
                replace: false,
                state: {
                    id: '004',
                    title: 'hello china',
                    content: 'haha'
                }
            }
        )
    }

    function back() {
        navigate(-1);
    }

    function forward() {
        navigate(1);
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                        <button onClick={showAbout}>去About</button>
                        <button onClick={showDetail}>去Detail</button>
                        <button onClick={back}>后退</button>
                        <button onClick={forward}>前进</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
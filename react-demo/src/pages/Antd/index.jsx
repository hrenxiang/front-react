import React, {Component} from 'react';
import {Button, DatePicker} from "antd";
import {SearchOutlined, WechatOutlined, WeiboOutlined} from "@ant-design/icons";
const {RangePicker} = DatePicker;

class Antd extends Component {
    render() {
        return (
            <div>
                <button>点我</button>
                <br/>
                <br/>
                <Button type="primary">按钮1</Button>
                <br/>
                <br/>
                <Button >按钮2</Button>
                <br/>
                <br/>
                <Button type="link">按钮3</Button>
                <br/>
                <br/>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <br/>
                <br/>
                <WechatOutlined />
                <br/>
                <br/>
                <WeiboOutlined />
                <br/>
                <br/>
                <DatePicker/>
                <br/>
                <br/>
                <RangePicker/>
            </div>
        );
    }
}

export default Antd;
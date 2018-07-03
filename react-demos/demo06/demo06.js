import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

var num = 123;
var string = 'react'

class MyTitle extends React.Component {
    render() {
        return <h1>heoll, {this.props.title}</h1>;
    }
}

// 属性值类型检查
MyTitle.propTypes = {
    title: PropTypes.string
}

// 设置组件属性的默认值
MyTitle.defaultProps = {
    title: 'Mary'
}

render(
    <MyTitle title={num} />,
    document.getElementById('app')
)
import React from "react";
import { render } from "react-dom";

var _this = null;
var _e = null;

class Button extends React.Component {
    constructor(props) {
        super(props);
        
        this.event1 = this.event1.bind(this)
    }

    event1(e) {
        /**
         * 在 React 中你不能通过返回 false 来阻止默认行为。必须明确调用 preventDefault 。
         * 参考：http://www.css88.com/react/docs/handling-events.html
         */
        e.preventDefault();
        console.log('事件绑定方法1，通过constructor中做bind指针绑定，官方推荐方案。');
    }


    // webpack编译时报语法错误

    // event2 = (e) => {
    //     e.preventDefault();
    //     console.log('事件绑定方法2，这个语法确保 `this` 绑定在 handleClick 中。 警告：这是 *实验性的* 语法。');
    // }

    event3(e) {
        
        /**
         * 这个语法的问题是，每次 LoggingButton 渲染时都创建一个不同的回调。
         * 在多数情况下，没什么问题。然而，如果这个回调被作为 prop(属性) 传递给下级组件，这些组件可能需要额外的重复渲染。
         * 我们通常建议在构造函数中进行绑定，以避免这类性能问题。
         */

        _this = this;
        _e = e;
        
        e.preventDefault();
        console.log('这个语法确保 `this` 被绑定在 handleClick 中')
    }

    event4(e) {
        console.log(this === _this, e === _e);
        e.preventDefault();
        console.log('bind绑定方式，自己尝试的方法，官方没有说明，不确定有没有什么坑!');
    }

    render() {
        return (
            <div>
                <p><a href="http://www.css88.com/react/docs/handling-events.html" onClick={this.event1}>event 1</a></p>
                {/* <p><a href="http://www.css88.com/react/docs/handling-events.html" onClick={this.event2}>event 2</a></p> */}
                <p><a href="http://www.css88.com/react/docs/handling-events.html" onClick={e => this.event3(e)}>event 3</a></p>
                <p><a href="http://www.css88.com/react/docs/handling-events.html" onClick={this.event4.bind(this)}>event 4</a></p>
            </div>
        )
    }
}

render(
    <Button />,
    document.getElementById('app')
)
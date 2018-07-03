### `super`关键字用于访问和调用一个对象的父对象上的函数。
参考：
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)
- [深入浅析ES6 Class 中的 super 关键字](https://www.jb51.net/article/126399.htm)

### 使用`es6 class`定义组件并存在事件监听时，需要在`constructor`中绑定事件方法，如：
``` javascript
    class Toggle extends React.Component {
    constructor(props) {
        super(props); // //ES6 要求，子类的构造函数必须执行一次super函数。
        this.state = {isToggleOn: true};

        // 这个绑定是必要的，使`this`在回调中起作用
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        );
    }
    }

    ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
    );
```
[参考](http://www.css88.com/react/docs/handling-events.html)

> 如果不做`bind`绑定，会报`Uncaught TypeError: Cannot read property 'refs' of undefined`错误

[react事件](https://reactjs.org/docs/events.html#supported-events)
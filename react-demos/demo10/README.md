### 组件的生命周期分成三个状态：
- `Mounting`：已插入真实 DOM
- `Updating`：正在被重新渲染
- `Unmounting`：已移出真实 DOM

### `React`为每个状态都提供了两种处理函数，`will`函数在进入状态之前调用，`did`函数在进入状态之后调用，三种状态共计五种处理函数。
- `componentWillMount()`
- `componentDidMount()`
- `componentWillUpdate(object nextProps, object nextState)`
- `componentDidUpdate(object prevProps, object prevState)`
- `componentWillUnmount()`

### 此外，React 还提供两种特殊状态的处理函数。
- `componentWillReceiveProps(object nextProps)`：已加载组件收到新的参数时调用
- `shouldComponentUpdate(object nextProps, object nextState)`：组件判断是否重新渲染时调用

> [参考](http://www.ruanyifeng.com/blog/2015/03/react.html)
> [react中文文档 状态（state）和生命周期](http://www.css88.com/react/docs/state-and-lifecycle.html)

### `Uncaught Error: Target container is not a DOM element.`错误
``` javascript
    render() {
        render (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        )
    }
```
> `render`内的`return`误写成`render`, 字段修改后运行正常。
``` javascript
    render() {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        )
    }
```


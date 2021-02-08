
React-Redux  UI组件 容器组件

 UI 组件（纯组件）由参数决定它的值
只负责UI,没有业务逻辑
没有状态（无this.state变量）
数据由this.props提供
不使用任何 Redux 的 API

容器组件  
负责管理数据和业务逻辑，不负责 UI 的呈现
带有内部状态
使用 Redux 的 API
容器组件负责与外部的通信，将数据通过props 传给UI组件，由UI组件渲染出视图

生成容器组件  connect  将ui组件生成容器组件




import 'babel-polyfill';
import vconsole from "vconsole";
import dva from 'dva';
import './index.css';

console.log(new vconsole());

document.write('dva2')




// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// // 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

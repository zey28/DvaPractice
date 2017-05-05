import React from 'react';
import { Router, Route } from 'dva/router';
import App from './routes/App';
import Products from './routes/Products';
import AllDevice from './routes/AllDevice/AllDevice';
import OrderManger from './routes/OrderManger/OrderManger';

import DeviceDetail from './routes/DeviceDetail/DeviceDetail';
// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Route path="/" component={IndexPage} />
//  	  <Route path="/products" component={Products} />
//     </Router>
//   );
// }

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={App} >
      		<Route path="/allDevice" component={AllDevice}/>
      		<Route path="/allDevice/deviceDetail" component={DeviceDetail}/>
      		<Route path="/orderManger" component={OrderManger}/>
      	</Route>
    </Router>
  );
}

export default RouterConfig;

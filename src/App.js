import React, { memo, Suspense } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import SuspenseLoading  from '@components/SuspenseLoading';

import routes from './router';
import store from './store';

import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<div> <SuspenseLoading /></div>}>
          {renderRoutes(routes)}
        </Suspense>
      </HashRouter>
    </Provider>
  )
})


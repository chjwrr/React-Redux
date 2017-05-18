/*
 * @author:  yinyongqian
 * @createTime:  2017-03-20, 15:58:16 GMT+0800
 * @description:  description
 */
import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import reducer from './classes/reducer';
import APP from './classes/mainPage'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

export default class ReactWithRedux extends Component {

  // Provider 包裹住 项目，则项目里面所有的 js 都可以访问到 store

    render() {
        return (
            <Provider store={store}>
              <APP />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ReactWithRedux', () => ReactWithRedux);

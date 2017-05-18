/**
 * Created by mymac on 2017/5/18.
 */

// * as  是把action里面所有 export 的都import 进来， 可以使用 .属性 访问
import  * as ACTION from './actionType'

const initState = {
    text:'默认值',
    list:[],
};

/*
* 注意:

 不要修改 state。 使用 Object.assign() 新建了一个副本。不能这样使用 Object.assign(state, { visibilityFilter: action.filter })，因为它会改变第一个参数的值。你必须把第一个参数设置为空对象。你也可以开启对ES7提案对象展开运算符的支持, 从而使用 { ...state, ...newState } 达到相同的目的。

 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。

 Object.assign 须知

 Object.assign() 是 ES6 特性，但多数浏览器并不支持。你要么使用 polyfill，Babel 插件，或者使用其它库如 _.assign() 提供的帮助方法。
* 
* */
export default (state = initState, action) => {
    switch (action.type) {
        case ACTION.ACTION_CHANGE_TEXT_TYPE :
            return Object.assign({}, state, {
                text: action.text
            });
            break;
            
        case ACTION.ACTION_ADD_TEXT_TYPE :
            let list = state.list;
            list.push(action.text);
            
            return Object.assign({}, state, {
                list: list
            });
            break;
        default:
            return state;
            break;
    }
}
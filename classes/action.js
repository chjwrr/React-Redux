/**
 * Created by mymac on 2017/5/18.
 */

// * as  是把action里面所有 export 的都import 进来， 可以使用 .属性 访问
import  * as ACTIONTYPE from './actionType'

// 修改 state.text
export const CHANGE_TEXT_ACTION = (text) => {
    return {
        type: ACTIONTYPE.ACTION_CHANGE_TEXT_TYPE,
        text: text,
    };
};

// 添加 state.list
export const ADD_TEXT_ACTION = (text) => {
    return {
        type: ACTIONTYPE.ACTION_ADD_TEXT_TYPE,
        text: text,
    };
};

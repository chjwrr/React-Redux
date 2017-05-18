

/*
 * 安装第三方模块
 npm install --save redux
 npm install --save react-redux
 npm install --sae react-router
 * */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import {connect} from 'react-redux';
import  * as ACTION from './action'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
class mainPage extends Component {

    constructor(props){
        super(props);

        this.state={
            inputText:'默认值',
        };


        this.onChangeText = this.onChangeText.bind(this);
    }

    // 点击方法
    onChangeText (){
        // 调用 发送 action的方法。传递参数
        this.props.onChangeAction(this.state.inputText);

        this.setState({
            inputText: '',
        });
    }

    render() {

        const {text , list } = this.props;

        return (
            <View style={styles.container}>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1 , justifyContent: 'center'}}
                    onChangeText={(text) => this.setState({inputText: text})}
                    value={this.state.inputText}
                />

                <TouchableOpacity onPress={this.onChangeText}>

                    <Text>点击我，通过 redux 改变 state.text </Text>

                </TouchableOpacity>
                <Text>改变后的state.text值：{text}</Text>

                <Text style={{marginTop: 30}}>list:</Text>

                {
                    list.map((item, index)=>{
                       return  <Text key={index}>{item}</Text>
                    })

                }
            </View>
        );
    }
}


// 映射 Redux state 到组件的属性，reducer 改变完 state 以后，将更新过后的state 映射到这个方法
// 每次 state 的改变，都会走这个方法
//[mapStateToProps(state, [ownProps]): stateProps] (Function):
// 如果定义该参数，组件将会监听 Redux store 的变化。
// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
// 该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。
// 如果你省略了这个参数，你的组件将不会监听 Redux store。
// 如果指定了该回调函数中的第二个参数 ownProps，则该参数的值为传递到组件的 props，而且只要组件接收到新的 props，mapStateToProps 也会被调用。


function mapStateToProps(state) {

    console.log('state:'+JSON.stringify(state));
    return {
        text: state.text,
        list:state.list,
    };
}

// 映射 Redux actions 到组件的属性
//[mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function):
// 如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，而且这个对象会与 Redux store 绑定在一起，
// 其中所定义的方法名将作为属性名，合并到组件的 props 中。
// 如果传递的是一个函数，该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，
// 这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起（提示：你也许会用到 Redux 的辅助函数 bindActionCreators()）。
// 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。
// 如果指定了该回调函数中第二个参数 ownProps，该参数的值为传递到组件的 props，
// 而且只要组件接收到新 props，mapDispatchToProps 也会被调用。


function mapDispatchToProps(dispatch){
    return{
        // 真正的发送 action
        onChangeAction:(text) => {
            // 分发事件，reducer 接收到 action，改变state
            dispatch(ACTION.CHANGE_TEXT_ACTION(text));
            dispatch(ACTION.ADD_TEXT_ACTION(text));
        }
    }
}


// 连接 React 组件与 Redux store。
// 连接操作不会改变原来的组件类，反而返回一个新的已与 Redux store 连接的组件类。
// 我们用 react-redux 提供的 connect() 方法将“笨拙”的 Counter 转化成容器组件。connect() 允许你从 Redux store 中指定准确的 state 到你想要获取的组件中。这让你能获取到任何级别颗粒度的数据。


export default connect(mapStateToProps, mapDispatchToProps)(mainPage);

import Taro, {Component} from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtInput, AtButton, AtList, AtListItem } from 'taro-ui'
import { add_todo } from '../../actions/todo'

import './index.scss'


@connect(({ todo }) => ({
    todo
  }), (dispatch) => ({
    add (text) {
        dispatch(add_todo(text))
    }
}))
class Todo extends Component{

    config = {
        navigationBarTitleText: 'Todo List'
      }

    constructor() {
        super(...arguments)
        this.state = {
            text: ''
        }
    }

    handleChange (text) {
        this.setState({
            text
        })
        return text
    }

    handleClick () {
        console.log("clicked")
        const { text } = this.state;
        const {add} = this.props;
        add(text)
        this.setState({
            text: ''
        })
    }

    render() {
        const {text} = this.state;
        const {todo} = this.props;
        console.log(todo.list)
        return (
            <View>
                <AtInput
                    name='value'
                    title='输入'
                    type='text'
                    placeholder='请输入内容'
                    value={text}
                    onChange={this.handleChange.bind(this)}
                />
                <AtButton type='primary' size='normal' onClick={this.handleClick.bind(this)}>添加</AtButton>
                <AtList>
                    { 
                        Array.isArray(todo.list) && todo.list.map(item => {
                            return (
                                <AtListItem title={item} />
                            )
                })}
                </AtList>
            </View>
        )
    }

}

export default Todo

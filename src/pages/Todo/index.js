import Taro, {Component} from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtInput, AtButton } from 'taro-ui'
import { add_todo } from '../../actions/todo'

import 'taro-ui/dist/style/index.scss'
import './index.scss'



@connect(({ todo }) => ({
    todo
  }), (dispatch) => ({
    add (text) {
        dispatch(add_todo(text))
    }
}))
export default class Todo extends Component{

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
        this.props.add(text)
    }

    render() {
        const {text} = this.state;
        const {todo} = this.props;
        console.log(todo.list)
        return (
            <View>
                <AtInput
                    name='value'
                    // title='标准五个字'
                    type='text'
                    // placeholder='标准五个字'
                    value={text}
                    onChange={this.handleChange.bind(this)}
                />
                <AtButton onClick={this.handleClick.bind(this)}>添加</AtButton>
                <ul>
                { Array.isArray(todo.list) && todo.list.map(item => {
                    return (<li>{item}</li>)
                })}
                </ul>
            </View>
        )
    }

}

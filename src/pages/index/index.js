import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtInput } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'

import 'taro-ui/dist/style/index.scss'
import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      text: ''
    }
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange (text) {
    this.setState({
      text
    })
    return text
  }
  
  handleClick () {
    Taro.navigateTo({
      url: '/pages/Todo/index'
    })
  }

  render () {
    const {text} = this.state;
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <Button onClick={this.handleClick.bind(this)}>Todo页面</Button>
      </View>
    )
  }
}

export default Index

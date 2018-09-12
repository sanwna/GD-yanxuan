/**
 * Created by Administrator on 2018/9/11 0011.
 */
import homedata from './home_data.json'
import categorydata from './category_data.json'
import shiwudata from './shiwu_data.json'

import Mock from 'mockjs'
Mock.mock('/home_data',{code:0,data:homedata})
Mock.mock('/category_data',{code:0,data:categorydata})
Mock.mock('/shiwu_data',{code:0,data:shiwudata})
Mock.mock('/smsCode',{data:'验证码发送成功'})

console.log('mock')


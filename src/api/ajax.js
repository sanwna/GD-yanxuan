/**
 * Created by Administrator on 2018/9/11 0011.
 */
import axios from 'axios'

export default function ajax(url,data={},type='GET') {
  return new Promise(function (resolve,reject) {
    let promise
    //执行异步请求
    if(type==='GET'){
      //发送get请求
      let paramStr = ''
      Object.keys(data).forEach(key=>{
        paramStr+=key + '='+data[key]+'&'
      })
      if(paramStr){
        paramStr='?'+paramStr.substring(0,paramStr.length-1)
        promise=axios.get(url+paramStr)
      }else {
        //发送post请求
        promise=axios.post(url,data)
      }
      promise.then(response=>{
        //如果成功了就调用成功的回调
        resolve(response.data)
        debugger
      }).catch((reject)=
          reject()

        //如果失败了

      )
    }

  })

}

import axios from '@/utils/uni_axios'
import qs from "qs"
/**
 * 请求接口日志记录
 */
function _reqlog(req) {
    if (process.env.NODE_ENV === 'development') {
        console.log("请求地址：" + req.url, req.data || req.params)
    }
    //TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
    if (process.env.NODE_ENV === 'development') {
        console.log(`${res.config.url}响应结果：`, res)
    }
}

// 创建自定义接口服务实例
const http = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 6000,  // 不可超过 manifest.json 中配置 networkTimeout的超时时间
    // #ifdef H5
    withCredentials: true,
    // #endif
    // headers: {
    //     'Content-Type': 'application/json',
    //     //'X-Requested-With': 'XMLHttpRequest',
    // },
})

// 拦截器 在请求之前拦截
http.interceptors.request.use(config => {
    // code...
    // 获取本地存储的Cookie
    // const cookie = uni.getStorageSync('cookie')
    // 设置Cookie
    // config.headers.Cookie = cookie
    _reqlog(config)
    return config
})

// 拦截器 在请求之后拦截
http.interceptors.response.use(response => {
    _reslog(response)
    // code...
    // 获取cookie
    // let headerStr = JSON.stringify(response.headers)
    // let cookie = (/(?:Set-Cookie).+;/.exec(headerStr)[0]).replace(/Set-Cookie|:|"/g, "")
    // if (cookie) {
        // uni.setStorage({
            // key: 'cookie',
            // data: cookie.split(';')[0]
        // })
    // }
    return response
}, error => {
    return Promise.reject(error.message)
})



function server(config){
    console.log(config)
    if(config.method.toLowerCase() === 'post'){
      // 针对对象 是无法直接处理的 ; qs是一个js库,可以方便的对对象进行序列化处理
      // myAjax  {name:'zx',age:20} ==> name=zs&age=20
      config.data = qs.stringify(config.data,{arrayFormat: 'repeat',allowDots: true});
    }else{
      config.params = config.data;
    }
    return http(config);
  }

export default server
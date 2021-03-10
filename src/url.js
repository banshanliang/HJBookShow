import request from './request.js'
//定义所有的接口
const baseurl="https://result.eolinker.com/uaILVXk8ffde05155097b90754e4b8762b9d6fc46fa947d?uri="
//加载登录信息
export const gettocken = (data) => {
    // /apis/login//mock测试
    return request('https://mockapi.eolinker.com/uaILVXk8ffde05155097b90754e4b8762b9d6fc46fa947d/user/login',{ 
    method:'post',
    data
    })
}
//+++++++++++首页接口+++++++++++++++
//加载首页信息
export const getmainPath = (data) => {
    // /apis/mainPayh
    return request(baseurl+'/mp/mainPath')
}
//展示详细信息
export const reGetBook = (data) => {
    // /apis/mainPayh
    return request(baseurl+'/recommend/reGetBook')
}


//++++++++++收藏列表接口+++++++++
//收藏书籍
export const markBook = (data) => {
    // /apis/mainPayh
    return request(baseurl+'/mark/markBook')
}
//删除收藏书籍
export const deleteBook = (data) => {
    // /apis/mainPayh
    return request(baseurl+'/mark/deleteBook')
}
//加载收藏书籍l列表
export const nameFindBook = () =>{
    // /apis/bookShow
    return request(baseurl+'/mark/nameFindBook')
}


//+++++++++++推荐列表接口++++++++++++++++++++
//加载图书推荐页信息
//词云图
export const getwordsCloud = () =>{
    // /apis/bookShow
    return request('https://result.eolinker.com/2fRP7UD5312f15ed1a33a5f98f2de438d5eaa71aa96b771?uri=/api/wordsCloud')
}
export const showBooks = () =>{
    // /apis/bookShow
    return request(baseurl+'/recommend/showBooks')
}


//++++++++++++++++个人中心接口+++++++++++++++++++++++++=
//修改密码
export const changePass = () =>{
    // /apis/bookShow
    return request(baseurl+'changePass')
}


//+++++++++++++++++上传数据接口+++++++++++
export const inputData = () =>{
    // /apis/bookShow
    return request(baseurl+'inputData',{ 
        method:'post',
        data
        })
}
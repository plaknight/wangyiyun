import request from '@/utils/http.js'


function getList(data){
	return request({
		url:"/search",
		method: "get",
		data
	})
}

export default {
	getList
}
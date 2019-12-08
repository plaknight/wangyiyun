<template>
	<view class="content">
		<view class="text-area">
			<text @click="jumpPages" class="title">{{title}}</text>
			<button >点击登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		methods: {
			jumpPages(){
				console.log("11111")
				uni.navigateTo({
					 url: '/pages/login/index'
				});
			}	
		},
		onLoad() {

		},
		onShow(){
			this.title = getApp().globalData.text
			console.log("小程序声明周期")
		},
		created(){
			console.log("vue 声明周期")
		}
	}
</script>

<style lang="scss">
	.content{
		.text-area{
			width: 100rpx;
			height: 100rpx;
			background-color: #4CD964;
		}
	}

</style>

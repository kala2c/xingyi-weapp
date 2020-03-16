<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号</text>
				<m-input class="m-input" type="text" clearable focus v-model="phone" placeholder="请输入手机号"></m-input>
			</view>
      <view class="input-row">
				<text class="title">验证码</text>
				<m-input type="text" v-model="captcha" placeholder="请输入验证码"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
      <view class="input-row">
				<text class="title">确认密码</text>
				<m-input type="password" displayable v-model="password2" placeholder="请再次输入密码"></m-input>
			</view>
      <view class="input-row">
				<text class="title">身份证</text>
				<m-input type="text" v-model="idcard" placeholder="请输入身份证号"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="/pages/login/login">已有账号，登录</navigator>
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				phone: '',
        captcha: '',
        password: '',
        password2: '',
        idcard: ''
			}
		},
		methods: {
			bindLogin() {
				if (this.phone.length < 11) {
					uni.showToast({
						icon: 'none',
						title: '手机号格式不正确'
					})
					return
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码长度果断'
					})
					return
				}

				const data = {
					phone: this.phone,
          captcha: this.captcha,
          password: this.password,
          password2: this.password2,
          idcard: this.idcard
				}
			},
    }
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 10px;
	}
</style>

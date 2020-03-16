<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="phone" placeholder="请输入手机号"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="/pages/login/register">注册账号</navigator>
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'
  import { loginApi } from '../../api'
  import { setToken } from '../../utils/token'
	export default {
		components: {
			mInput
		},
		data() {
			return {
				phone: '',
        password: '',
        toPath: null
			}
    },
    onLoad(option) {
      if (option.toPath) {
        this.toPath = option.toPath
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
					password: this.password
				}
				uni.request({
          url: loginApi,
          data: data,
          method: 'post',
          success(res) {
            uni.showToast({
              icon: 'none',
              title: '登陆成功',
            })
            let token = res.data.data.token
            setToken(token)
            uni.navigateBack()
          },
          error(res) {
            uni.showToast({
              icon: 'none',
              title: res.data.message,
            })
          }
        })
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

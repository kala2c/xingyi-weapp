<template>
  <view class="container">
    <view class="userinfo-wrap">
      <view v-if="!isLogin" class="link-wrap">
        <text @click="toUrl('/pages/login/login')" class="link">登录</text>/
        <text @click="toUrl('/pages/login/register')" class="link">注册</text>
      </view>
      <view v-else class="userinfo">
        <text>{{userinfo.username}}</text>
        <text>{{userinfo.phone}}</text>
      </view>
      <view class="link-list">
        <view @click="toUrl('/pages/user/info')" class="link-list-item">
          <text class="link">机构简介</text>
        </view>
        <view @click="toUrl('/pages/user/concat')" class="link-list-item">
          <text class="link">联系我们</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

// import { uniList, uniListItem } from '@dcloudio/uni-ui'
import { getToken } from '../../utils/token'
import api from '../../api'
export default {
  components: {
    // uniList,
    // uniListItem
  },
  data() {
    return {
      isLogin: false,
      userinfo: {}
    }
  },
  async onLoad() {
    let token = getToken()
    if (token) {
      let res = await api.getUserInfo()
      let userinfo = res.data.data
      this.userinfo.username = userinfo.username
      this.userinfo.phone = userinfo.phone
      this.isLogin = true
      console.log(userinfo)
    }
  },
  methods: {
    toUrl(path) {
      uni.navigateTo({
        url: path
      })
    }
  }
}
</script>


<style scoped>
  .container {
    width: 100%;
    height: 100%;
    /* padding-top: 50px; */
    background-color: #f0f0f0;
  }
  .link {
    color: #373d49;
  }
  .userinfo-wrap {
    border-radius: 10px 10px 0px 0px;
    background-color: #ffffff;
    padding: 16px;
  }
  .link-wrap {
    text-align: center;
    padding-bottom: 20px;
  }
  .link-list {
    /* padding: 15px 0; */
    border-top: 1px solid #eee; 
  }
  .link-list-item {
    padding: 15px 10px;
    border-bottom: 1px solid #eee;
  }
</style>


<template>
	<view class="content">
		<view class="list-group">
    <view class="list-item" 
      v-for="(category, index) in categoryList"
        :key="category.id"
        @click="toCourse(index)">
      <view class="list-item-left">
        <image class="banner" :src="category.banner" />
      </view>
      <view class="list-item-right">
        <view class="list-item-title">
          <text class="title">{{category.name}}</text>
        </view>
        <view class="list-item-desc">
          <text class="desc">{{category.description}}</text>
        </view>
      </view>
    </view>
  </view>
	</view>
</template>

<script>
  import api from '../api'
	export default {
		data() {
			return {
				categoryList: []
			}
		},
		async onLoad() {
			const res = await api.getCategoryList()
			console.log(res)
			this.categoryList = res.data.data
		},
		methods: {
			toCourse(index) {
				const category = this.categoryList[index]
				uni.navigateTo({
					url: '/pages/course?id='+category.id
				})
			},
		}
	}
</script>

<style>
.content {
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  padding: 32px;
  background-color: #f9fbff;
}

.list-group {
}
.list-group .list-item {
  display: flex;
  height: 80px;
  padding: 10px 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px 0 #D7D8D9;
  background-color: #fff;
}

.list-item-left {
  width: 135px;
}
.list-item-left .banner {
  width: 100%;
  height: 100%;
}

.list-item-right {
  flex: 1;
  padding-left: 16px;
}

.list-item-right .list-item-title,
.list-item-right .list-item-desc {
  display: block;
}

.list-item-right .list-item-title {
  padding: 6px 0;
  font-size: 16px;
}

.list-item-right .list-item-desc {
  font-size: 12px;
  color: #71777D;
}

</style>

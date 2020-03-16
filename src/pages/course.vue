<template>
  <view class="container">
    <view class="step" 
    v-for="(step, idx) in courses"
    :key="idx"
    >
    <view class="step-title">{{step[0].step.name}}</view>
    <view class="step-desc">{{step[0].step.description}}</view>
    <view class="step-list-group">
      <view class="step-list-group-item"
        v-for="(course, idy) in step"
        :key="course.id"
        @click="toPlay(idx+'-'+idy)">
        <view class="step-list-group-item-text">
          <text class="title">{{course.name}}</text>
          <text class="text">点击学习</text>
        </view>
        <!-- <view class="step-list-group-item-title">{{course.name}}</view> -->
        <!-- <view class="step-list-group-item-desc">{{course.description}}</view> -->
        <!-- <view class="step-list-group-item-info">点击学习</view> -->
      </view> 
    </view>
  </view>
  </view>
</template>

<script>
import api from '../api/index'
export default {
  data() {
    return {
      courses: [],
      category: null
    }
  },
  async onLoad(options) {
    let res = await api.getCourseList({
      data: { id: options.id }
    })
    this.courses = res.data.data.courses
    this.category = res.data.data.category
    console.log(this.courseList)
  },
  methods: {
    toPlay(idxy) {
      let id = idxy.split('-')
      let course = this.courses[id[0]][id[1]]
      let categoryId = course.category.id
      let courseId = course.id 
      uni.navigateTo({
        url: '/pages/playWebview?categoryId='+categoryId+'&courseId='+courseId
      })
    }
  }
}
</script>

<style scoped>
.step {

}
.step-title {
  background-color: #fa6000;
  color: #fff;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: bold;
}
.step-desc {
  box-sizing: border-box;
  min-height: 40px;
  padding: 15px 16px;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
}
.step-list-group {

}
.step-list-group-item {
  padding: 18px 15px;
  margin: 10px 16px;
  /* border-top: 3px solid #fa6000; */
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
}
.step-list-group-item-text .title {
  display: inline-block;
  font-size: 17px;
  color: #373d41;
  letter-spacing: 0;
  vertical-align: middle;
  max-width: 140px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.step-list-group-item-text .text {
  float: right;
  vertical-align: middle;
  font-size: 12px;
  margin-top: 5px;
  color: #ff6a00;
  letter-spacing: 0;
}


.step-list-group-item-title {
  width: 100%;
  padding-top: 8px;
  margin-bottom: 8px;
  /* border-bottom: 1px solid #ddd; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.step-list-group-item-desc {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 3;
  box-orient: vertical;
  height: 50px;
}

.step-list-group-item-info {
  text-align: right;
}
</style>

<template>
  <view class="container">
    <view class="play-window">
      <video id="player" :src="course.url" controls></video> 
    </view>
    <view class="step" 
      v-for="(step, idx) in courses"
      :key="idx"
      >
      <view class="step-title">{{step[0].step.name}}</view>
      <view class="step-list-group">
        <view class="step-list-group-item"
          v-for="(courseItem, idy) in step"
          :key="courseItem.id"
          @click="changeCourse(idx+'-'+idy)">
          <view class="step-list-group-item-text">
            <text v-if="course.id === courseItem.id" class="title active">{{courseItem.name}}</text>
            <text v-else class="title">{{courseItem.name}}</text>
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
      courses: [],
      course: null
    }
  },
  async onLunch(option) {
    console.log(option)
  },
  async onLoad(option) {
    let { categoryId, courseId } = option
    console.log(categoryId, courseId)
    let that = this
    let res = await api.getCourse({
      data: {
        category_id: categoryId,
        course_id: courseId
      }
    })
    let data = res.data.data
    console
    this.courses = data.courses
    this.course = data.course
  },
  methods: {
    changeCourse(idxy) {
      let id = idxy.split('-')
      let course = this.courses[id[0]][id[1]]
      this.course = course
    }
  }
}
</script>

<style scoped>
.play-window {
  width: 100%;
}

.play-window {
  width: 100%;
}
#player {
  width: 100%;
  height: 225px;
}
.step-title {
  background-color: #fa6000;
  color: #fff;
  padding: 10px 16px;
}
.step-list-group-item {
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
}
.step-list-group-item-text .title {
  display: inline-block;
  color: #373d41;
  letter-spacing: 0;
  vertical-align: middle;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.step-list-group-item-text .title.active {
  color: #1e9fff;
}
</style>



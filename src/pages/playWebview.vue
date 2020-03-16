<template>
  <div class="webview">
    <web-view :src="`http://xy.c2wei.cn/index/play?category_id=${categoryId}&course_id=${courseId}`"></web-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryId: 1,
      courseId: 1
    }
  },
  onLoad(option) {
    console.log(option)
    let { categoryId, courseId } = option
    this.categoryId = categoryId || 1
    this.courseId = courseId || 1
  }
}
</script>




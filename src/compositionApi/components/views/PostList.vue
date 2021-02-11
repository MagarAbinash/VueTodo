<template>
  <h1>Post List</h1>
  <div class="postlist">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post"/>
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost'
export default {
    props: ['posts'],
    components: {SinglePost},
    setup(props) {
        // console.log(props.posts)
        onMounted(()=> {
            console.log('Mounted')
        })
        onUnmounted(()=> {
            console.log("Unmounted")
        })
        onUpdated(()=> {
            console.log('Updated')
        })
    }
}
</script>

<style>

</style>
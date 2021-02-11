<template>
  <h1>Home</h1>


  <!-- Basics -->

  <!-- <div>
    <h2>Refs</h2>
    <p ref="p">{{ name }} -- {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Add age</button>
    <input type="text" v-model="name">
  </div>
  <div>
    <h2>Reactive</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update ninja one</button>
  </div> -->


  <!-- Computed -->

  <!-- <input type="text" v-model="search">
  <p>Search term: {{ search }}</p>
  <div v-for="(name, index) in matchingNames" :key="index"> 
    <p>{{ name }}</p>
  </div>
  <button @click="stop">Stop Watch</button> -->

  <!-- Props -->

  <div v-if="posts.length">
    <PostList v-if="showPost" :posts="posts"/>
  </div>
  <div v-else>
    <p>Loading ...</p>
  </div>
  <button @click="showPost = !showPost">Toggle Post</button>
  <button @click="posts.pop()">Delete Post</button>
  <div v-if="error">
    {{ error }}
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import PostList from './views/PostList'
import getPosts from '../composables/getPosts'

export default {
  name: "Home",
  components: {PostList},
  setup() {

  // basics
    // const p = ref(null)
    // const name =ref("Abinash")
    // const age = ref(24)

    // const ninjaOne = reactive({name: 'mario', age: 30})

    // const updateNinjaOne = () => {
    //   ninjaOne.age = 40
    // }

    // function handleClick() {
    //   name.value = "Jhon"
    //   age.value = 35
    // }


  //computed

    // const search = ref('')
    // const names = ref(['Abinash', 'Kabindra', 'Rajina', 'Saugat', 'Nikita'])
    // const stopWatch = watch(search, ()=> {
    //   console.log("watch is running")
    // })

    // const stopEffect = watchEffect(()=> {
    //   console.log("watchEffect is running", search.value)
    // })

    // const matchingNames = computed(()=> {
    //   return names.value.filter((name) => name.includes(search.value))
    // })

    // const stop = () => {
    //   stopWatch()
    //   stopEffect()
    // }

  // Props, fetching data using async await and composable functions
    const showPost = ref(true)

    const {posts, error, load} = getPosts()
    load()


    return {


    //basics

      // name,
      // age,
      // handleClick,
      // p
      // ninjaOne,
      // updateNinjaOne


    // Computed and Watch

      // names,
      // search,
      // matchingNames,
      // stop

    //Props
      posts,
      showPost,
      error
    }
  }
}
</script>

<style>

</style>
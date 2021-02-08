<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name">
  <button @click="handleClick">Click me</button> -->
  <teleport to=".model" v-if="showModel">
    <!-- <Model :header="header" :text="text" theme="sale" @close="toggleModel" /> -->
    <Model theme="sale" @close="toggleModel">
      <h1>Title Header</h1>
      <p>Content goes here</p>
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
    </Model>
  </teleport>

  <div v-if="showModelTwo">
    <!-- <Model :header="header" :text="text" theme="sale" @close="toggleModel" /> -->
    <ModelTwo theme="sale" @closeTwo="toggleModelTwo">
      <h1>Title Header for show model two</h1>
      <p>Content goes here for show model two</p>
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
    </ModelTwo>
  </div>


  <button @click.alt="toggleModel">Open Model</button>
  <button @click="toggleModelTwo">Open Model Two</button>

</template>

<script>
import Model from './Components/Model.vue'
import ModelTwo from './Components/Model2'
export default {
  name: 'App',
  data() {
    return {
      title: "Todo App",
      // header: "This is the header",
      // text: "This is for the content",
      showModel: false,
      showModelTwo: false
    }
  },
  methods: {
    // handleClick(){
    //   console.log(this.$refs.name);
    //   this.$refs.name.classList.add('active');
    //   this.$refs.name.focus();
    // }
    toggleModel(){
      console.log("Toggle Model One")
      this.showModel = !this.showModel
    },
    toggleModelTwo(){
      console.log("Toggle Model Two")
      this.showModelTwo = !this.showModelTwo
    }
  },
  components: {
    Model,
    ModelTwo
  }
}
</script>

<style>
#app, .model {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <h3>Reaction Time</h3>
  <p>{{ score }}</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return{
            rank: null
        }
    },
    mounted() {
        console.log("mounted")
        if (this.score < 250) {
            this.rank = "Awesome Reflex"
        } else if (this.score < 400){
            this.rank = "Rapid Reflex"
        }else{
            this.rank = "Snail Pace..."
        }
    }
}
</script>

<style>
    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>
<template>
    <div class="backdrop" @click.self="closeModelTwo">
        <div class="model" :class="{sale: theme === 'sale'}">
            <!-- <h1>{{ header }}</h1>
            <p>{{ text }}</p> -->
            <slot>default content</slot>
            <div class="action">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ModelTwo',
  props: ['theme'],
  methods: {
      closeModelTwo(){
          this.$emit('closeTwo');
          console.log("Close Two")
      }
  }
}
</script>

<style>
    .model{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    p{
        font-style: normal;
    }
    .model.sale{
        background: crimson;
        color: white;
    }
    .model.sale h1{
        color: white;
    }
    .model .action{
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .model .action a{
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
    .model.sale .action{
        color: white;
    }
    .model.sale .action a{
        color: white;
    }
</style>

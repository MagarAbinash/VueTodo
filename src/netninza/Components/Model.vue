<template>
    <div class="backdrop">
        <div class="model">
            <p>Model Content Right Here</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Model',
}
</script>

<style scoped>
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
</style>

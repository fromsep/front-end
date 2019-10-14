<template>
    <div id="index">
        这个是Index页面
    </div>
</template>

<script>
export default {
    name: 'Index',
    props: {
        message: '这个是Index页面'
    }    
}
</script>

<style scoped>
    #index {
        font-size: 50px;
        color: red;
        background-color: lightgreen;
    }
</style>
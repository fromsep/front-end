<template>
    <div class="mdui-row">
        <div class="left mdui-col-md-3 mdui-col-xs-12">
            <button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-indigo" @click="view">Button</button>
        </div>
        <div class="right mdui-col-md-3 mdui-col-xs-12">A</div>
        <div class="right mdui-col-md-3 mdui-col-xs-12">B</div>
        <div class="right mdui-col-md-3 mdui-col-xs-12">C</div>
    </div>
</template>

<script>
export default {
    methods: {
         view() {
             console.log(this)
         },
    }
}
</script>

<style scoped>
    div.mdui-row {
        /* height: 500px; */
    }
    .left {
        /* background-color: lightgray; */
        height: 500px;
    }
    .right {
        /* background-color: lightgreen; */
        height: 500px;
    }
</style>
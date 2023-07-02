<template>
    <div class="">
        <!-- 顶部 -->
        <div class="header">
            <div class="open">
                <i v-if="!isCollapse" class="iconfont icon-right-indent" @click="changMenu"></i>
                <i v-else class="iconfont icon-left-indent" @click="changMenu"></i>
            </div>
            <div class="Breadcrumb">
                <Breadcrumb></Breadcrumb>
            </div>
        </div>
        <!-- 内容 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ['isCollapse'],
    data() {
        return {

        }
    },
    methods: {
        changMenu() {
            this.$emit('changShow')
        }
    },
}
</script>

<style lang="less" scoped>
.header {
    display: block;
    height: 50px;
    color: #000;
    line-height: 50px;
    overflow: hidden;
    background: #FFF;
    border-bottom: 1px solid #D8DCE5;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    position: relative;

    .open {
        .iconfont {
            margin-left: 15px;
            font-size: 22px;
            cursor: pointer;
        }
    }
    .Breadcrumb{
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        left: 65px;
        top: 18px;
    }
}
</style>

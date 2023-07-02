<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in navs" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: "Breadcrumb",
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        navs() {
            console.log('路由信息', this.$route.matched);
            let routes = this.$route.matched
            return routes
        },
    },
    created() {
        //包含了当前的路由信息，以及上级路由的信息
        console.log(this.$route.matched);
    }
}
</script>

<style lang="less" scoped></style>

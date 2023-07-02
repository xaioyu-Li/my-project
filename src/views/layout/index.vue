<template>
    <div class="layout">
        <!-- 左侧导航 -->
        <div class="menu">
            <Menu :isCollapse="isCollapse"></Menu>
        </div>
        <!-- 右侧内容 -->
        <div class="content" :class="{ small: isCollapse }">
            <Content @changShow="changShow" :isCollapse="isCollapse"></Content>
        </div>
    </div>
</template>

<script>
import Menu from './menu/index.vue'
import Content from './content/index.vue'
export default {
    components: {
        Menu,
        Content
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        changShow() {
            this.isCollapse = !this.isCollapse
        }
    },
}
</script>

<style lang="less" scoped>
.layout {

    .menu {
        background: #304156;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
    }

    .content {
        padding-left: 200px;
        transition: all 0.45s ease;
    }

    .small {
        padding-left: 64px;
        transition: all 0.45s ease;
    }
}
</style>

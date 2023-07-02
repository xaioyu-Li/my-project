<template>
    <div class="">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#304156" text-color="#fff"
            active-text-color="rgb(64, 158, 255)" router :collapse="isCollapse">
            <el-menu-item>
                <img src="../menu/logo.gif" alt="" style="width: 32px;height: 32px;">
                <span slot="title" style="font-size: 20px;">FastBee</span>
            </el-menu-item>
            <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.path">
                <i :class="`iconfont icon-${item.icon}`"></i>
                <span slot="title">{{ item.lable }}</span>
            </el-menu-item>
            <el-submenu :index="item.path" v-for="item in  hasChildren " :key="item.name">
                <template slot="title">
                    <i :class="`iconfont icon-${item.icon}`"></i>
                    <span>{{ item.lable }}</span>
                </template>
                <el-menu-item-group v-for=" subItem  in  item.children " :key="subItem.name">
                    <el-menu-item :index="subItem.path">
                        <i :class="`iconfont icon-${subItem.icon}`"></i>
                        <span>{{ subItem.lable }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu :index="item.path" v-for="item in  hasChildren1 " :key="item.name">
                <template slot="title">
                    <i :class="`iconfont icon-${item.icon}`"></i>
                    <span>{{ item.lable }}</span>
                </template>
                <el-menu-item-group v-for=" subItem  in  item.children " :key="subItem.name">
                    <el-menu-item :index="subItem.path">
                        <i :class="`iconfont icon-${subItem.icon}`"></i>
                        <span>{{ subItem.lable }}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>

export default {
    props: ['isCollapse'],
    data() {
        return {
            menuDate: [
                {
                    "path": "/",
                    "name": "home",
                    "lable": "首页",
                    "icon": "shouyedashboard",
                    "url": ""
                },
                {
                    "path": "/iot",
                    "lable": "设备管理",
                    "icon": "wulianwang",
                    "url": "",
                    "children": [
                        {
                            "path": "/iot/template",
                            "name": "template",
                            "lable": "通用物模型",
                            "icon": "moxing",
                            "url": "iot/template"
                        },
                        {
                            "path": "/iot/category",
                            "name": "category",
                            "lable": "产品分类",
                            "icon": "category",
                            "url": "iot/category"
                        },
                        {
                            "path": "/iot/product",
                            "name": "product",
                            "lable": "产品管理",
                            "icon": "product-cate",
                            "url": "iot/product"
                        },
                        {
                            "path": "/iot/group",
                            "name": "group",
                            "lable": "设备分组",
                            "icon": "ziyuan-fenzu",
                            "url": "/iot/group"
                        },
                        {
                            "path": "/iot/device",
                            "name": "device",
                            "lable": "设备管理",
                            "icon": "deviceshare",
                            "url": "/iot/device"
                        },
                        {
                            "path": "/iot/alertLog",
                            "name": "alertLog",
                            "lable": "设备警告",
                            "icon": "alert-fill",
                            "url": "/iot/alertLog"
                        },
                        {
                            "path": "/iot/scene",
                            "name": "scene",
                            "lable": "场景联动",
                            "icon": "scenes",
                            "url": "/iot/scene"
                        },
                        {
                            "path": "/iot/sip",
                            "name": "sip",
                            "lable": "视频配置",
                            "icon": "video-camera-full",
                            "url": "/iot/sip"
                        }
                    ]
                },
            ],
            menuDate2: [
                {
                    "path": "/template",
                    "lable": "运维管理",
                    "icon": "tree",
                    "url": "",
                    "children": [
                        {
                            "path": "/template/protocol",
                            "name": "protocol",
                            "lable": "协议管理",
                            "icon": "ziyuanxhdpi",
                            "url": "/template/protocol"
                        },
                        {
                            "path": "/template/template",
                            "name": "template",
                            "lable": "采集点模板",
                            "icon": "theme",
                            "url": "/template/template"
                        },
                        {
                            "path": "/template/simulate",
                            "name": "simulate",
                            "lable": "设备模拟",
                            "icon": "bug",
                            "url": "/template/simulate"
                        },
                        {
                            "path": "/template/firmware",
                            "name": "firmware",
                            "lable": "产品固件",
                            "icon": "gujianshengji",
                            "url": "/template/firmware"
                        }
                    ]
                }

            ]

        }
    },
    methods: {

    },
    computed: {
        //没有子菜单的
        noChildren() {
            return this.menuDate.filter(item => !item.children)
        },
        //有子菜单的
        hasChildren() {
            return this.menuDate.filter(item => item.children)
        },
        noChildren1() {
            return this.menuDate2.filter(item => !item.children)
        },
        //有子菜单的
        hasChildren1() {
            return this.menuDate2.filter(item => item.children)
        }
    }
}
</script>

<style lang="less" >
i {
    margin-right: 16px;
}

.el-menu {
    border-right: 0;

    .el-menu-item-group {
        background-color: #1f2d3d !important;

        .el-menu-item-group__title {
            padding: 0px;
        }

        .el-menu-item {
            background-color: #1f2d3d !important;
            transition: all 0.4s ease;

            &:hover {
                background-color: #001528 !important;
                transition: all 0.4s ease;
            }
        }

    }


}

.el-menu-item-group>ul {
    background-color: #1f2d3d
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>

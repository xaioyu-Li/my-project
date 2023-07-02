const queryLyric = () => {
    const obj = {
        code: 0,
        message: 'ok',
        data: [
            {
                path: '/',
                name: 'home',
                lable: '首页',
                icon: '',
                url: ''
            },
            {
                lable: '设备管理',
                icon: '',
                url: '',
                children: [
                    {
                        path: '/iot/template',
                        name: 'template',
                        lable: '通用物模型',
                        icon: "model",
                        url: "iot/template"
                    },
                    {
                        path: "/iot/category",
                        name: "category",
                        lable: "产品分类",
                        icon: "fenjifenlei",
                        url: "iot/category"
                    },
                    {
                        path: "/iot/product",
                        name: "product",
                        lable: "产品管理",
                        icon: "chanpinguanli",
                        url: "iot/product"
                    },
                    {
                        path: "/iot/group",
                        name: "group",
                        lable: "设备分组",
                        icon: "chanpinguanli",
                        url: "/iot/group"
                    },
                    {
                        path: "/iot/device",
                        name: "device",
                        lable: "设备管理",
                        icon: "deviceshare",
                        url: "/iot/device"
                    },
                    {
                        path: "/iot/alertLog",
                        name: "alertLog",
                        lable: "设备警告",
                        icon: "deviceshare",
                        url: "/iot/alertLog"
                    },
                    {
                        path: "/iot/scene",
                        name: "scene",
                        lable: "场景联动",
                        icon: "deviceshare",
                        url: "/iot/scene"
                    },
                    {
                        path: "/iot/sip",
                        name: "sip",
                        lable: "视频配置",
                        icon: "video-camera-full",
                        url: "/iot/sip"
                    }
                ]
            }
        ]
    }
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve(obj)
            },
            Math.round(Math.random() * (2000 - 500) + 500)
        )
    })
}
const API = {
    queryLyric
}
export default API
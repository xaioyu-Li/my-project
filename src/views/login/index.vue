<template>
    <div class="login">
        <div>
            <el-row :gutter="10">
                <el-col>
                    <div style="
                        width:100%;
                        height: 200px;
                        color: rgb(255, 255, 255);
                        background-color: rgb(15, 115, 238);
                        text-align: center;
                        padding: 15px;
                        font-family: 微软雅黑;
                        ">
                        <div style="font-size: 42px; padding-top: 40px;width: 300px;margin: 0 auto;">
                            <img src="./logo.gif" alt="" style="width: 100px;height: 100px;float: left;">
                            <div style="float: left; margin-top: 13px;width: 200px;text-align: left;">
                                <div>FastBee</div>
                                <div
                                    style="letter-spacing: 1.5px;font-size: 20px; font-weight: 600;margin-top: -8px;margin-left: 3px;">
                                    开源物联网平台</div>
                            </div>
                        </div>

                    </div>
                </el-col>
            </el-row>
        </div>
        <el-form :model="form" :rules="rules" class="login-container">
            <h3 class="login-title">系统登录</h3>
            <!-- 账号 -->
            <el-form-item prop="username">
                <el-input v-model="form.username" placeholder="账号" prefix-icon="iconfont icon-user-fill"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                <el-input type="password" v-model="form.password" placeholder="密码"
                    prefix-icon="iconfont icon-password"></el-input>
            </el-form-item>
            <!-- 登录 -->
            <el-form-item>
                <el-button @click="submit" type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
export default {
    name: "index",
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入您的账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入您的密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        //登录
        submit() {
            const token = Mock.Random.guid()
            Cookie.set('token', token)
            this.$router.push('/')
        }
    },
}
</script>

<style lang="less" scoped>
.login-container {
    margin: 30px auto 0 auto;
    padding: 15px;
    z-index: 1000;
    max-width: 350px;
    text-align: center;
    box-sizing: border-box;

    h3 {

        font-size: 18px;
        margin-bottom: 10px;
    }
}

.el-button {
    width: 320px
}
</style>

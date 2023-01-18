<template>
    <div class="login">
     <el-form :model="loginForm" class="login-form">
        <h3 class="title">LQ后台管理系统</h3>
        <!-- 用户名 -->
       <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="账号">
            <template #prefix>
                <!--   vue3图标使用方式  -->
                <el-icon class="input-icon">
                    <User />
                </el-icon>
            </template>
        </el-input>
       </el-form-item>
       <!-- 密码 -->
       <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="密码">
            <template #prefix>
                <!--   vue3图标使用方式  -->
                <el-icon class="input-icon">
                    <Lock />
                </el-icon>
            </template>
        </el-input>
       </el-form-item>
       <!-- 验证码 -->
       <el-form-item prop="verificationCode">
        <el-input v-model="loginForm.verificationCode" placeholder="验证码"   style="width: 63%">
            <template #prefix>
                <!--   vue3图标使用方式  -->
                <el-icon class="input-icon">
                    <CircleCheck />
                </el-icon>
            </template>
        </el-input>
        <div class="login-verification-code">
          <img :src="verificationCodeUrl"  class="login-verification-code-img"/>
        </div>
       </el-form-item>
       <!-- 记住密码 -->
       <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
       <!-- 登录 -->
       <el-form-item>
        <el-button size="medium" style="width:100%;" type="primary" :loading="loading" @click="handleLogin">
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
        </el-button>
       </el-form-item>
     </el-form>
    <!--  底部  -->
        <div class="login-footer">
            <span>Copyright © 2022-2023 liuqi.vp All Rights Reserved.</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            verificationCodeUrl: 'https://pic.169pp.net/169mm/202207/006/2.jpg',
            loginForm:{
                username: 'admin',
                password: 'admin',
                verificationCode: '',
                rememberMe: false
            },
            loading: false,//登录状态
        }
    },
    methods:{
        
        handleLogin(){ // 登录方法
            console.log("获取form表单信息 ",this.$refs)
        }
    }
}
</script>


<style rel="stylesheet/scss" lang="scss">
.login{
    display: flex;
    justify-content: center; //主轴元素对齐方式
    align-items: center; // 交叉轴元素对齐方式//单行  交叉轴的中点对齐
    height: 100%;
    background-image: url("https://pic.169pp.net/169mm/202101/276/1.jpg"); //背景图片
    background-size: cover; //背景图片大小
}
.title{
    margin: 0px auto 30px auto;
    text-align: center; //标题居中
    color: #707070; //标题颜色
}
.login-form{
    border-radius: 6px;
    background: #ffffff; //表单颜色
    width: 400px; // 表单宽度
    padding: 25px 25px 5px 25px; // 边距
    .el-input{
        height: 38px;
        input{
            height: 38px;
        }
    }
    .input-icon{
        height: 39px;
        width: 14px;
        margin-left: 2px;

    }
}
.login-verification-code{
    width: 33%;
    height: 38px;
    float: right;
    img{
        cursor: pointer;
        vertical-align: middle;
    }
}
.login-verification-code-img{
    height: 38px;
}

.login-footer{
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    // color: #fff;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
}
</style>
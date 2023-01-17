<template>
    <div class="login">
     <el-form :model="loginForm">
        <h3>LQ后台管理系统</h3>
        <!-- 用户名 -->
       <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="账号"></el-input>
       </el-form-item>
       <!-- 密码 -->
       <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
       </el-form-item>
       <!-- 验证码 -->
       <el-form-item prop="verificationCode">
        <el-input v-model="loginForm.verificationCode" placeholder="验证码"></el-input>
        <div class="login-code">
          <img :src="verificationCodeUrl"  class="login-verification-code-img"/>
        </div>
       </el-form-item>
     </el-form>
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
                verificationCode: ''

            }
        }
    }
}
</script>


<style rel="stylesheet/scss" lang="scss">
.login-verification-code-img{
    height: 38px;
}
</style>
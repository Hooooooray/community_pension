<template>
    <div class="login">
        <div class="account-login-module">
            <!-- 登录验证表单 -->
            <transition name="el-fade-in-linear">
                <div v-show="showLogin" class="loginPageWrapper">
                    <div class="headerToggle">
                        <span class="signInWithEmail">
                            邮箱登录
                        </span>
                    </div>
                    <div class="form-wrap login-form">
                        <el-form :model="loginForm" :rules="loginRules" ref="ruleForm" class="demo-ruleForm">
                            <el-form-item class="el-item" prop="email">
                                <el-input class="rounded-input" v-model="loginForm.email" placeholder="请输入邮箱"></el-input>
                            </el-form-item>
                            <el-form-item class="el-item" prop="password">
                                <el-input class="rounded-input" :type="showPassword ? 'text' : 'password'"
                                    placeholder="请输入密码" v-model="loginForm.password"></el-input>
                                <img class="eye-icon" :src="showPassword ? 'images/eye-on.png' : 'images/eye-close.png'"
                                    @click="togglePasswordVisibility" />
                                <el-button class="forget-password" type="text" @click="clickForget">忘记密码？</el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="login-button" type="primary" @click="submitForm">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="emailLogin-noAccount">没有邮箱账号？
                        <el-button class="create-account" type="text" @click="clickCreate">创建账号</el-button>
                    </div>
                </div>
            </transition>

            <!-- 创建账户验证表单 -->
            <transition name="el-fade-in-linear">
                <div v-show="showCreate" class="loginPageWrapper">
                    <div class="headerToggle">
                        <span class="create-account-title">
                            <img class="back" :src="isBackHovered ? 'images/back-active.png' : 'images/back.png'"
                                @click="handleCreateBackClick" @mouseover="handleBackOver" @mouseout="handleBackOut" alt="">
                            创建账号
                        </span>
                    </div>
                    <div class="form-wrap create-form">
                        <el-form :model="commonForm" :rules="commonRules" ref="ruleForm" class="demo-ruleForm">
                            <el-form-item class="el-item" prop="email">
                                <el-input class="rounded-input" v-model="commonForm.email" placeholder="请输入你的邮箱"></el-input>
                            </el-form-item>
                            <el-form-item class="el-item" prop="password">
                                <el-input class="rounded-input code-input" placeholder="请输入邮箱验证码" v-model="commonForm.code">
                                    <el-button :disabled="isGetCodeDisabled" @click="getCode()" slot="append">{{ getCodeTxt
                                    }}</el-button>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="login-button" type="primary" @click="submitCreate">继续</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </transition>

            <!-- 忘记密码验证表单 -->
            <transition name="el-fade-in-linear">
                <div v-show="showReset" class="loginPageWrapper">
                    <div class="headerToggle">
                        <span class="create-account-title">
                            <img class="back" :src="isBackHovered ? 'images/back-active.png' : 'images/back.png'"
                                @click="handleResetBackClick" @mouseover="handleBackOver" @mouseout="handleBackOut" alt="">
                            重置密码
                        </span>
                    </div>
                    <div class="form-wrap create-form">
                        <el-form :model="commonForm" :rules="commonRules" ref="ruleForm" class="demo-ruleForm">
                            <el-form-item class="el-item" prop="email">
                                <el-input class="rounded-input" v-model="commonForm.email" placeholder="请输入你的邮箱"></el-input>
                            </el-form-item>
                            <el-form-item class="el-item" prop="password">
                                <el-input class="rounded-input code-input" placeholder="请输入邮箱验证码" v-model="commonForm.code">
                                    <el-button :disabled="isGetCodeDisabled" @click="getCode()" slot="append">{{ getCodeTxt
                                    }}</el-button>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button class="login-button" type="primary" @click="submitReset">继续</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </transition>

            <!-- 设置密码 -->
            <transition name="el-fade-in-linear">
                <div v-show="showsetPassword" class="loginPageWrapper">
                    <div class="headerToggle">
                        <span class="create-account-title">
                            <img class="back" :src="isBackHovered ? 'images/back-active.png' : 'images/back.png'"
                                @click="handleSetPasswordBackClick" @mouseover="handleBackOver" @mouseout="handleBackOut" alt="">
                            设置密码
                        </span>
                    </div>
                    <div class="form-wrap create-form">
                        <el-form :model="commonForm" :rules="commonRules" ref="ruleForm" class="demo-ruleForm">
                            <el-form-item class="el-item" prop="password">
                                <el-input class="rounded-input" :type="showPassword ? 'text' : 'password'"
                                    placeholder="请输入密码" v-model="loginForm.password"></el-input>
                                <img class="eye-icon" :src="showPassword ? 'images/eye-on.png' : 'images/eye-close.png'"
                                    @click="togglePasswordVisibility" />
                            </el-form-item>
                            <el-form-item class="el-item" prop="password">
                                <el-input class="rounded-input" :type="showPassword ? 'text' : 'password'"
                                    placeholder="请再次确认密码" v-model="loginForm.rePassword"></el-input>
                                <img class="eye-icon" :src="showPassword ? 'images/eye-on.png' : 'images/eye-close.png'"
                                    @click="togglePasswordVisibility" />
                            </el-form-item>
                            <el-form-item>
                                <el-button class="login-button" type="primary" @click="submitSetPassword">确认</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </transition>
        </div>


    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
            showPassword: false,
            showLogin: true,
            showCreate: false,
            showReset: false,
            isBackHovered: false,
            isGetCodeDisabled: false,
            showsetPassword:false,
            getCodeTxt: "获取验证码",
            interval:null,
            loginForm: {
                email: '',
                password: '',
                rePassword:'',
            },
            loginRules: {
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: ['blur'] }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 11, message: '密码长度应为6-11位', trigger: 'blur' },
                    { pattern: /^(?![0-9]*$)([A-Za-z0-9]+$)/, message: '密码只能由数字字母组成，并且不能是纯数字或者是特殊字符', trigger: 'blur' }
                ]
            },

            commonForm: {
                email: '',
                code: ''
            },
            commonRules: {
                email: [
                    { type: 'email', message: '邮箱格式不正确', trigger: ['blur'] }
                ],
                code: [

                ]
            },
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        // 登录
        submitForm() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                }
            });
        },
        // 提交创建账户验证表单
        submitCreate() {

        },
        // 提交重置密码验证表单
        submitReset() {

        },
        // 确定设置密码
        submitSetPassword(){

        },
        // 获取验证码
        getCode() {
            console.log(this.commonForm.email, this.commonForm.code)
            // 成功后倒计时
            this.isGetCodeDisabled = true
            let time = 60
            this.interval = setInterval(() => {
                if(time>=0){
                    this.getCodeTxt = `重新获取(${time}s)`
                    time --
                }else{
                    this.getCodeTxt = '重新获取验证码'
                    clearInterval(this.interval)
                }
            }, 1000);

        },
        clickCreate() {
            this.showLogin = false
            setTimeout(() => {
                this.showCreate = true
            }, 300);
        },
        clickForget() {
            this.showLogin = false
            setTimeout(() => {
                this.showReset = true
            }, 300);
        },
        handleCreateBackClick() {
            this.showCreate = false,
            this.getCodeTxt = "获取验证码",
            this.isGetCodeDisabled = false,
            clearInterval(this.interval)
            setTimeout(() => {
                this.showLogin = true
            }, 300);
        },
        handleResetBackClick() {
            this.showReset = false
            this.getCodeTxt = "获取验证码",
            this.isGetCodeDisabled = false,
            clearInterval(this.interval)
            setTimeout(() => {
                this.showLogin = true
            }, 300);
        },
        handleSetPasswordBackClick(){
            this.showsetPassword = false
            setTimeout(() => {
                this.showLogin = true
            }, 300);
        },

        handleBackOver() {
            this.isBackHovered = true
        },
        handleBackOut() {
            this.isBackHovered = false
        },



    }
}
</script>

<style>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;

    .account-login-module {
        width: 520px;

        .loginPageWrapper {
            width: 480px;

            .login-form {
                .el-input__inner {
                    border-radius: 40px;
                }
            }

            .create-form {
                .el-input__inner {
                    border-radius: 40px;
                }

                .code-input {
                    .el-input__inner {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                        border-right: none;
                    }

                    .el-input-group__append {
                        background: #436FF6;
                        color: #fff;
                        border: none;
                        border-top-right-radius: 40px;
                        border-bottom-right-radius: 40px;
                        font-size: 16px;
                        cursor: pointer;
                    }

                    .el-input-group__append:hover {
                        background: #89A6F6;
                    }

                    .el-input-group__append:active {
                        background: #5A82F5;
                    }

                    .el-button.is-disabled {
                        background: #5A82F5;
                        color: #fff;
                        border-top-right-radius: 40px;
                        border-bottom-right-radius: 40px;
                    }
                }
            }

            .headerToggle {
                margin-top: 80px;
                height: 41px;

                .signInWithEmail {
                    display: inline-block;
                    line-height: 33px;
                    font-size: 24px;
                    height: 41px;
                    font-weight: 500;
                    color: #3370ff;
                    border-bottom: 2px #3370ff solid;
                }

                .create-account-title {
                    font-size: 24px;
                    line-height: 33px;
                    font-weight: 500;
                    display: inline-block;
                    height: 41px;
                    color: #1f2329;
                    display: flex;
                    align-items: center;

                    .back {
                        width: 20px;
                        margin-right: 16px;
                        cursor: pointer;
                    }
                }
            }

            .form-wrap {
                margin-top: 40px;

                .el-item {
                    margin-bottom: 32px;
                    position: relative;
                }

                .eye-icon {
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translate(0, -50%);
                    cursor: pointer;
                }

                .forget-password {
                    position: absolute;
                    right: 0;
                    top: 35px;
                }

                .login-button {
                    font-size: 16px;
                    font-weight: 400;
                    margin-top: 32px;
                    height: 40px;
                    width: 100%;
                    border-radius: 40px;
                    background-color: #436FF6;
                }
            }

            .emailLogin-noAccount {
                margin: 12px 0 64px;
            }

        }
    }


}
</style>
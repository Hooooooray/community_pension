<template>
    <div id="app">
        <div class="nav">
            <el-row class="el-row-nav">
                <el-col :span="12">
                    <img src="" alt="">
                </el-col>
                <el-col :span="12" class="el-row-right">
                    <el-menu active-text-color="#3370ff" :default-active="activeIndex" class="el-menu-demo"
                        mode="horizontal" @select="handleSelect">
                        <el-menu-item index="/home">主页</el-menu-item>
                        <el-menu-item index="/news">新闻中心</el-menu-item>
                        <el-menu-item index="/activity">活动推荐</el-menu-item>
                        <el-menu-item index="/login" class="nav-login">登录</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <router-view />
    </div>
</template>
  
<script>

export default {
    name: 'mainView',
    data() {
        return {
            activeIndex: this.$route.path || '/home',
        };
    },
    watch: {
    // 监听路由变化
    $route(to) {
      if (to.path !== this.activeIndex) {
        this.activeIndex = to.path;
      }
    },
  },
    methods: {
        handleSelect(key) {
            if (this.activeIndex !== key) {
            this.activeIndex = key;
            this.$router.push(key);
        }
        }
    }
};

</script>
  
<style scoped lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #646a73;

    .nav {
        li {
            padding: 0;
            margin-left: 40px;
        }

        .nav-login {
            margin-left: 65px;
        }

        .nav-login::before {
            content: '';
            display: block;
            height: 10px;
            border-right: 1px solid #bbbfc4;
            position: absolute;
            top: 25px;
            left: -32px;
        }

        .el-menu-demo {
            height: 64px;
        }

        .el-menu.el-menu--horizontal {
            border-bottom: none !important;
        }

        .el-row-nav {
            border-bottom: 1px solid #e6e6e6;
        }

        .el-row-right {
            padding-left: 10px;
        }
    }
}
</style>
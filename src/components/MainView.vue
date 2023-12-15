<template>
    <div id="app">
        <div class="nav" :class="{ 'nav-home': isHome }">
            <div class="nav-left"></div>
            <div class="nav-right">
                <el-menu active-text-color="#3370ff" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                    @select="handleSelect">
                    <el-menu-item class="el-menu-item" index="/home">主页</el-menu-item>
                    <el-menu-item class="el-menu-item" index="/news">新闻中心</el-menu-item>
                    <el-menu-item class="el-menu-item" index="/activity">活动推荐</el-menu-item>
                    <el-menu-item class="el-menu-item nav-login" index="/login">登录</el-menu-item>
                </el-menu>
            </div>
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
    computed: {
        isHome() {
            return this.$route.path === '/home';
        },
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
        display: flex;
        height: 64px;
        border-bottom: 1px solid #e6e6e6;
        background: #ffffff00;
        min-width: 990px;

        .nav-left {
            flex: 12;
        }

        .nav-right {
            flex: 12;
        }

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
            padding-left: 10px;
        }

        .el-menu.el-menu--horizontal {
            border-bottom: none !important;
        }

        .el-menu-item {
            height: 48px;
        }
    }

    .nav-home {
        position: absolute;
        z-index: 999;
        width: 100%;
        border-bottom: 0;

        .el-menu-demo {
            background: #ffffff00;
            color: #fff;

            .el-menu-item {
                background: #ffffff00;
                color: #303133;
            }
        }
    }
}</style>
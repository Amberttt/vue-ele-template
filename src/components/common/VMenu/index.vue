<template>
    <div class="v-menu">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <!-- 导航菜单 -->
        <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <template v-for="(item,i) in menu">
                <!-- 下拉菜单 -->
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="i">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.title}}</span>
                        </template>
                        <el-menu-item-group>
                            <!-- <span slot="title">分组一</span> -->
                            <el-menu-item v-for="(sub,j) in item.subs" :index="sub.index" :key="j">{{sub.title}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="i">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
/* eslint-disable no-console */
export default {
    data() {
        return {
            isCollapse: false,
            menu: [
                {
                    icon: 'el-icon-menu',
                    index: '/A',
                    title: 'A',
                    show: true
                },
                {
                    icon: 'el-icon-document',
                    index: '/B',
                    title: 'B',
                    show: true
                },
                {
                    icon: 'el-icon-setting',
                    index: '/C',
                    title: 'C',
                    show: true
                },
                {
                    icon: 'el-icon-location',
                    index: '/mine',
                    title: 'Mine',
                    show: true
                },
                {
                    // icon: require("./设置@2x.png"),
                    icon: 'el-icon-setting',
                    index: "/setting",
                    title: "设置",
                    show: true,
                    subs: [
                        {
                            index: "/setting-a",
                            title: "· 设置A",
                            show: true
                        },{
                            index: "/setting-b",
                            title: "· 设置B",
                            show: true
                        },{
                            index: "/setting-c",
                            title: "· 设置C",
                            show: true
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        defaultActive(){
            return this.$route.path || '/';
        }
    },
    created(){
        console.log(this.$route.path,'---当前路由---');
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="stylus">
.v-menu
    height: 100%;
    .el-menu-vertical-demo:not(.el-menu--collapse)
        width: 200px;
        height: 100%;
</style>

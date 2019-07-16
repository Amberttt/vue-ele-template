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
                            <el-menu-item v-for="(sub,j) in item.subs" :index="sub.index" :key="j">{{item.title}}</el-menu-item>
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
export default {
    data() {
        return {
            isCollapse: false,
            defaultActive: this.$route.path || '',
            menu: [
                {
                    // icon: require("./我的@2x.png"),
                    icon: 'el-icon-location',
                    index: "/wode",
                    title: "我的",
                    show: true,
                    subs: [
                        {
                            index: "/wodeni",
                            title: "· 我的你",
                            show: true
                        },{
                            index: "/wodewho",
                            title: "· 我的谁",
                            show: true
                        }
                    ]
                },
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
                    icon: 'el-icon-setting',
                    index: '/mine',
                    title: 'mine',
                    show: true
                }
            ]
        };
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

<template>
    <div class="main">
        <el-container>
            <el-header>
                <v-header></v-header>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <v-menu></v-menu>
                </el-aside>
                <el-main>
                    <router-view :key="new Date().getTime()"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import VHeader from 'common/VHeader';
import VMenu from 'common/VMenu';
export default {
    name: 'Main',
    components: {
        VHeader,
        VMenu
    }
    // data () {

    // }
}
</script>
<style lang="stylus">
.main
    width: 100%;
    height: 100%;
    .el-header
        padding: 0;
    .el-container
        width: 100%;
        height: 100%;
</style>

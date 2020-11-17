<template>
  <div class="my-menu">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#555555"
      text-color="#fff"
      active-text-color="#999"
      :unique-opened="true"
      :router="true"
    >
      <el-submenu index="/seat">
        <template slot="title">
          <i class="el-icon-food"></i>
          <span>餐桌管理</span>
        </template>

        <el-menu-item index="/seat/list">
          <template slot="title">
            <i class="el-icon-food"></i>
            <span>餐桌列表</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/seat/add">
          <template slot="title">
            <i class="el-icon-food"></i>
            <span>添加餐桌</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/center">
        <template slot="title">
          <i class="el-icon-food"></i>
          <span>店铺管理</span>
        </template>

        <el-menu-item index="/center/info">
          <template slot="title">
            <i class="el-icon-food"></i>
            <span>店铺信息</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: '/seat/list'
    };
  },
  methods: {},
  mounted() {

    // 刷新页面时能让菜单定位到当前的路由
    this.defaultActive = this.$route.path
  }
};
</script>

<style lang="less">
.el-menu {
  width: 280px;
  overflow-x: hidden;
}
</style>
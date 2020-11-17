<template>
  <div class="home">
    <el-container>
      <el-aside width="280px">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header>
          <span class="title">餐饮管理</span>
          <span class="logout" @click="logout">logout</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Menu,
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.el-header {
  color: #333;
  line-height: 60px;
  position: fixed;
  left: 280px;
  right: 0;
  top: 0;
  height: 60px;
  // border-bottom: 1px solid #ccc;
  background: #ddd;
  .title {
    color: #555;
    font-size: 36px;
  }
  .logout {
    position: absolute;
    right: 0;
    top: 0;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: #999;
    }
  }
}

.el-aside {
  color: #333;
  text-align: left;
  position: fixed;
  left: 0;
  width: 280px;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #555555;
}

.el-main {
  color: #333;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 280px;
  right: 0;
}
</style>

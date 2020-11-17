<template>
  <div class="seat-add">
    <el-form label-width="100px">
      <el-form-item label="桌 号:">
        <el-input type="text" v-model="seatId"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seatId: "",
    };
  },
  methods: {
      submit(){
          this.$store.dispatch('addSeatFun', this.seatId)
          this.$router.push('/seat/list')
      }
  },
};
</script>

<style lang="less">
.seat-add {
  .el-form {
    width: 600px;
  }
}
</style>
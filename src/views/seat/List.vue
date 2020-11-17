<template>
  <div class="seat-list">
    <div class="seat-wrap">
      <div
        class="seat-item"
        ref="seatItem"
        v-for="(item, index) in seatData"
        :key="item.uid"
      >
        <el-button
          class="delete-btn"
          type="danger"
          icon="el-icon-delete"
          circle
          @click="deleteSeat(index)"
        ></el-button>
        <div class="seat-num">
          第 <span class="seat-num-detail">{{ item }}</span> 桌
        </div>
        <el-button @click="editSeat(index)" class="edit-btn">编辑</el-button>
        <el-button type="primary" @click="toDetail(item)" class="show-btn"
          >查看</el-button
        >
        <el-button @click="confirmSeat(index)" class="confirm-btn hide"
          >确认</el-button
        >-
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seatData: [],
    };
  },
  computed: {
    seatDataDefault() {
      return this.$store.state.seatData;
    },
  },
  methods: {
    editSeat(index) {
      var seatItem = this.$refs.seatItem[index];
      var numDetail = seatItem.getElementsByClassName("seat-num-detail")[0];
      var editBtn = seatItem.getElementsByClassName("edit-btn")[0];
      var confirmBtn = seatItem.getElementsByClassName("confirm-btn")[0];
      editBtn.classList.add("hide");
      confirmBtn.classList.remove("hide");
      numDetail.classList.add("focus");
      numDetail.setAttribute("contenteditable", true);
      numDetail.focus();
    },
    confirmSeat(index) {
      var seatItem = this.$refs.seatItem[index];
      var numDetail = seatItem.getElementsByClassName("seat-num-detail")[0];
      var editBtn = seatItem.getElementsByClassName("edit-btn")[0];
      var confirmBtn = seatItem.getElementsByClassName("confirm-btn")[0];
      editBtn.classList.remove("hide");
      confirmBtn.classList.add("hide");
      numDetail.classList.remove("focus");
      numDetail.removeAttribute("contenteditable");
      this.$store.dispatch("changeSeatDataFun", {
        index: index,
        data: numDetail.innerHTML,
      });
    },

    toDetail(index) {
      this.$router.push({
        path: "/seat/detail",
        query: {
          index: index,
        },
      });

      this.$store.dispatch("changeCurSeatFun", index);
    },

    // 删除：
    deleteSeat(index) {
      this.$store.dispatch("deleteSeatDataFun", index);
    },
  },
  created() {
    this.seatData = this.$store.state.seatData;
  },
  watch: {
    seatDataDefault(newVal) {
      this.seatData = newVal;
    },
  },
};
</script>


<style lang="less">
.seat-list {
  .seat-wrap {
    .seat-item {
      display: inline-block;
      width: 250px;
      height: 250px;
      background: #aaa;
      border-radius: 5px;
      margin: 5px;
      text-align: center;
      position: relative;
      vertical-align: top;
      .seat-num {
        margin-top: 70px;
        display: inline-block;
        white-space: nowrap;
        font-size: 30px;
        color: #fff;
        .seat-num-detail {
          display: inline-block;
          white-space: unset;
          max-width: 120px;
          vertical-align: top;
          overflow-x: auto;
          overflow-y: hidden;
          &.focus {
            display: inline-block;
            width: 120px;
            height: 80px;
            vertical-align: middle;
            background: #eee;
            color: #888;
            line-height: 80px;
          }
        }
      }
      .el-button {
        &.delete-btn {
          position: absolute;
          right: 5px;
          top: 5px;
        }
        &.edit-btn,
        &.show-btn,
        &.confirm-btn {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          &:active,
          &:hover,
          &:focus {
            color: #1f1f1f;
            border-color: #aaa;
            background: #ddd;
          }
          &.show-btn {
            left: unset;
            transform: unset;
            right: 10px;
          }
          &.hide {
            display: none;
          }
        }
      }
    }
  }
}
</style>
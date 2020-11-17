<template>
  <div class="seat-detail">
    <h1>餐桌详情</h1>
    <div class="seat-detail-wrap">
      <div class="cur-seat">
        当前第 <span class="color-default">{{ curSeat }}</span> 桌
      </div>
      <div class="food-list-title">点餐列表</div>
      <ul class="food-list">
        <li class="food-item">
          <div class="food-index">序号</div>
          <div class="food-name">餐品</div>
          <div class="food-count">数量</div>
          <div class="food-per-price">单价</div>
          <div class="food-price">总价</div>
        </li>
        <li class="food-item" v-for="(item, index) in foodList" :key="item.id">
          <div class="food-index">{{ index + 1 }}</div>
          <div class="food-name">{{ item.name }}</div>
          <div class="food-count">{{ item.count }}</div>
          <div class="food-per-price">{{ item.price }}</div>
          <div class="food-price">
            {{ parseInt(item.price) * parseInt(item.count) }}
          </div>
        </li>
      </ul>
    </div>

    <div class="back">
      <el-button type="primary" @click="back">返回座位列表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curSeat: this.$store.state.curSeat || this.$route.query.index,
      foodList: [
        {
          id: 1,
          name: "红烧里脊",
          count: 10,
          price: 21,
        },
        {
          id: 2,
          name: "红烧里脊",
          count: 4,
          price: 20,
        },
        {
          id: 3,
          name: "红烧里脊",
          count: 4,
          price: 54,
        },
        {
          id: 4,
          name: "红烧里脊",
          count: 10,
          price: 20,
        },
        {
          id: 5,
          name: "红烧里脊",
          count: 10,
          price: 20,
        },
        {
          id: 6,
          name: "红烧里脊",
          count: 10,
          price: 20,
        },
        {
          id: 7,
          name: "红烧里脊",
          count: 10,
          price: 20,
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.push("/seat/list");
    },
  },
  created() {},
};
</script>

<style lang="less">
.seat-detail {
  h1 {
    font-size: 24px;
    padding: 0px 50px 4px 4px;
    display: inline-block;
    border-bottom: 2px solid grey;
    text-align: left;
    margin-bottom: 50px;
  }
  .seat-detail-wrap {
    .cur-seat {
      font-size: 20px;
      margin-bottom: 50px;
      .color-default {
        color: tomato;
      }
    }
    .food-list-title {
      font-size: 18px;
      line-height: 32px;
      font-style: italic;
    }
    .food-list {
      .food-item {
        font-size: 16px;
        line-height: 36px;
        border-bottom: 1px solid #aaa;
        & > div {
          display: inline-block;
          text-align: center;
        }
        .food-index {
          width: 50px;
          text-align: left;
        }
        .food-name {
          width: 200px;
        }
        .food-count {
          width: 60px;
        }
        .food-per-price {
          width: 100px;
        }
        .food-price {
          width: 200px;
          text-align: right;
        }
      }
    }
  }
  .back {
    margin-top: 50px;
    text-align: right;
  }
}
</style>
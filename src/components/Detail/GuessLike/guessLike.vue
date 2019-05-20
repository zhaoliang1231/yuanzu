<template>
  <div>
    <div id=Maylove>
        <div class="yCmsContentSlot">
      <h4 class="redTitle">猜你喜欢</h4>
      <ul class="likeProductList">
        <li v-for=" i in list">
          <a href="/p/100000027">
            <img :src="i.img" :alt="i.name">
          </a>
          <em>¥{{i.monery}}</em>
          <strong>{{i.name}}</strong>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
import img1 from "static/img/100000027_M.jpg";
import img2 from "static/img/100001236_M.jpg";
import img3 from "static/img/100001262_M.jpg";
import img4 from "static/img/100001272_M.jpg";
import img5 from "static/img/100001239_M.jpg";
import img6 from "static/img/100001279_M.jpg";
export default {
  name: "guessLike",
  data() {
    return {
      list: [
        { name: "甜蜜如心鲜奶蛋糕", img: img1, monery: "258.00" },
        { name: "朵朵咖啡鲜奶蛋糕", img: img2, monery: "258.00"},
        { name: "8号桃花扇鲜奶蛋糕", img: img3, monery: "258.00" },
        { name: "樱香漫漫鲜奶蛋糕", img: img4, monery: "258.00" },
        { name: "元祖萌虎鲜奶蛋糕", img: img5, monery: "258.00" },
        { name: "金蜜蜂鲜奶蛋糕", img: img6, monery: "258.00" }
      ]
    };
  }
};
</script>

<style scoped lang="less">
#Maylove {
    float: right;
    width: 190px;
    background-color: #fff;
}
.yCmsContentSlot {
  width: 190px;
  .redTitle {
    padding: 0 13px;
    height: 30px;
    line-height: 30px;
    position: relative;
    overflow: hidden;
    color: #fff;
    margin-bottom: 10px;
    background-color: #e50150;
  }
  .likeProductList {
    width: 170px;
    margin: 0 auto;
    li {
      width: 170px;
      margin-bottom: 10px;
      img {
        width: 170px;
        height: 170px;
        display: block;
        border: none;
        vertical-align: middle;
      }
      em {
        height: 27px;
        line-height: 27px;
        text-align: right;
        overflow: hidden;
        font-weight: bold;
        color: #e70050;
        display: block;
        font-style: normal;
      }
      strong {
        height: 36px;
        line-height: 18px;
        overflow: hidden;
        font-weight: normal;
        display: block;
      }
    }
  }
}
</style>

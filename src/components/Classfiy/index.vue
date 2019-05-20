<template>
  <div class="classfiy">
    <div class="classfiy-top">
      <router-link to="/">
        <span class="mn-a">首页</span>
      </router-link> >
      <router-link to="/">
        <span class="mn-a">蛋糕</span>
      </router-link>
    </div>
    <div class="classfiy-banner">
      <img src="~static/img/classfiy-banner.jpg"/>
    </div>
    <div class="results">
      <p class="fontSize-24">您搜索的是 "蛋糕"</p>
    </div>
    <div class="clearfix">
      <div class="classfiy-content fl">
        <el-tag
          :key="i"
          v-for="(tag,i) in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(i,tag.op)">
          {{tag.name}}
        </el-tag>
        <el-collapse>
          <el-collapse-item title="类别">
        <span
          :key="i"
          v-for="(classfiy,i) in classfiyArr"
          v-if="classfiy.isShow"
          @click="addTab(i,classfiy.op)"
          class="fontSize-15 mn-a font-color-lightgrey">
          {{classfiy.name}} （{{classfiy.Number}}）
        </span>
          </el-collapse-item>
          <el-collapse-item title="价格">
        <span
          :key="i"
          v-for="(rice,i) in PriceArr"
          v-if="rice.isShow"
          @click="addTab(i,rice.op)"
          class="fontSize-15 mn-a font-color-lightgrey">
          {{rice.name}} （{{rice.Number}}）
        </span>
          </el-collapse-item>
        </el-collapse>
        <div class="classfiy-nav">
          <ul>
            <li class="fl">
              <div class="zonghepaixu ">
               <span class="zonghepaixu-text fontSize-15 font-color-white">综合排序</span>
              </div>
            </li>
            <li class="fl">
              <DropDown :op = "0"/>
            </li>
            <li class="fl">
              <DropDown :op="1"/>
            </li>
            <li class="fengye fr">
             <span class=""> 1/7 </span> <span class="el-icon-arrow-right"></span>
            </li>
            <li class="shangp fontSize-14 fr">
            共<span class="fontSize-14 font-color-red">79</span>件商品
            </li>
          </ul>
        </div>
        <div class="classfiy-goods-lists">
          <div class="classfiy-goods-list clearfix">
            <router-link to="detail">
              <img class="classfiy-goods-img fl" src="~static/img/testimg2.jpg"/>
            </router-link>
            <div class="classfiy-goods-miaoshu fl">
              <router-link to="detail">
                <p class="classfiy-goods-miaoshu-title mn-a fontSize-18">天亦有情鲜奶蛋糕</p>
                <span class="fontSize-14">送给婚礼的祝福，三生三世情缘</span>
              </router-link>
            </div>
            <div class="classfiy-goods-Price fl">
              <span class="fontSize-24 font-color-red">¥1,250.00</span>
            </div>
            <div class="classfiy-goods-Btn fl">
              <router-link to="detail">
                <span class="classfiy-goods-bt fontSize-18 font-color-white">立即购买</span>
              </router-link>
            </div>
          </div>
          <div class="classfiy-goods-list clearfix">
            <router-link to="detail">
              <img class="classfiy-goods-img fl" src="~static/img/testimg2.jpg"/>
            </router-link>
            <div class="classfiy-goods-miaoshu fl">
              <router-link to="detail">
                <p class="classfiy-goods-miaoshu-title mn-a fontSize-18">天亦有情鲜奶蛋糕</p>
                <span class="fontSize-14">送给婚礼的祝福，三生三世情缘</span>
              </router-link>
            </div>
            <div class="classfiy-goods-Price fl">
              <span class="fontSize-24 font-color-red">¥1,250.00</span>
            </div>
            <div class="classfiy-goods-Btn fl">
              <router-link to="detail">
                <span class="classfiy-goods-bt fontSize-18 font-color-white">立即购买</span>
              </router-link>
            </div>
          </div>
          <div class="classfiy-goods-list clearfix">
            <router-link to="detail">
              <img class="classfiy-goods-img fl" src="~static/img/testimg2.jpg"/>
            </router-link>
            <div class="classfiy-goods-miaoshu fl">
              <router-link to="detail">
                <p class="classfiy-goods-miaoshu-title mn-a fontSize-18">天亦有情鲜奶蛋糕</p>
                <span class="fontSize-14">送给婚礼的祝福，三生三世情缘</span>
              </router-link>
            </div>
            <div class="classfiy-goods-Price fl">
              <span class="fontSize-24 font-color-red">¥1,250.00</span>
            </div>
            <div class="classfiy-goods-Btn fl">
              <router-link to="detail">
                <span class="classfiy-goods-bt fontSize-18 font-color-white">立即购买</span>
              </router-link>
            </div>
          </div>
          <div class="classfiy-goods-list clearfix">
            <router-link to="detail">
              <img class="classfiy-goods-img fl" src="~static/img/testimg2.jpg"/>
            </router-link>
            <div class="classfiy-goods-miaoshu fl">
              <router-link to="detail">
                <p class="classfiy-goods-miaoshu-title mn-a fontSize-18">天亦有情鲜奶蛋糕</p>
                <span class="fontSize-14">送给婚礼的祝福，三生三世情缘</span>
              </router-link>
            </div>
            <div class="classfiy-goods-Price fl">
              <span class="fontSize-24 font-color-red">¥1,250.00</span>
            </div>
            <div class="classfiy-goods-Btn fl">
              <router-link to="detail">
                <span class="classfiy-goods-bt fontSize-18 font-color-white">立即购买</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <GuessLike/>
    </div>
  </div>
</template>
<script>
import DropDown from './DropDown.vue'
import GuessLike from '../Detail/GuessLike/guessLike.vue'
export default {
  components: {DropDown, GuessLike},
  name: 'index',
  data () {
    return {
      dynamicTags: [],
      classfiyArr:
        [{op: 1, name: '元祖卡卷', Number: 1, isShow: true},
        {op: 1, name: '元祖商城', Number: 1, isShow: true},
        {op: 1, name: '元祖梦蛋糕', Number: 1, isShow: true},
        {op: 1, name: '其他', Number: 1, isShow: true}],
      PriceArr:
        [{op: 2, name: '¥0-¥19.99', Number: 1,isShow: true},
        {op: 2, name: '¥20-¥49.99', Number: 1,isShow: true},
        {op: 2, name: '¥50-¥99.99', Number: 1,isShow: true},
        {op: 2, name: '¥200 以上', Number: 1,isShow: true}]
    }
  },
  methods: {
    handleClose(i,op) {
      let list = []

      if(op == 1)
        list = this.classfiyArr
      else if(op == 2)
        list = this.PriceArr

      for (let k = 0; k < list.length; k++) {
        if (list[k].name== this.dynamicTags[i].name) {
          if(op == 1)
            list = this.classfiyArr[k].isShow = true;
          else if(op == 2)
            list = this.PriceArr[k].isShow = true;
        }
      }
      this.dynamicTags.splice(i,1);
    },
    addTab (i, op) {
      let list = {}

      if(op == 1)
        list = this.classfiyArr[i]
      else if(op == 2)
        list = this.PriceArr[i]

      if(this.dynamicTags.length > 0 && this.dynamicTags.length < 10){
        let bo = true
        for(let k = 0; k < this.dynamicTags.length; k++){
          if(this.dynamicTags[k].name === list.name){
            bo = false
          }
        }
        if (bo) {
          this.dynamicTags.push(list);
          if(op == 1)
            list = this.classfiyArr[i].isShow = false;
          else if(op == 2)
            list = this.PriceArr[i].isShow = false;
        }
      }
      else if(this.dynamicTags.length <= 0){
        this.dynamicTags.push(list);
        if(op == 1)
          list = this.classfiyArr[i].isShow = false;
        else if(op == 2)
          list = this.PriceArr[i].isShow = false;
      }
    }
  }
}
</script>

<style scoped lang="less">
</style>

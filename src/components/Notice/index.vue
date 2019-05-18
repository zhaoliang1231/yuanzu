<template>
    <div class="index">
        <div class="notice_location">
            <span>
                <a class="a-hover-pink" href="">主页</a>
            </span>
                <span>></span>
            <span>
                <a class="a-hover-pink" href="">元祖公告44(18年中秋月饼销毁公告)</a>
            </span>
        </div>
        <div class="notice_logo">
            <div class="notice_logo_img">
                <img src="../../static/img/logo.png" alt="">
            </div>
        </div>
        <div class="notice_title">
            <p class="font-weight-bold">【公告】元祖2018年中秋月饼报废公告</p>
        </div>
        <div class="notcie_aline"></div>
        <table style="width:1060px;cellspacing:1;cellpadding:1;border: 0;margin: 50px auto">
            <tbody>
                <tr>
                    <td style="colspan:3;height: 20px;">
                        <p>&nbsp;&nbsp;为维护广大消费者的合法权益，元祖已将2018年月饼提货券的提领时间，
                            分别延期至2018年9月24日和2018年10月15日，并公布了“元祖对已过中秋节的月饼提领政策”，
                            指引消费者在2018年10月15日前及时携券提领月饼，提醒消费者逾期将无法提领。
                        </p>
                        <p>&nbsp;&nbsp;为严格执行《食品安全法》关于及时清理超过保质期食品的相关规定，
                            同时因月饼本身具有保质期和销售期，元祖对已过期产品一贯采取及时报废原则，
                            并对过期产品报废过程及对报废品处理实行严格的管控流程，
                            故元祖于2018年10月在各门店张贴了关于2018年10月30日销毁过期月饼的公告，
                            并于当天在上海元祖梦果子股份有限公司现场销毁月饼，总计陆仟肆佰余盒，
                            整个过程由公证机关进行了现场公证。
                        </p>
                        <p>
                            &nbsp;&nbsp;至此，元祖2018年度中秋月饼已全部销毁，同时敬告广大消费者，
                            2018年中秋月饼提货券将不再予以提领。
                        </p>
                    </td>
                </tr>
              <div class="notice_tail">
                  <p>上海元祖梦果子股份有限公司</p>
                  <p>2018年11月5日</p>
              </div>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
      name: 'index'
    }

</script>

<style scoped lang="less">

    .notice_location{
        width: 100%;
        height: 45px;
        line-height: 45px;
    }
    .notice_logo{
        width: 100%;
        height: 100px;
        .notice_logo_img{
            width: 279px;
            height: 100px;
            float: right;
            img{
                width: 135px;
                height: 58px;
            }
        }
    }
    .notice_title{
        width: 100%;
        height: 40px;
        text-align: center;
        p{
            font-size: 30px;
            color: rgb(173, 1, 50);
            font-family: 宋体;
        }
    }
    .notcie_aline{
        width: 100%;
        height: 17px;
        border-bottom:2px solid rgb(173, 1, 50);
    }
    tr td p{
        font-size: x-large;
        font-family: 宋体;
    }
    .notice_tail{
        width: 100%;
        height:60px;
        margin-top: 80px;
        p{
            font-size: 19px;
            font-weight: bold;
            text-align: right;
        }
    }
</style>

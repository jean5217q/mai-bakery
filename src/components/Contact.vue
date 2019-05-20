<template lang="pug">
#contact(:class="{show: showData}")
  .contact-inner
    .cross(@click="hideHandler")
      .line
      .line
    form.contact-form(v-if="showForm")
      .title 
        span 聯
        span 絡
        span 資
        span 訊
      .col
        label  姓名
        input(type="text")
      .col
        label email
        input(type="email")
      .col
        label 詢問內容
        textarea(type="text"
                  rows = "5")
      .btn(@click="submitHandler") 送出
    .submit-success(v-else)
        .text 
          | 已收到您的資訊，
          br 
          | 確認問題後會盡快回覆，
          br
          | 謝謝!
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  export default {
    data() {
      return {
        showForm: true
      };
    },
    computed: {
      ...mapState(["showData"])
    },
    methods: {
      ...mapMutations(["hideForm"]),
      submitHandler() {
        this.showForm = false;
      },
      hideHandler() {
        this.hideForm();
        this.showForm = true;
      }
    }
  };
</script>

<style lang="sass">
$colorBrown: #986C40
$colorLiBrown: #E37A11
$colorLiEarthBrown: #fcf9f4 
$colorEarthBrown: #c99b4e
$colorDeEarthBrown: #b2812a
$colorLiOrange: #fff3ea
$colorOrange: #ff8566
$colorDeOrange: #fc6c49
$colorLiEarthYellow: #fff7e0
$colorEarthYellow: #c48758
$colorDeEarthYellow: #a57047 
#contact
  opacity: 0
  position: fixed
  top: 0
  left: 0
  z-index: -1
  transition: all 0.3s 0.1s ease-out
  -moz-transition: all 0.3s 0.1s ease-out
  -webkit-transition: all 0.3s 0.1s ease-out
  -o-transition: all 0.3s 0.1s ease-out
  width: 100%
  &.show
    opacity: 1
    z-index: 20000
  .contact-inner
    background-color: #fff7e0
    height: 100vh
    position: relative
    .cross
      position: absolute
      top: 50px
      right: 50px
      width: 50px
      height: 40px
      display: flex
      flex-direction: column
      justify-content: space-between
      cursor: pointer
      z-index: 200000
      .line
        width: 100%
        height: 4px
        background-color: $colorBrown
        transform: translateY(18px) rotate(45deg)
        -ms-transform: translateY(18px) rotate(45deg)
        -moz-transform: translateY(18px) rotate(45deg)
        -webkit-transform: translateY(18px) rotate(45deg)
        -o-transform: translateY(18px) rotate(45deg)
        &:nth-child(2)
          transform: translateY(-18px) rotate(-45deg)
          -ms-transform: translateY(-18px) rotate(-45deg)
          -moz-transform: translateY(-18px) rotate(-45deg)
          -webkit-transform: translateY(-18px) rotate(-45deg)
          -o-transform: translateY(-18px) rotate(-45deg)
    .contact-form
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      -ms-transform: translate(-50%,-50%)
      -moz-transform: translate(-50%,-50%)
      -webkit-transform: translate(-50%,-50%)
      -o-transform: translate(-50%,-50%)
      border: 1px solid $colorBrown
      width: 100%
      max-width: 400px
      padding: 30px
      .title
        padding: 12px 0
        text-align: center
        color: $colorBrown
        span
          padding: 0 8px
          font-size: 22px
      .col
        margin-bottom: 20px
        label
          display: block
          font-size: 16px
          line-height: 2.2
          color: $colorBrown
        input,textarea
          border: 1px solid $colorBrown
          background-color: transparent
          font-size: 16px
          padding: 8px 
          outline: none
          width: 100%
          color: $colorBrown
          line-height: 1.5
          letter-spacing: 1px
      .btn
        padding: 15px
        text-align: center
        background-color: $colorBrown
        color: white
        letter-spacing: 3px
        font-weight: 200
        cursor: pointer
    .submit-success
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      -ms-transform: translate(-50%,-50%)
      -moz-transform: translate(-50%,-50%)
      -webkit-transform: translate(-50%,-50%)
      -o-transform: translate(-50%,-50%)
      border: 1px solid $colorBrown
      width: 400px
      padding: 30px
      .text
        font-size: 18px
        line-height: 2.2
        letter-spacing: 2px
        color: $colorBrown
        text-align: center
@media screen and (max-width: 449px)
  #contact
    .contact-inner
      .cross
        top: 50px
        right: 20px
      .submit-success,.contact-form
        border: none
      .submit-success
        transform: translate(-50%,-55%)
        -ms-transform: translate(-50%,-50%)
        -moz-transform: translate(-50%,-50%)
        -webkit-transform: translate(-50%,-50%)
        -o-transform: translate(-50%,-50%)
</style>

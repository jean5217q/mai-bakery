<template lang="pug">
header#header
  .top-line#top
  .header-inner
    ul.nav-list
      li
        a(href="#about") 關於我們
      li
        a(href="#product") 產品介紹
    .header-logo
      a(href="#")
        img(src="../assets/images/header-logo.svg", 
            alt="home-page")
    ul.nav-list
      li
        a(href="#company") 店面資訊
      li
        a(@click="showForm") 聯絡我們
  .sml-nav-button(@click="toggleNav")
    .nav-button(:class="{cross: show}")
      .line
      .line
      .line
  .sml-navBar(:class="{showBar: show, hideBar: !show}")
    ul.sml-nav-list
      li
        a(href="#about" @click="hideNav") 關於我們
      li
        a(href="#product" @click="hideNav") 產品介紹
      li
        a(href="#company" @click="hideNav") 店面資訊
      li
        a(@click="contactShow") 聯絡我們   
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    ...mapState(["showData"])
  },
  methods: {
    ...mapMutations(["showForm", "hideForm"]),
    toggleNav() {
      this.show ? (this.show = false) : (this.show = true);
    },
    hideNav() {
      this.show = false;
    },
    contactShow() {
      this.show = false;
      this.showForm();
    }
  }
};
</script>

<style lang="sass">
$colorBlack: #696969
$colorWhite: #fff
$colorLiYellowBrown: #FFF7E0
$colorYellowBrown: #C99B4E
$colorDeYellowBrown: #B2812A 
$colorLiBrown: #fffaf2
$colorBrown: #C48758
$colorDeBrown: #A57047
#header
  position: fixed
  top: 0
  left: 0
  width: 100%
  z-index: 10000
  background-color: white 
  .top-line
    position: relative
    top: 0
    left: 0
    width: 100%
    height: 6px
    background-color: $colorBrown
  .header-inner
    display: flex
    justify-content: center
    align-items: center
    .nav-list
      display: flex
      .header-logo
        padding: 40px 40px
      li
        // margin: 0 60px
        a
          position: relative
          display: block
          font-size: 16px
          letter-spacing: 1px
          line-height: 1
          // padding: 22px 0
          color: $colorDeBrown
          &:after
            display: block
            content: ''
            width: 0%
            height: 2px
            position: absolute
            bottom: 12px
            background-color: $colorDeBrown
            transition: 0.25s ease-out
            -moz-transition: 0.25s ease-out
            -webkit-transition: 0.25s ease-out
            -o-transition: 0.25s ease-out
      //hover
      li
        &:hover
          a
            &:after
              width: 100%

@media screen and (min-width: 1200px)
  header
    .header-inner
      .nav-list
        li
          margin: 0 60px
          a
            padding: 22px 0
      .header-logo
        padding: 40px 40px
        a>img
          height: 60px
    .sml-nav-button
      display: none
    .sml-navBar
      display: none

@media screen and (min-width: 870px) and(max-width: 1199px)
  header
    .header-inner
      .nav-list
        li
          margin: 0 36px
          a
            padding: 22px 0
      .header-logo
        padding: 40px 20px
        a>img
          height: 54px
    .sml-nav-button
      display: none
    .sml-navBar
      display: none
@media screen and (max-width: 869px) 
  #header
    .header-inner
      justify-content: space-between
      .nav-list
        display: none
      .header-logo
        padding: 40px 16px
        a>img
          height: 54px
    .sml-nav-button
      position: relative
      cursor: pointer
      .nav-button
        display: flex
        flex-direction: column
        justify-content: space-between
        width: 50px
        height: 40px
        position: fixed
        right: 5%
        top: 54px
        z-index: 10000
        .line
          width: 100%
          height: 4px
          background-color: $colorDeBrown
          transition: 0.2s ease-out
          -moz-transition: 0.2s ease-out
          -webkit-transition: 0.2s ease-out
          -o-transition: 0.2s ease-out
        &.cross
          .line
            &:nth-child(1)
              transform: translateY(18px) rotate(45deg)
              -ms-transform: translateY(18px) rotate(45deg)
              -moz-transform: translateY(18px) rotate(45deg)
              -webkit-transform: translateY(18px) rotate(45deg)
              -o-transform: translateY(18px) rotate(45deg)
            &:nth-child(2)
              display: none
            &:nth-child(3)
              transform: translateY(-18px) rotate(-45deg)
              -ms-transform: translateY(-18px) rotate(-45deg)
              -moz-transform: translateY(-18px) rotate(-45deg)
              -webkit-transform: translateY(-18px) rotate(-45deg)
              -o-transform: translateY(-18px) rotate(-45deg)
    .sml-navBar
      position: absolute
      top: 0
      left: 0
      width: 0
      height: 100vh
      display: flex
      justify-content: center
      align-items: center
      background-color: $colorLiBrown
      z-index: -1
      &.showBar
        width: 100%
        transition: 0.5s ease-in
        -moz-transition: 0.5s ease-in
        -webkit-transition: 0.5s ease-in
        -o-transition: 0.5s ease-in
        .sml-nav-list
          opacity: 1 
      &.hideBar
        width: 0
        transition: 0.3s ease-out
        -moz-transition: 0.3s ease-out
        -webkit-transition: 0.3s ease-out
        -o-transition: 0.3s ease-out  
        .sml-nav-list
          opacity: 0
          transition: 0s 0s
          -moz-transition: 0s 0s
          -webkit-transition: 0s 0s
          -o-transition: 0s 0s  
      .sml-nav-list
        opacity: 0
        transition: 0.5s 0.5s
        -moz-transition: 0.5s 0.5s
        -webkit-transition: 0.5s 0.5s
        -o-transition: 0.5s 0.5s
        li
          margin: 15vw
          padding-left: 10px
          a
            font-size: 24px
            font-weight: 300
            letter-spacing: 10px
            color: $colorDeBrown
        // hover
        li
          &:hover
            a
              color: $colorBrown       
</style>

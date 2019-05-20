<template lang="pug">
#company
  .company-inner
    .map
      #map-inner
    .company-text
      .text-inner
        .comapny-icon
          img(src="../assets/images/map-logo.svg", alt="logo")
        .company-telephone 電話：02~0134~3212
        .company-time 營業時間：週一至週日 11：00 ~ 21：00 
        .company-site 店面地址：新北市淡水區中正路253號
        .contact-btn
          .btn(@click.prevent="showForm")   
            span C
            span O
            span N
            span T
            span A
            span C
            span T
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  export default {
    computed: {
      ...mapState(["showData"])
    },
    methods: {
      ...mapMutations(["showForm", "hideForm"])
    },
    mounted() {
      function initMap() {
        var latlng = {
          lat: 25.174511,
          lng: 121.432594
        };
        var map = new google.maps.Map(document.getElementById("map-inner"), {
          zoom: 14,
          center: latlng
        });
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
      }
      initMap();
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
#company
  margin-top: 200px
  .wrap
    display: none
    &.show
      display: block
  .company-inner
    display: flex
    justify-content: center
    align-items: center
    color: $colorBrown
    box-shadow: 0px 2px 3px rgba(0,0,0,0.3), 0px 7px 28px rgba(0,0,0,0.0)
    transition: 0.5s
    -moz-transition: 0.5s
    -webkit-transition: 0.5s
    -o-transition: 0.5s
    width: 100%
    &:hover
      box-shadow: 0px 2px 3px rgba(0,0,0,0.3), 0px 7px 28px rgba(0,0,0,0.3)
    .map 
      #map-inner
        width: 100%
        height: 100%
    .company-text
      width: 50%
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      background-color: $colorBrown
      .text-inner
        .comapny-icon
          position: relative
          &:after
            display: block
            content: ''
            position: absolute
            background-color: rgba(255,255,255,0.8)
            height: 1px
            width: 100%
          img
            height: 100%
        .company-telephone, .company-time, .company-site 
          color: white
          letter-spacing: 2px
          font-size: 16px
          font-weight: 300
          line-height: 2.4 
        .contact-btn
          border: 1px solid white
          text-align: center
          margin-top: 20px
          position: relative
          z-index: 1
          padding: 16px 0
          cursor: pointer
          &:before
            display: block
            content: ''
            width: 0
            height: 100%
            background-color: white
            position: absolute
            top: 0
            left: 0
            transition: 0.4s
            -moz-transition: 0.4s
            -webkit-transition: 0.4s
            -o-transition: 0.4s
            z-index: -1
          span
            padding: 0 5px
            z-index: 3000
            color: white
        .contact-btn
          &:hover
            &:before
              width: 100%
            span
              color: $colorBrown
              font-size: 800

@media screen and (min-width:1200px) 
  #company
    .company-inner
      height: 60vh
      .map
        width: 50%
        height: 100%   
      .company-text
        width: 50%
        height: 100%
        .text-inner
          .comapny-icon
            height: 54px
            margin-bottom: 40px
            &:after
              top: 72px
              left: 0


@media screen and (min-width:1000px) and (max-width:1199px) 
  #company
    .company-inner
      height: 60vh
      .map
        width: 50%
        height: 100%   
      .company-text
        width: 50%
        height: 100%
        .text-inner
          .comapny-icon
            height: 48px
            margin-bottom: 30px
            &:after
              top: 64px
              left: 0


@media screen and (min-width:545px) and (max-width:999px) 
  #company
    margin-top: 0
    .company-inner
      flex-direction: column
      background-color: $colorBrown
      .map
        width: 100%
        height: 45vh
        order: 2
        #map-inner
          width: 95% 
          height: 90%
          margin: 0 auto
          margin-bottom: 30px
          
      .company-text
        width: 100%
        height: 40vh
        .text-inner
          .comapny-icon
            height: 48px
            margin-bottom: 30px
            text-align: center
            &:after
              top: 64px
              left: 0
          .contact-btn


@media screen and (max-width:543px) 
  #company
    margin-top: 0
    .company-inner
      flex-direction: column
      .map
        display: none
      .company-text
        width: 100%
        height: 50vh
        .text-inner
          width: 80%
          .comapny-icon
            height: 44px
            margin-bottom: 30px
            &:after
              top: 64px
              left: 0
          .company-telephone, .company-time, .company-site 
            font-size: 14px
    



</style>

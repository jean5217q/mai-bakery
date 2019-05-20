<template lang="pug">
.introSecond 
  .intro-group
    .intro(v-for="item in introData"
          data-aos="fadeIn"
          data-aos-duration="1500"
          data-aos-once="true"
          )
      .intro-photo
        img(:src="item.imgUrl")
      .intro-text
        .intro-text-inner
          .intro-title {{item.title}}
          .intro-description  {{item.description}}
    
</template>

<script>
export default {
  data(){
    return{
      introData: [
        {
          imgUrl: require('../../assets/images/step/step-01.jpg'),
          title: '嚴選新鮮在地食材',
          description: '與在地小農合作，使用天然有機的無毒原料，並搭配當季的農產品與檢驗和個的有機素材，製作出健康營養的商品。'
        },
        {
          imgUrl: require('../../assets/images/step/step-02.jpg'),
          title: '舒適自在的環境享受',
          description: '注重每個製作步驟，以少量精緻為訴求，製作味道與外貌兼備的手感麵包。並推動季節限定的商品，讓消費者能品嚐多樣化的風味。'
        },
        {
          imgUrl: require('../../assets/images/step/step-03.jpg'),
          title: '手感溫度的用心堅持',
          description: '在繁忙的生活一腳提供的小小烘培房，希望透將手作烘培的溫度，傳遞給品嚐的消費者，並能舒緩都市繁忙的緊張心情。'
        }
      ]
    }
  }
}
</script>


<style lang="sass">
$colorBlack: #696969
$colorWhite: #fff
$colorLiYellowBrown: #FFF7E0
$colorYellowBrown: #C99B4E
$colorDeYellowBrown: #B2812A 
$colorLiBrown: #FCF9F4
$colorBrown: #C48758
$colorDeBrown: #A57047

.introSecond 
  .intro-group
    display: flex
    flex-direction: column
    .intro
      display: flex
      background-color: $colorLiYellowBrown
      &:nth-child(2)
        background-color: $colorLiBrown
        .intro-text
          .intro-text-inner
            .intro-title
              background-color: $colorBrown
      .intro-photo
        overflow: hidden         
        img
          width: 100%        
      .intro-text
        position: relative
        .intro-text-inner
          text-align: center
          position: absolute
          top: 50%
          transform: translateY(-50%)
          -ms-transform:translateY(-50%)
          -moz-transform:translateY(-50%)
          -webkit-transform:translateY(-50%)
          -o-transform:translateY(-50%)
          padding: 0 5vw
          .intro-title
            display: inline-block
            background-color: $colorYellowBrown
            color: white
            letter-spacing: 3px
            padding: 12px 16px 
            margin-bottom: 2vw
          .intro-description
            line-height: 2
            letter-spacing: 2px
            text-align: justify

@media screen and (min-width:1400px) 
  .introSecond 
    .intro-group
      .intro
        width: 95%
        margin-bottom: 120px
        margin-left: 5%
        &:nth-child(2)
          width: 90%
          margin-left: auto
          margin-right: auto
          .intro-photo
            order: 2
        &:nth-child(3)
          margin-bottom: 0
        .intro-photo
          width: 45%       
        .intro-text
          width: 55%
          .intro-text-inner
            .intro-title
              font-size: 28px
              font-weight: 300
            .intro-description
              font-size: 18px
@media screen and (min-width:956px) and (max-width: 1399px) 
  .introSecond 
    .intro-group
      .intro
        width: 95%
        margin-bottom: 80px
        margin-left: 5%
        &:nth-child(2)
          width: 90%
          margin-left: auto
          margin-right: auto
          .intro-photo
            order: 2
        &:nth-child(3)
          margin-bottom: 0
        .intro-photo
          width: 45%       
        .intro-text
          width: 55%
          .intro-text-inner
            .intro-title
              font-size: 24px
              font-weight: 300
            .intro-description
              font-size: 16px
@media screen and (min-width:756px) and (max-width: 955px) 
  .introSecond 
    .intro-group
      .intro
        width: 100%
        &:nth-child(2)
          .intro-photo
            order: 2
        &:nth-child(3)
          margin-bottom: 0
        .intro-photo
          width: 50%       
        .intro-text
          width: 50%
          .intro-text-inner
            .intro-title
              font-size: 24px
              font-weight: 300
            .intro-description
              font-size: 16px
@media screen and (max-width:755px)
  .introSecond 
    .intro-group
      .intro
        flex-direction: column
        width: 100%
        .intro-photo
          width: 100%

        .intro-text
          width: 100%
          padding-top: 20px
          padding-bottom: 32px
          .intro-text-inner
            position: relative
            top: 0
            transform: translateY(0)
            -ms-transform:translateY(0)
            -moz-transform:translateY(0)
            -webkit-transform:translateY(0)
            -o-transform:translateY(0)
            padding: 0 5vw
            .intro-title
              font-size: 24px
              font-weight: 300
            .intro-description
              font-size: 16px

</style>

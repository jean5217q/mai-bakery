<template lang="pug">
#ScrollTop
  a(href="#")
    .scrollTop-inner Top  
</template>

<script>
export default {
  methods: {
    gotoTop(el){
      
      window.scrollTop =0
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
$colorLiBrown: #fffaf2
$colorBrown: #C48758
$colorDeBrown: #A57047
#ScrollTop
  .scrollTop-inner
    position: fixed
    z-index: 200001
    right: 2vw
    bottom: 50px
    width: 50px
    height: 50px
    border-radius: 50%
    background-color: $colorDeBrown
    box-shadow: 0px 0px 3px rgba(0,0,0,0.2)
    font-size: 15px
    color: $colorWhite
    display: flex
    justify-content: center
    align-items: center
    cursor: pointer
    animation: floatItem 2s linear infinite alternate
@keyframes floatItem
  0%
    transform: translateY(0px)
    -ms-transform:translateY(0px)
    -moz-transform:translateY(0px)
    -webkit-transform:translateY(0px)
    -o-transform:translateY(0px)
  10%
    transform: translateY(5px)
    -ms-transform:translateY(5px)
    -moz-transform:translateY(5px)
    -webkit-transform:translateY(5px)
    -o-transform:translateY(5px)
  50%
    transform: translateY(5px)
    -ms-transform:translateY(5px)
    -moz-transform:translateY(5px)
    -webkit-transform:translateY(5px)
    -o-transform:translateY(5px)
  10%
    transform: translateY(0px)
    -ms-transform:translateY(0px)
    -moz-transform:translateY(0px)
    -webkit-transform:translateY(0px)
    -o-transform:translateY(0px)
  100%
    transform: translateY(0px)
    -ms-transform:translateY(0px)
    -moz-transform:translateY(0px)
    -webkit-transform:translateY(0px)
    -o-transform:translateY(0px)

</style>

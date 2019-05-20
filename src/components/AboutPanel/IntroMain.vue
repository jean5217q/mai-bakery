<template lang="pug">
.intro-main
  .intro-slogon(data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true")
    | 專注、追求、探索
    br
    | 來自大地的細膩味道 
</template>

<style lang="sass">
$colorBlack: #696969
.intro-main
  display: flex
  justify-content: center
  .intro-slogon
    font-size: 32px
    line-height: 1.8
    letter-spacing: 3px
    margin: 100px 0 80px 0
    writing-mode: vertical-rl 
@media screen and (max-width:520px)
  .intro-main
    .intro-slogon
      font-size: 24px
</style>
<template lang="pug">
#about
  IntroMain
  IntroSecond
</template>

<script>
  import IntroMain from "./AboutPanel/IntroMain";
  import IntroSecond from "./AboutPanel/IntroSecond";
  export default {
    components: {
      IntroMain,
      IntroSecond
    }
  };
</script>

<style lang="sass">
$colorBlack: #696969
#about 
  color: $colorBlack
</style>

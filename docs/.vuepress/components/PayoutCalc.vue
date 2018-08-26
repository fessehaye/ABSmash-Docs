<template>
    <div class="payout">
        {{msg}}
        <div class="payout__form"></div>
        <div class="payout__result"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Work In progress'
    }
  }
}
</script>
<style lang="scss" scoped>
    $color--blue: #3F51B5;
    $color--lightblue: #448AFF;
    $color--grey: #BDBDBD;
    $color--text: #757575;
    .payout {
      width:100%;
      margin: 1em auto;
      color: $color--text;
      &__form {
        width:100%;
        //background:$color--lightblue;
        padding: 1em;
      }

      &__result {
        width:100%;
      }
    }
</style>


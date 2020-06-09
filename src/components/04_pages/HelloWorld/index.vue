<template src="./template.html"></template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      cashUp: 0,
      coinsUp: 0,
      cashDown: 0,
      coinsDown: 0
    }
  },
  methods: {
    ...mapActions([
      'addCoins',
      'addCash',
      'reduceCoins',
      'reduceCash'
    ]),
    addCash: function() {
      this.$store.dispatch('addCash', parseInt(this.cashUp))
    },
    addCoins: function() {
      this.$store.dispatch('addCoins', parseInt(this.coinsUp))
    },
    reduceCash: function() {
      this.$store.dispatch('reduceCash', parseInt(this.cashDown))
    },
    reduceCoins: function() {
      this.$store.dispatch('reduceCoins', parseInt(this.coinsDown))
    }
  },
  computed: {
    ...mapGetters([
      'getCoins',
      'getCash'
    ]),
    getCash: function () {
      return this.$store.getters.getCash
    },
    getCoins: function () {
      return this.$store.getters.getCoins
    }
  }
}
</script>

<template src="./template.html"></template>

<script>
import { mapGetters } from 'vuex';
import NavLeft from '@/components/02_molecules/NavLeft/index';
import NavCenter from '@/components/02_molecules/NavCenter/index';
import NavRight from '@/components/02_molecules/NavRight/index';

export default {
  name: 'Navigation',
  components: { NavLeft, NavCenter, NavRight },
  computed: {
    ...mapGetters([
      'getCash',
      'getCoins'
    ]),
    getCash: function () {
      return this.$store.getters.getCash
    },
    getCoins: function () {
      return this.$store.getters.getCoins
    },
    currentPage() {
      return this.$route.name;
    }
  }
}
</script>

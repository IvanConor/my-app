<template src="./template.html"></template>

<script>
import NavLeft from '@/components/02_molecules/NavLeft/index';
import NavCenter from '@/components/02_molecules/NavCenter/index';
import NavRight from '@/components/02_molecules/NavRight/index';

export default {
  name: 'Navigation',
  components: { NavLeft, NavCenter, NavRight },
  computed: {
    getClub: function () {
      return this.$store.getters.getClub
    },
    currentPage() {
      return this.$route.name;
    }
  }
}
</script>

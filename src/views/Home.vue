<template>
  <div class="router-view grid home-page">
    <LeadLink size="big" path="club-house" title="Club House" />
    <LeadLink size="small" path="cards" title="Cards" />
    <LeadLink size="small" path="divisions" title="Divisions" />
    <LeadLink size="big" path="" title="Promo Screen" />
    <LeadLink size="small" path="extras" title="Extras" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Home',
  components: { LeadLink }
}
</script>

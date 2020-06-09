<template>
  <div class="router-view grid home-page">
    <LeadLink size="big" title="Club House" path="club-house" />
    <LeadLink size="small" title="Cards" path="cards" />
    <LeadLink size="small" title="Divisions" path="divisions" />
    <LeadLink size="big" title="Promo Screen" path="promo" />
    <LeadLink size="small" title="Extras" path="extras" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Home',
  components: { LeadLink }
}
</script>

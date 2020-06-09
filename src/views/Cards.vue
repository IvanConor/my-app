<template>
  <div class="router-view grid cards-page">
    <LeadLink size="small" title="My Cards" />
    <LeadLink size="big" title="Buy Card Packs" />
    <LeadLink size="small" title="Scout" />
    <LeadLink size="small" title="Card Slots" />
    <LeadLink size="small" title="Card Collection" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Cards',
  components: { LeadLink }
}
</script>

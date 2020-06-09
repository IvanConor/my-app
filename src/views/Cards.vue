<template>
  <div class="router-view grid cards-page">
    <LeadLink size="small" title="My Cards" path="my-cards" />
    <LeadLink size="big" title="Buy Card Packs" path="buy-cards" />
    <LeadLink size="small" title="Scout" path="scout" />
    <LeadLink size="small" title="Card Slots" path="slots" />
    <LeadLink size="small" title="Card Collection" path="collection" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Cards',
  components: { LeadLink }
}
</script>

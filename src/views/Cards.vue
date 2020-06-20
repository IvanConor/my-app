<template>
  <div class="router-view grid cards-page">
    <LeadLink size="small" title="My Cards" path="my-cards" sideimage='icons/cards' :sideimagetext="this.$store.getters.getCards + '/' + this.$store.getters.getSlots" text="Manage your cards and card slots." />
    <LeadLink size="big" title="Buy Card Packs" path="buy-cards" sideimage='icons/packs' />
    <LeadLink size="small" title="Scout" path="scout" sideimage='icons/scout' text="Scout a new player for your club every 24 hours." />
    <LeadLink size="small" title="Card Slots" path="slots" sideimage='icons/slots' text="Upgrade your card slots so you can keep more cards." />
    <LeadLink size="small" title="Card Collection" path="collection" sideimage='icons/collection' text="See all the cards you've obtained so far." />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Cards',
  components: { LeadLink }
}
</script>

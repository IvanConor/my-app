<template>
  <div class="router-view grid cards-page">
    <LeadLink
      size="small"
      title="My Cards"
      path="my-cards"
      text="Manage your cards and card slots."
      sideimage='icons/cards'
      :sideimagetext="cardsNum + '/' + slotsNum" />
    <LeadLink
      size="big"
      title="Buy Card Packs"
      path="buy-cards"
      sideimage='icons/packs' />
    <LeadLink
      size="small"
      title="Scout"
      path="scout"
      text="Scout a new player for your club every 24 hours."
      sideimage='icons/scout' />
    <LeadLink
      size="small"
      title="Card Slots"
      path="slots"
      text="Upgrade your card slots so you can keep more cards."
      sideimage='icons/slots' />
    <LeadLink
      size="small"
      title="Card Collection"
      path="collection"
      text="See all the cards you've obtained so far."
      sideimage='icons/collection' />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Cards',
  components: { LeadLink },
  computed: {
    cardsNum: function() {
      return this.$store.getters.getCards.length
    },
    slotsNum: function() {
      return this.$store.getters.getClub.slots
    }
  },
}
</script>

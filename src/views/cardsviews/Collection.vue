<template>
  <div class="router-view collection-page">
    <div class="collection-top">
      <div class="text-center">
        <p>You've collected <span>{{ myCards.length }} of {{ slotsNum }}</span> cards so far</p>
      </div>
    </div>
    <div class="card-list">
      <Card
        v-for="card in myCards"
        :key="card.id"
        :type="card.type"
        :level="card.level"
        :title="card.title"
        :purpose="card.purpose" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/02_molecules/Card/index';

export default {
  name: 'Collection',
  components: { Card },
  data() {
    return {
      myCards: [],
    }
  },
  computed: {
    slotsNum: function() {
      return this.$store.getters.getClub.slots
    }
  },
  created() {
    this.myCards = this.$store.getters.getCards
  }
}
</script>

<template>
  <div class="router-view my-cards-page">
    <div class="card-list">
      <Card
        v-for="card in myCards"
        :key="card.id"
        :type="card.type"
        :level="card.level"
        :title="card.title"
        :purpose="card.purpose" />
    </div>
    <div class="my-cards-bottom">
      <div class="text-left">
        <p>Select all</p>
      </div>
      <div class="text-right">
        <p><span>{{ myCards.length }} of {{ slotsNum }}</span> card slots filled</p>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/02_molecules/Card/index';

export default {
  name: 'MyCards',
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

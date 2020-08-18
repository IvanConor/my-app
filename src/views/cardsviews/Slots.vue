<template>
  <div class="router-view slots-page">
    <div class="inner-container">
      <div class="content">
        <div class="top-part">
          <h3>Current cards slots:</h3>
          <div class="current-slots">{{ numSlots }}</div>
        </div>
        <div class="bottom-part">
          <h3>Upgrade to {{ numSlots + 5 }} card slots?</h3>
          <Button
            btnText="500"
            @buttonclick="increaseSlots('cash')" />
          <Button
            btnText="13"
            @buttonclick="increaseSlots('coins')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/01_atoms/Buttons/Button/index';

export default {
  name: 'Slots',
  components: { Button },
  computed: {
    numSlots: function() {
      return this.$store.getters.getClub.slots
    }
  },
  methods: {
    increaseSlots: function(means) {
      if(means === 'coins') {
        this.$store.dispatch('updateSlots')
      } else {
        this.$store.dispatch('updateSlots')
      }
    }
  }
}
</script>

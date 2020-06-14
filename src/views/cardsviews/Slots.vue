<template>
  <div class="router-view slots-page">
    <div class="inner-container">
      <div class="content">
        <div class="top-part">
          <h3>Current cards slots:</h3>
          <div class="current-slots">{{ this.$store.getters.getSlots }}</div>
        </div>
        <div class="bottom-part">
          <h3>Upgrade to {{ this.$store.getters.getSlots + 5 }} card slots?</h3>
          <Button btnText="500" @buttonclick="increaseSlots('cash')" />
          <Button btnText="13" @buttonclick="increaseSlots('coins')" />
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
  methods: {
    increaseSlots: function(means) {
      if(means === 'coins') {
        console.log('increase with coins');
        this.$store.dispatch('increaseSlots')
      } else {
        console.log('increase with cash');
        this.$store.dispatch('increaseSlots')
      }
    }
  }
}
</script>

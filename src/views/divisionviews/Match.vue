<template>
  <div class="router-view grid match-page">
    <TextButtonComponent
      text="Play your next division match:"
      textBtn="Play"
      @buttonclick="goToDivision()" />
    <InformationComponent
      leadText="Play Division Matches with your team and rule the Club Manager leaderboards!"
      cards
      cash
      chemistry
      trophies />
    <TextButtonComponent
      text="Upgrade your match manager in Club Upgrades to play division matches quicker:"
      textBtn="Club Upgrades"
      @buttonclick="goToUpgrades()" />
  </div>
</template>

<script>
import TextButtonComponent from '@/components/03_organisms/TextButtonComponent/index';
import InformationComponent from '@/components/03_organisms/InformationComponent/index';

export default {
  name: 'Match',
  components: { TextButtonComponent, InformationComponent },
  methods: {
    goToDivision: function() {
      
    },
    goToUpgrades: function() {
      this.$router.push('upgrades');
    }
  },
}
</script>

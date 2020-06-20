<template>
  <div class="router-view achievements page">
    <Achievement
      v-for="achievement in achievements"
      :key="achievement.id"
      :title="achievement.title"
      :text="achievement.text"
      :reward="achievement.reward"
      :progressBar="achievement.progressBar" />
  </div>
</template>

<script>
import Achievement from '@/components/02_molecules/Achievement/index';

export default {
  name: 'Achievements',
  components: { Achievement },
  data() {
    return {
      achievements: []
    }
  },
  created() {
    this.achievements = this.$store.getters.getAchievements;
  }

}
</script>

<template>
  <div class="router-view achievements-page">
    <div class="achievements-progress">
      <SvgIcon icon="achievement" />
      <div class="achievements-progress-content">
        <div class="progress-text">{{ completeAchievements.length }} of {{ achievementsTotal }} achievements completed: <span class="percentage">{{ completedPercentage }}%</span></div>
        <div class="progress-bar">
          <div class="completed-bar" :style="{ width: completedPercentage + '%' }"></div>
        </div>
      </div>
    </div>
    <Achievement
      v-for="achievement in incompleteAchievements"
      :key="achievement.id"
      :title="achievement.title"
      :text="achievement.text"
      :reward="achievement.reward"
      :progressBar="achievement.progressBar"
      :isComplete="achievement.completed" />
    <Achievement
      v-for="achievement in completeAchievements"
      :key="achievement.id"
      :title="achievement.title"
      :text="achievement.text"
      :reward="achievement.reward"
      :progressBar="achievement.progressBar"
      :isComplete="achievement.completed" />
  </div>
</template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';
import Achievement from '@/components/02_molecules/Achievement/index';

export default {
  name: 'Achievements',
  components: { SvgIcon, Achievement },
  data() {
    return {
      achievementsTotal: Number,
      incompleteAchievements: [],
      completeAchievements: []
    }
  },
  computed: {
    completedPercentage() {
      return Math.round(this.completeAchievements.length / this.achievementsTotal);
    }
  },
  created() {
    this.achievementsTotal = this.$store.getters.getAchievements.length;
    this.incompleteAchievements = this.$store.getters.getIncompleteAchievements;
    this.completeAchievements = this.$store.getters.getCompleteAchievements;
  }

}
</script>

<template>
  <div class="router-view grid extras-page">
    <LeadLink
      size="small"
      title="My Profile"
      path="profile"
      text="View your own profile, statistics and more!"
      sideimage='icons/profile' />
    <LeadLink
      size="small"
      title="Achievements"
      path="achievements"
      text="View your achievements and try completing as many of them as possible!"
      sideimage='icons/achievement'
      :sideimagetext="completedAchievements + '/' + allAchievements" />
    <LeadLink
      size="tiny"
      title="Settings"
      path="settings"
      sideimage='icons/settings' />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Extras',
  components: { LeadLink },
  computed: {
    completedAchievements: function() {
      return this.$store.getters.getCompleteAchievements.length
    },
    allAchievements: function() {
      return this.$store.getters.getAchievements.length
    }
  }
}
</script>

<template>
  <div class="router-view profile-page">
    <div class="left-content">
      <div class="inner-content">
        <div class="profile-icon">
          <SvgIcon
            icon="profile" />
        </div>
        <IconText
          classNames="country"
          iconName="countries/serbia"
          :smallText="this.$store.getters.getManagerCountry"
          />
        <IconText
          classNames="membership"
          iconName="calendar"
          bigText="MEMBER FOR:"
          smallText="3 months"
          />
        <IconText
          classNames="achievements"
          iconName="achievement"
          bigText="ACHIEVEMENTS"
          :smallText="this.$store.getters.getCompletedAchievements.length + '/' + this.$store.getters.getAchievements.length"
          />
        <IconText
          classNames="club-strength"
          iconName="field"
          bigText="CLUB STRENGTH"
          :smallText="this.$store.getters.getTeamStrength"
          />
      </div>
    </div>
    <div class="right-content">
      <div class="inner-content">
        
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';
import IconText from '@/components/02_molecules/IconText/index';

export default {
  name: 'Profile',
  components: { SvgIcon, IconText }
}
</script>

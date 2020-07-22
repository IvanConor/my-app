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
          :smallText="this.$store.getters.getManager.country"
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
          :smallText="String(this.$store.getters.getTeam.strength)"
          />
      </div>
    </div>
    <div class="right-content">
      <div class="inner-content">
        <TextLeftRight
          textLeft="Total Trophies:"
          :textRight="String(this.$store.getters.getClub.trophies)"
          />
        <TextLeftRight
          textLeft="Matches Played:"
          :textRight="String(this.$store.getters.getClub.matchesPlayed)"
          />
        <TextLeftRight
          textLeft="W / D / L:"
          :textRight="String(this.$store.getters.getClub.matchesWon) + ' / ' + String(this.$store.getters.getClub.matchesDrawn) + ' / ' + String(this.$store.getters.getClub.matchesLost)"
          />
        <TextLeftRight
          textLeft="Win Rate:"
          textRight="0"
          />
        <TextLeftRight
          textLeft="Goals scored / conceded:"
          :textRight="String(this.$store.getters.getClub.goalsScored) + ' / ' + String(this.$store.getters.getClub.goalsConceded)"
          />
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';
import IconText from '@/components/02_molecules/IconText/index';
import TextLeftRight from '@/components/02_molecules/TextLeftRight/index';

export default {
  name: 'Profile',
  components: { SvgIcon, IconText, TextLeftRight }
}
</script>

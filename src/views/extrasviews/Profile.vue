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
          :smallText="managerCountry"
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
          :smallText="completedAchievements + '/' + allAchievements"
          />
        <IconText
          classNames="club-strength"
          iconName="field"
          bigText="CLUB STRENGTH"
          :smallText="teamStrength"
          />
      </div>
    </div>
    <div class="right-content">
      <div class="inner-content">
        <TextLeftRight
          textLeft="Total Trophies:"
          :textRight="clubTrophies"
          />
        <TextLeftRight
          textLeft="Matches Played:"
          :textRight="matchesPlayed"
          />
        <TextLeftRight
          textLeft="W / D / L:"
          :textRight="matchesWon + ' / ' + matchesDrawn + ' / ' + matchesLost"
          />
        <TextLeftRight
          textLeft="Win Rate:"
          textRight="0"
          />
        <TextLeftRight
          textLeft="Goals scored / conceded:"
          :textRight="goalsScored + ' / ' + goalsConceded"
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
  components: { SvgIcon, IconText, TextLeftRight },
  computed: {
    managerCountry: function() {
      return this.$store.getters.getManager.country
    },
    completedAchievements: function() {
      return this.$store.getters.getCompleteAchievements.length
    },
    allAchievements: function() {
      return this.$store.getters.getAchievements.length
    },
    teamStrength: function() {
      return String(this.$store.getters.getTeam.strength)
    },
    clubTrophies: function() {
      return String(this.$store.getters.getClub.trophies)
    },
    matchesPlayed: function() {
      return String(this.$store.getters.getClub.matchesPlayed)
    },
    matchesWon: function() {
      return String(this.$store.getters.getClub.matchesWon)
    },
    matchesDrawn: function() {
      return String(this.$store.getters.getClub.matchesDrawn)
    },
    matchesLost: function() {
      return String(this.$store.getters.getClub.matchesLost)
    },
    goalsScored: function() {
      return String(this.$store.getters.getClub.goalsScored)
    },
    goalsConceded: function() {
      return String(this.$store.getters.getClub.goalsConceded)
    },
  }
}
</script>

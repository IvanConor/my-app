<template>
  <div class="router-view settings-page">
    <div class="manager-name-wrapper">
      <h3>Manager Name</h3>
      <input type="text" v-model="newManagerName">
    </div>
    <div class="manager-email-wrapper">
      <h3>Email Address</h3>
      <input type="text" v-model="emailAddress">
    </div>
    <div class="language-wrapper">
      <h3>Game Language:</h3>
      <input type="text" v-model="language">
    </div>
    <Button
      btnText="Save Changes"
      @buttonclick="saveChanges()" />
  </div>
</template>

<script>
import Button from '@/components/01_atoms/Buttons/Button/index';

export default {
  name: 'Settings',
  components: { Button },
  data() {
    return {
      newManagerName: '',
      emailAddress: '',
      language: ''
    }
  },
  methods: {
    saveChanges: function() {
      this.$store.dispatch('changeManagerName', this.newManagerName)
      .then(this.$store.dispatch('changeEmailAddress', this.emailAddress))
      .then(this.$store.dispatch('changeLanguage', this.language))
      .then(this.$router.push('extras'));
    },
  },
  created() {
    this.newManagerName = this.$store.getters.getManager.name
    this.emailAddress = this.$store.getters.getSettings.email
    this.language = this.$store.getters.getSettings.language
  }
}
</script>

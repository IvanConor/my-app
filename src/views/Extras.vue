<template>
  <div class="router-view grid extras-page">
    <LeadLink size="small" title="My Profile" path="profile" />
    <LeadLink size="small" title="Achievements" path="achievements" />
    <LeadLink size="tiny" title="Settings" path="settings" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Extras',
  components: { LeadLink }
}
</script>

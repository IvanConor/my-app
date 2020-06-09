<template>
  <div class="router-view grid extras-page">
    <LeadLink size="small" title="My Profile" />
    <LeadLink size="small" title="Achievements" />
    <LeadLink size="tiny" title="Settings" />
    <LeadLink size="tiny" title="Sign Off" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Extras',
  components: { LeadLink }
}
</script>

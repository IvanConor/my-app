<template>
  <div class="router-view grid divisions-page">
    <LeadLink size="small" title="Division Match" />
    <LeadLink size="big" title="Tactical Plan" />
    <LeadLink size="small" title="Leaderboards" />
    <LeadLink size="big" title="Division Stars" />
    <LeadLink size="small" title="Match Results" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Divisions',
  components: { LeadLink }
}
</script>

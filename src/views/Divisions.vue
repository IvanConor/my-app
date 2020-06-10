<template>
  <div class="router-view grid divisions-page">
    <LeadLink size="small" title="Division Match" path="match" />
    <LeadLink size="big" title="Tactical Plan" path="tactics" />
    <LeadLink size="small" title="Leaderboards" path="leaderboards" />
    <LeadLink size="big" title="Division Stars" path="divisions" />
    <LeadLink size="small" title="Match Results" path="match-results" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'Divisions',
  components: { LeadLink }
}
</script>

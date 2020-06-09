<template>
  <div class="router-view grid clubhouse-page">
    <LeadLink size="small" title="Player Training" />
    <LeadLink size="big" title="Tactical Plan" />
    <LeadLink size="small" title="Exhibition" />
    <LeadLink size="small" title="Club Upgrades" />
    <LeadLink size="small" title="Training Camp" />
    <LeadLink size="tiny" title="Edit Club" />
    <LeadLink size="tiny" title="Roster" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'ClubHouse',
  components: { LeadLink }
}
</script>

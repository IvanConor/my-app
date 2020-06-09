<template>
  <div class="router-view grid clubhouse-page">
    <LeadLink size="small" title="Player Training" path="training" />
    <LeadLink size="big" title="Tactical Plan" path="tactics" />
    <LeadLink size="small" title="Exhibition" path="exhibition" />
    <LeadLink size="small" title="Club Upgrades" path="upgrades" />
    <LeadLink size="small" title="Training Camp" path="camp" />
    <LeadLink size="tiny" title="Edit Club" path="edit-club" />
    <LeadLink size="tiny" title="Roster" path="roster" />
  </div>
</template>

<script>
import LeadLink from '@/components/02_molecules/LeadLink/index';

export default {
  name: 'ClubHouse',
  components: { LeadLink }
}
</script>

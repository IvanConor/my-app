<template>
  <div class="router-view grid scout-page">
    <div class="inner-container">
      <div class="content">
        <div class="text-cloud">
          <p>Hi! I am your personal scout. Are you looking for a new player? Just let me know what position you need and I'll be back with my report within 24 hours.</p>
        </div>
        <ul class="player-positions">
          <li>
            <div class="position-wrapper">GK</div>
          </li>
          <li>
            <div class="position-wrapper">DF</div>
          </li>
          <li>
            <div class="position-wrapper">MF</div>
          </li>
          <li>
            <div class="position-wrapper">FW</div>
          </li>
        </ul>
        <div class="img-wrapper">
          <SvgIcon
            icon="scout" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/01_atoms/Icons/SvgIcon/index';

export default {
  name: 'Scout',
  components: { SvgIcon }
}
</script>

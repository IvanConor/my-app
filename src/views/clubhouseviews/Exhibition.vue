<template>
  <div class="router-view grid exhibition-page">
    <TextButtonComponent
      text="Play an exhibition match using an exhibition match card:"
      textBtn="Play" @buttonclick="goToExhibition()" />
    <InformationComponent leadText="Play exhibition matches in order to test your team & tactics against others." />
    <TextButtonComponent
      text="Play an exhibition match using manager coins:"
      textBtn="100" @buttonclick="goToExhibition()" />
  </div>
</template>

<script>
import TextButtonComponent from '@/components/03_organisms/TextButtonComponent/index';
import InformationComponent from '@/components/03_organisms/InformationComponent/index';

export default {
  name: 'Exhibition',
  components: { TextButtonComponent, InformationComponent },
  methods: {
    goToExhibition: function() {
      console.log('test');
    },
  },
}
</script>

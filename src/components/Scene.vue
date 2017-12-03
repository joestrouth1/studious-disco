<template>
  <div class="scene">
    <a-scene embedded>
      <a-assets>
        <img id="vg415" crossorigin="anonymous" src="https://ucarecdn.com/07999ad0-1929-468d-a2c5-3664b0d16efd/">
        <img id="vg485" crossorigin="anonymous" src="https://ucarecdn.com/998d7758-a1ac-4708-b1d8-61b8fb9e29ed/">
        <img id="vg549" crossorigin="anonymous" src="https://ucarecdn.com/749eb38f-e860-42b5-a54d-75efbf4ae67f/">
        <img id="night-sky" crossorigin="anonymous" src="https://ucarecdn.com/797d44fd-f7cd-4684-9bb5-11fda123b75a/">
        <img id="city-thumb" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg">
        <img id="cubes-thumb" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg">
        <img id="sechelt-thumb" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg">
        <audio id="click-sound" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>

        <!-- Image link template to be reused. -->
        <script id="link" type="text/html">
          <a-entity class="link"
            geometry="primitive: plane; height: .25; width: .25"
            material="shader: flat; src: ${thumb}"
            event-set__1="_event: mousedown; scale: 1 1 1"
            event-set__2="_event: mouseup; scale: 1.2 1.2 1"
            event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
            event-set__4="_event: mouseleave; scale: 1 1 1"
            set-image="on: click; target: #image; src: ${src}"
            sound="on: click; src: #click-sound"></a-entity>
        </script>
        
        <script id="artist" type="text/html">
          <a-entity text="value: ${name}; color: #ae0011; align: center; width: 1;"></a-entity>
        </script>
      </a-assets>
      <a-sky color="#cdcdcd" src="#night-sky" theta-length="115"></a-sky>
      <a-plane rotation="-90 0 0"
      width="100"
      height="100"
      position="0 -2 0"
      color="#222222"></a-plane>
      <a-image id="image" position="0 0 -1" src="#vg549" width="1.2" height="1"></a-image>

      <!-- Image links. -->
      <a-entity id="links" layout="type: line; margin: .5;" position="-.5 -.5 -.8">
        <a-entity template="src: #link" data-src="#vg485" data-thumb="#cubes-thumb"></a-entity>
        <a-entity template="src: #link" data-src="#vg549" data-thumb="#city-thumb"></a-entity>
        <a-entity template="src: #link" data-src="#vg415" data-thumb="#sechelt-thumb"></a-entity>
      </a-entity>

      <!-- Camera + cursor. -->
      <a-entity camera look-controls wasd-controls>
        <a-cursor id="cursor"
          animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
          animation__fusing="property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"
          event-set__1="_event: mouseenter; color: springgreen"
          event-set__2="_event: mouseleave; color: black"
          fuse="true"
          raycaster="objects: .link"></a-cursor>
      </a-entity>
    </a-scene>
  </div>
</template>


<script>
require('aframe');
require('aframe-animation-component');
require('aframe-event-set-component');
require('aframe-layout-component');
require('aframe-template-component');
require('@/assets/js/set-image.js');

export default {
  name: 'Scene',
};
</script>

<style>
.scene {
  flex: auto;
  height: 100vh;
}
</style>

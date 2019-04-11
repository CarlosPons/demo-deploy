<template>

  <div class="hello">
    <h1> Test Page 2 </h1>
    <br />
    <md-button class="md-raised" @click="gps()">
      <div :class="{ hide: !gpsWaiting }">
        <md-progress-spinner
        :md-stroke="3" :md-diameter="25" class="md-accent" md-mode="indeterminate">
        </md-progress-spinner>
      </div>
      <div :class="{ hide: gpsWaiting }">GPS test</div>
    </md-button>

    <div v-if="positionGps!=null" style="margin: 20px; display: flex;">
      <div style="width: 50%;">
        {{ this.positionGps }}
      </div>

      <div style="width: 50%;">
        <div>
          <a :href="'https://www.google.com/maps/search/?api=1&query=' + this.positionGps.latitude + ',' + this.positionGps.longitude">Go maps por coordenadas</a>
        </div>
        <div>
          <a :href="'https://www.google.com/maps/search/?api=1&query=Avinguda+de+les+Corts+Valencianes,58,46015+València'">Go maps por direccion</a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      positionGps: null,
      gpsWaiting: false,
    };
  },
  methods: {
    gps() {
      this.gpsWaiting = true;

      function onError(error) {
        alert(`code: ${error.code}\n message: ${error.message}\n`);
      }

      navigator.geolocation.getCurrentPosition(this.onSuccess, onError);
    },
    onSuccess(position) {
      const p = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        altitude: position.coords.altitude,
        accuracy: position.coords.accuracy,
        altitudeAccuracy: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        speed: position.coords.speed,
      };

      this.positionGps = p;
      this.gpsWaiting = false;

      /* alert(`Latitude: ${position.coords.latitude}\n` +
              `Longitude: ${position.coords.longitude}\n` +
              `Altitude: ${position.coords.altitude}\n` +
              `Accuracy: ${position.coords.accuracy}\n` +
              `Altitude Accuracy: ${position.coords.altitudeAccuracy}\n` +
              `Heading: ${position.coords.heading}\n` +
              `Speed: ${position.coords.speed}\n` +
              `Timestamp: ${position.timestamp}\n`); */
    },
  },
};

</script>

<style scoped>

  h1,
  h2 {
    font-weight: normal;
  }

  .hide {
    display: none;
  }

</style>

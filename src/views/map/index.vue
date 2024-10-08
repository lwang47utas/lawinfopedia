<template>
  <div class="mapdiv">
    <MapConfig ref="google-map" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MapConfig from "./compotents/mapconfig.vue";
export default {
  components: { MapConfig },

  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.mapdiv {
  height: 100vh;
  width: 100vw;
  background: blue;
}
</style>

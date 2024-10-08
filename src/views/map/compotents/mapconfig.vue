<template>
   
  <div id="map" style="height: 100%"></div>
</template>

<script>
export default {
  name: "GoogleMapComponent",
  data() {
    return {
      obj: {
        lat: 0,
        lng: 0,
      },
    };
  },
  mounted() {
    let lat = parseFloat(this.$route.query.lat).toFixed(2);
    let lng = parseFloat(this.$route.query.lng).toFixed(2);
    //console.log(lat);
    //console.log(lng);
    this.obj = { lat: lat, lng: lng };
    this.initMap();
  },
  methods: {
    initMap() {
      console.log(this.obj.lat);
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: Number(this.obj.lat), lng: Number(this.obj.lng) },
        zoom: 8,
      }); // 这里是新增的标点功能
      const marker = new google.maps.Marker({
        position: { lat: Number(this.obj.lat), lng: Number(this.obj.lng) }, // 这里的经纬度目前是写死的，未来想要实现鼠标点击，标记出现，可以设置成参数进行传参
        map: map,
        title: "Hello World!",
      });
    },
  },
};
</script>

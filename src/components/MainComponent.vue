<template>
  <h1>WeatherApp</h1>
  <input type="text" placeholder="Wpisz lokalizację" v-model="localeInfo" />
</template>

<script>
export default {
  // "domyślne" dane - te ładowane na początku
  data() {
    return {
      localeInfo: 'Chicago', // domyślna lokalizacja
    }
  }
  // "sprawdzaj / patrz" element, którego nazwa jest nazwą funkji
  watch : {
    // patrz na zmienną localInfo
    localeInfo(newVal){
      console.log('newData: ', newVal)
    }
  }
  //
  methods : {
getlaton(){
  console.log('getin lat lon')
  fetch('http://api.openweathermap.org/geo/1.0/direct?q='+this.localeInfo'&appid=04d03c358e8933ac6823da54c340c97b'
  )

  .then((dt) => dt.json())
  .then((dt) => {
    console.log('lat: ', dt[0].lat)
    console.log('lon: ', dt[0].lat)
    this.getweather(dt[0].lat, dt[0].lo)
  })
  }
}

  // mouted - funkcja wywołująca się po "zamontowaniu komponentu"
  mounted() {
    this.getlaton()
    // console.log('hello');
  }
  getweather(lat, lon){
    fetch()
    .then(dt => dt.json())
    .then((dt) =>{
      console.log()
    })
  }
}
</script>

<style>
h1 {
  color: red;
}
</style>

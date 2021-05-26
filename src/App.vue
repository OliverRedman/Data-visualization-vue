<template>
<div class="data">
    <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
        <apexchart width="600" type="candlestick" :options="candleSeries[0].chartOptions" :series="candleSeries[0].series"></apexchart>


</div>
</template>

<script>

export default {
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
    
  },
 
computed: {
  candleSeries() {
    return this.$store.state.candlestick
  }
},
mounted() {
console.log(this.candleSeries)
}
}
</script>

<style lang="scss">
.data {
  display: flex;
  flex-wrap: wrap;
}
</style>

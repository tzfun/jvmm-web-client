<template>
  <v-row>
    <v-col cols="4">
      <div id="chart-memory"></div>
    </v-col>
    <v-col cols="4">
      <div id="chart-thread"></div>
    </v-col>
    <v-col cols="4">
      <div id="chart-system"></div>
    </v-col>
  </v-row>
</template>

<script>
import {mdiCodeTags} from "@mdi/js";
import echarts from "@/plugins/echarts"
import {MemoryOption, SystemOption, ThreadOption} from "@/plugins/chart-option";
import axios from "@/plugins/axios";

export default {
  name: "Monitor",
  data: () => ({
    drawer: null,
    icon: {
      mdiCodeTags
    }
  }),
  mounted() {
    let chartMemory = echarts.init(document.getElementById('chart-memory'), 'dark', {height: 500})
    chartMemory.setOption(MemoryOption())
    let chartThread = echarts.init(document.getElementById('chart-thread'), 'dark', {height: 500})
    chartThread.setOption(ThreadOption())
    axios.get('https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/data/aqi-beijing.json').then(data => {
      let chartSystem = echarts.init(document.getElementById('chart-system'), 'dark', {height: 500})
      chartSystem.setOption(SystemOption(data.data))
    })
  },
  methods: {}
}
</script>

<style scoped>

</style>
<template>
  
</template>



<script>
import axios from 'axios'
require('dotenv').config()

export default {
  data() {
    return {
      teachers: []
    }
  },
  components: {
  },
  mounted() {
    this.getData()
  },
  methods: {
    onConvert(data) {
      let keys = data[0];
      let values = data.slice(1);
      let object = {};
      let objects = values.map(array => {
        object = {};

        keys.forEach((key, i) => object[key] = array[i]);

        return object;
      });
      this.teachers = objects;
    },
    getData() {
      return axios
        .get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=${process.env.TEACHERS_KEY}`)
        .then(response => {
          this.onConvert(response.data.values);
        });
    },
  }
};
</script>

<style>

</style>



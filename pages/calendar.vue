<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="teachers"
    hide-actions
    class="elevation-2 heading-text"
    :loading="true"
    >    
      <template slot="items" slot-scope="props">
        <td class="text-xs-left table-text">{{ props.item.date }}</td>
        <td class="text-xs-left table-text">{{ props.item.time }}</td>
        <td class="text-xs-left table-text">{{ props.item.activity }}</td>
        <td class="table-text">{{ props.item.location }}</td>
        <td class="table-text">{{ props.item.chair }}</td>        
      </template>
    </v-data-table>    
  </div>
</template>



<script>
import axios from 'axios'
// require('dotenv').config();

export default {
  data () {
    return {
      teachers: [],
      headers: [
        { text: 'Date', value: 'date', align: 'left' },
        { text: 'Time', value: 'time', align: 'left' },
        { text: 'Activity', value: 'activity' },
        { text: 'Location', value: 'location', class: 'heading-text' },
        { text: 'Chair', value: 'chair', class: 'heading-text' }
      ]
    }
  },
  components: {
  },
  mounted () {
    this.getData()
  },
  methods: {
    onConvert (data) {
      let keys = data[0]
      let values = data.slice(1)
      let object = {}
      let objects = values.map(array => {
        object = {}

        keys.forEach((key, i) => object[key] = array[i]) // eslint-disable-line

        return object
      })
      this.teachers = objects
    },
    getData () {
      return axios
        .get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet2?valueRenderOption=FORMATTED_VALUE&key=${process.env.TEACHERS_KEY}`)
        .then(response => {
          this.onConvert(response.data.values)
        })
    }
  }
}
</script>

<style scoped>

  .heading-text {
    font-size: 2rem !important;
    font-family: Roboto;
    margin: 2rem;
  }
  .table-text {
    font-size: 1rem;
    font-family: Roboto;
  }
</style>
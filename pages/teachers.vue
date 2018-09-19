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
          <td class="text-xs-left table-text">{{ props.item.instrument }}</td>
          <td class="text-xs-left table-text">{{ props.item.city }}</td>
          <td class="text-xs-left table-text">{{ props.item.travel }}</td>
          <td class="table-text">{{ props.item.firstName }}</td>
          <td class="table-text">{{ props.item.lastName }}</td>                        
          <td class="text-xs-left table-text">{{ props.item.phone }}</td>
          <td class="text-xs-left table-text">{{ props.item.email }}</td>
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
        { text: 'Instrument', value: 'instrument', align: 'left' },
        { text: 'City', value: 'city', align: 'left' },
        { text: 'Will Travel?', value: 'travel' },
        { text: 'First Name', value: 'firstName', class: 'heading-text' },
        { text: 'Last Name', value: 'lastName', class: 'heading-text' },
        { text: 'Phone', value: 'phone' },
        { text: 'email', value: 'email' }
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
        .get(`https://sheets.googleapis.com/v4/spreadsheets/1SIfFSp_1In8V_NmIGjVtry-7478OJosu91J_toQT7gs/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=${process.env.TEACHERS_KEY}`)
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
<template>
  <v-app light>
    
      <v-toolbar dense flat color="transparent">
        <v-toolbar-title>
          <v-btn to="/" color="transparent" flat>
          <h2 class="black--text">Site Logo</h2></v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn to="/signin" flat color="blue"><h3>Sign In</h3></v-btn>
          <v-btn to="/signup" flat color="blue"><h3>Sign Up</h3></v-btn>
        </v-toolbar-items>
      </v-toolbar>        
          <nuxt />
      <v-footer :fixed="fixed" app class="white">
        <span>&copy; 2018</span>
      </v-footer>
    
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vue with Vuetify.js'
      }
    }
  }
</script>


<style>


/* this removes all caps from the buttons */
  #app .btn {
    text-transform: none !important;
  }



</style>

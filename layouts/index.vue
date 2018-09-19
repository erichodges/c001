<template>
  <v-app dark>
    <v-navigation-drawer dark class="drawer"
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      temporary
      disable-resize-watcher
      fixed
      app
      width=200
    >
     
      <v-list>
        <v-icon class="burger-drawer" @click="drawer = !drawer">close</v-icon>
        <ul class="sidenav-ul">
          <li v-scroll-to="'#section-2'" class="sidenav-link-style">Products</li>  
          <li v-scroll-to="'#section-3'" class="sidenav-link-style">About</li>
          <li v-scroll-to="'#section-4'" class="sidenav-link-style">Contact</li>
        </ul>
      </v-list>            
    </v-navigation-drawer>

<!-- Navigation Toolbar -->
    <v-toolbar  app :clipped-left="true" dense flat color="transparent">
        <v-toolbar-side-icon class="burger" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>
          <v-btn to="/" color="transparent" flat>
          <h2 class="white--text">MTAC Marin</h2></v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="toolbar-items">
          <v-btn nuxt=true to="/about" flat color="white"><h3>About</h3></v-btn>
          <v-btn nuxt=true to="/teachers" flat color="white"><h3>Teachers</h3></v-btn>
          <v-btn nuxt=true to="/calendar" flat color="white"><h3>Calendar</h3></v-btn>
          <v-btn nuxt=true to="/forms-docs" flat color="white"><h3>Forms/Docs</h3></v-btn>
          <v-btn nuxt=true to="/merit-cert" flat color="white"><h3>Merit Cert</h3></v-btn>
          <v-btn nuxt=true to="/scholarship" flat color="white"><h3>Scholarship</h3></v-btn>
          <v-btn nuxt=true to="/media" flat color="white"><h3>Media</h3></v-btn>
          <div class="toolbar-spacer"></div>
        </v-toolbar-items>
    </v-toolbar>  
<!-- End Navigation Toolbar -->
    <div class="div-with-background">
      <!-- <v-btn v-scroll-to="'#section-1'" class="pageup-btn"
        color="primary"
        dark                   
        fixed
        bottom
        right
        nuxt
        fab
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn> -->
      <nuxt />
      
      <Footer />
    </div>
  </v-app>
</template>

<script>
  import Footer from '~/components/Footer'
  export default {
    components: {
      Footer
    },
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/' }
        ],
        miniVariant: false,
        right: false,
        rightDrawer: false,
        title: 'Nuxt/Vuetify'
      }
    }
  }
</script>



<style>

/* disable-resize-watcher  - this keeps the app from adding the navigation-drawer on wider screens  */

.v-toolbar__title:not(:first-child) {
      margin-left: 0 !important;
    }

@media only screen and (max-width: 56.25em) {
  .toolbar-items {    
    visibility: hidden !important;
    width: 0 !important;
  }
}

.burger {
  color: white;
}
@media only screen and (min-width: 56.25em) {
  .burger {
    left: -1rem;
    visibility: hidden !important;
    /* display: none; */
    width: 0 !important;   
  }
  .v-toolbar__content, .v-toolbar__extension {
  padding: 0 !important;
}

  }

.toolbar-spacer {
  margin-right: 2rem;
}


.burger-drawer {
  margin-top: 5px;
  margin-left: 1.2rem;
}

/* Side Nav  */
.sidenav-ul {
  padding-left: 2.7rem;
}
.sidenav-link-style {
  cursor: pointer;
  font-size: 1.2rem;
  list-style: none;
  margin: 10px;
  text-decoration: none;
  
}
/* End Side Nav */

.pageup-btn {
  bottom: +2rem;
}

.div-with-background {
  height: 100vh; 
  background-image: url('~/static/images/575839.jpg');      
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

/* this removes all caps from the buttons */
  #app .v-btn {
    text-transform: none;
  }

</style>

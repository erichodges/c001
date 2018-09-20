<template>
  <main class="main">
        <h1>
      <span>MTAC</span>
      <span>marin</span>
    </h1>
    <h2 class="MTAC-heading">Music Teachers' Association of California
      <br> Marin County Branch</h2>
    <div class="datesandhours">
      <!-- <h3>10.Januar bis 30.April 1960</h3>
      <div>Offen: Montag 14-18, 20-22</div>
      <div>Dienstag-Frietag 10-12, 14-18, 20-22</div>
      <div>Samstag-Sonnttag 10-12, 14-17</div> -->
    </div>
  </main>
</template>

<script>

export default {
  layout: 'index'
}
</script>

<style scoped>

.main {
  height: 100vh; 
  align-items: center;
  overflow:hidden;

}

li a {
    text-decoration: none !important;
}


.MTAC-heading {
  color: rgb(235, 230, 230);
  display: block;
  font-weight: 800;
  font-size: 1.6rem;
  line-height: 1.7rem;
  margin: 0;
  margin-top: 1rem;

  grid-row: 2;
  grid-column: 2; 

  @media only screen and (max-width: 790px) {
    font-weight: 500;
    font-size: 1.4rem;
    display: block;
  }
}

h1 {
  font-size: calc(2rem + 20vw);
  letter-spacing: -0.04em;
  display: contents;
  opacity: 0.6; 

  /* @media only screen and (min-width: 1400px) {
    font-size: calc(2rem + 12vw);
  } */
}
h1 span:nth-of-type(1) {
  color: rgba(185, 32, 19, 0.6);
  margin-left: -0.14em; 
}
h1 span:nth-of-type(2) {
  color: rgba(245, 245, 245, 0.7);
  margin-left: -0.05em; 
}


main {
  /* autoprefixer: off */
  display: grid;
  grid-template-columns: minmax(10vw, 25vw) -webkit-max-content -webkit-min-content;
  grid-template-rows: 3vh auto 1fr -webkit-min-content auto 0.5vh;
  grid-template-columns: minmax(10vw, 25vw) max-content min-content;
  grid-template-rows: 10vh auto 1fr min-content auto 0.1vh;
  height: 92vh; 
  
    @media only screen and (max-width: 700px) {
      grid-template-columns: minmax(10vw, 25vw) max-content min-content;
    }

    @media only screen and (max-width: 600px) {
      grid-template-columns: minmax(10vw, 20vw) max-content min-content;
    }

    @media only screen and (max-width: 540px) {
      grid-template-columns: minmax(10vw, 15vw) max-content min-content;
    }

    @media only screen and (max-width: 540px) {
      grid-template-columns: minmax(10vw, 15vw) min-content min-content;
    }
  
  }

h1 span:nth-of-type(1) {
  /* MTAC in Red */
  /* autoprefixer: off */
  grid-row: 5;
  grid-column: 1 / 3; 
  margin-top: 4rem;

  @media only screen and (max-width: 750px) {
    grid-row: 5;    
  }

  @media only screen and (min-width: 1160px) {
    margin-top: 20rem;
    
  }
}

h1 span:nth-of-type(2) {
  /* autoprefixer: off */
  grid-row: 5;
  grid-column: 2 / 4; 
  margin-top: 4rem;

  @media (only screen and (max-width: 750px)) {
    grid-row: 5;    
  }

  @media only screen and (min-width: 1160px) {
    margin-top: 20rem;
  }
}

</style>
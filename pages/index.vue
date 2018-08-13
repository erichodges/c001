<template>
  <main>
        <section id="section-1" class="section-1">    

      <div class="section-1__heading">           
        <h1 class="title">
         <!-- {{ items.fields.h1 }} -->
        </h1>
        <h2 class="subtitle">
          <!-- {{ items.fields.h2 }} -->
        </h2>
        </div>
        <div class="links">
          <a
            href="#"
            v-scroll-to="'#section-2'"
            class="button--green"
          >
          Get Started
          </a>          
        </div>
      <!-- </div> -->
      <div class="down-arrow-div">
        <a href="#" v-scroll-to="'#section-2'">
          <svg class="down-arrow bounce" fill="#FFFFFF" height="60" viewBox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
          <path d="M0-.75h24v24H0z" fill="none"/>
        </svg>
        </a>        
      </div>

    </section>

    <section id="section-2" class="section-2">
      <!-- {{ items.fields.bodyText_1 }} -->

    </section>

    <section id="section-3" class="section-3">

    </section>

    <section id="section-4" class="section-4">
      <!-- <form action="https://formspree.io/your@email.com"
        method="POST">
        Name <input type="text" name="name">
        email <input type="email" name="_replyto">
        <input type="submit" value="Send">
      </form> -->
    </section>
  </main>
</template>

<script>

export default {
  layout: 'index'
}
</script>

<style scoped>

.section-1 {
  height: 100vh; 
  align-items: center;
  text-align: center;
  overflow:hidden;

}


.section-1__heading {
  display: grid;
  grid-template-rows: 15rem 15rem 15rem 15rem auto auto auto;

}

.title {
  font-family: Roboto, sans-serif; 
  display: block;
  font-weight: 700;
  font-size: 8rem;
  color: #fff;
  letter-spacing: 1px;
  grid-row: 5 / 6;
  
}

.subtitle {
  font-weight: 300;
  font-size: 4.2rem;
  color: #fff;
  word-spacing: .5rem;
  padding-bottom: 1.5rem;
  grid-row: 6 /7;
}

.links {  
  padding-top: 2.5rem;
  grid-row: 7 / 8;
}

.button--green {  
  font-size: 1rem;
  display: inline-block;
  border-radius: 4px;
  
  color: #fff;
  background-color: #2196F3;
  text-decoration: none;
  padding: 10px 30px;

  /* &:hover {
    
  } */
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.down-arrow-div {
  padding-top: 7rem;
  /* z-index: 100; */
}

.down-arrow {
  fill: #c1c1c4;
  /* z-index: 100; */

  /* &:hover {
    transform: translateY(5px);
    transition: transform .25s;
    fill: #fff;
  } */
}

.down-arrow:hover {
    transform: translateY(5px);
    transition: transform .25s;
    fill: #fff;
}


/* SECTION 2 */

.section-2 {
  height: 100vh;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #4670e4; 
  z-index: 10;
}

.section-3 {
  height: 100vh;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #63e40d; 
}

.section-4 {
  height: 100vh;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #e45846; 
}



</style>
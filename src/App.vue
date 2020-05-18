<template>
  <div id="app">
  <b-container fluid>
  
    <!-- 
      NAVBAR 
    -->

    <b-navbar toggleable="lg" type="dark" variant="info">
    <!-- Image and text -->
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#" class="d-flex align-items-center">
        <img width="45" height="45" src="./assets/logo-bootstrap-vue.png" alt="Bootstrap Vue logo" class="d-inline-block align-top">
        BootstrapVue
      </b-navbar-brand>
    </b-navbar>
      
    <!-- Mobile menu -->  
    <b-navbar-toggle target="nav-collapse" class="flex-end"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-end">
        <b-navbar-nav>
          <b-nav-item href="https://www.linkedin.com/in/pierricksenelaer/">About</b-nav-item>
          <b-nav-item href="https://github.com/pierricksenelaer">Github profile</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>Extra</template>
            <b-dropdown-item href="http://www.pierrick-senelaer.com" target="blank">I paint too</b-dropdown-item>
            <b-dropdown-item href="https://www.drawing-united.com" target="blank">I run www.drawing-united.com</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>

      <!-- User link - Right aligned nav items -->
      <b-navbar-nav class="user-area pb-0">
        
        <b-list-group horizontal class="flex-row">
          <b-list-group-item class="bg-info text-right p-0 pl-3 d-flex align-items-center justify-content-end border-0">
             <b-avatar badge badge-variant="success" variant="info" icon="people-fill" class="border"></b-avatar>
          </b-list-group-item>
          <b-list-group-item class="bg-info text-left d-flex align-items-center border-0 pl-1 pr-3">
            <span class="pr-2 text-light">Pierrick</span>
          </b-list-group-item>
        </b-list-group>

        <b-nav-item-dropdown text="Lang" right class="d-flex align-items-center border-left border-top-0 border-bottom-0 border-right-0 px-3">
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
  <!-- 
      END OF NAVBAR 
  -->
  
  <!-- 
      BOOTSTRAP VUE STRAPLINE
  -->
  <b-row class="bg-dark pt-4 pb-4">
    <b-col cols="12" md="2" class="mb-3 d-flex align-items-center justify-content-center">

      <b-nav pills>
      <!-- horizontal does not work -->
        <b-list-group horizontal class="flex-row">
        <!-- dark-bg-variant does not work -->
          <b-list-group-item dark-bg-variant href="https://bootstrap-vue.org/" class="flex-fill border-0 bg-dark text-center pr-1 pl-0 pt-0 pb-0">
            <img width="45" height="45" src="./assets/logo-bootstrap-vue.png" alt="Bootstrap Vue logo"><b-badge class="d-block">v.2.14.0</b-badge>
          </b-list-group-item>

          <b-list-group-item class="flex-fill border-0 bg-dark text-center p-0 d-flex align-items-center flex-wrap">
            <div class="d-flex align-items-center justify-content-center w-100">
              <img width="20" height="20" src="./assets/logo-vue.svg" alt="Vue.js logo"> <small><b-badge class="d-block ml-1">v.2.5.3</b-badge></small>
            </div>
            <div class="d-flex justify-content-center align-items-center w-100">
              <b-icon-arrow-up variant="white"></b-icon-arrow-up>
              <b-icon-arrow-down variant="white"></b-icon-arrow-down>
            </div>
            <div class="d-flex justify-content-center align-items-center w-100">
              <img width="20" height="20" src="./assets/logo-bootstrap.svg"> <small><b-badge class="d-block ml-1">v.4.0.0</b-badge></small>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-nav>

    </b-col>

    <b-col cols="12" md="8" class="d-flex align-items-center justify-content-center mb-3">
      <h1 class="text-center text-light m-0">{{ msg }}</h1>
    </b-col>
    
    <!-- Sliding in/out panel -->  
    <b-col cols="12" md="2" class="d-flex align-items-center justify-content-center mb-3">
      <div>
        <b-button size="sm" v-b-toggle.sidebar-1>MORE</b-button>
        <b-sidebar id="sidebar-1" title="Neat Feature!" shadow>
          <div class="px-3 py-2">
            <p>It could not be easier to implement a sliding in/out panel like this one using Bootstrap Vue</p>
            <p>Use this directive <em>v-b-toggle.sidebar-1</em> on the relevant (button) selector where <em>sidebar-1</em> is the ID of the sliding panel</p>
              <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
          </div>
        </b-sidebar>
      </div>
    </b-col>
    
  </b-row>

</b-container>

<!-- 
  MAIN CONTENT
-->
<b-container>
  
  <b-row>
    <!-- CAROUSEL -->
    <b-col cols="12" md="8">
      
      <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="mb-3 mt-3"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
    </b-col>

    <b-col cols="12" md="4" class="mt-3">
      <p class="lead">Carousel Data Display</p>
      <p class="mt-4">
        <strong>Slide #: {{ slide }}</strong><br>
        <strong>Sliding: {{ sliding }}</strong>
      </p>
      <hr class="my-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis.
      </p>
      <b-button v-b-modal.modal-1 variant="warning">More</b-button>
        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
      </b-modal>

    </b-col>

  </b-row>
  <b-row>
    
    <b-col cols="12" md="4" class="mt-3">
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style=""
        class="mb-4"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-col>

    <b-col cols="12" md="4" class="mt-3">
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style=""
        class="mb-4"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-col>

    <b-col cols="12" md="4" class="mt-3">
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style=""
        class="mb-4"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-col>
  </b-row>

  <b-row>
    <b-col cols="12" md="6" class="mb-3">
      <h2>Kevin burgdoggen chislic turkey sirloin pork short loin</h2>
      <p class="lead">Bacon ipsum dolor amet picanha doner buffalo jowl turducken corned beef, fatback capicola tri-tip beef ribs pork sausage spare ribs tongue short ribs.</p>
      <p>T-bone boudin cow bacon. Chuck chislic picanha salami doner jowl rump shankle drumstick pancetta capicola short ribs cow prosciutto bacon.</p>
    </b-col>

    <b-col cols="12" md="6">
    
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="info">
        <!-- only renders a H1 -->
        <!-- <template v-slot:header>BootstrapVue</template> -->
        <template v-slot:lead>
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
      featured content or information.
        </template>

        <hr class="my-4">

        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

        <b-button variant="primary" href="#">Do Something</b-button>
        <b-button variant="success" href="#">Do Something Else</b-button>
      </b-jumbotron>
    </b-col>
  </b-row>

  
  <b-row>
    <b-col cols="12" md="8">
       
       <h2>Turkey sirloin pork short loin</h2>
       <p>T-bone boudin cow bacon. Chuck chislic picanha salami doner jowl rump shankle drumstick pancetta capicola short ribs cow prosciutto bacon.</p>

      <!-- FORM -->
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

      


    </b-col>
    <b-col cols="12" md="4">
      
      <h2>Kevin burgdoggen chislic turkey sirloin pork short loin</h2>
      
      <p class="lead">Bacon ipsum dolor amet picanha doner buffalo jowl turducken corned beef, fatback capicola tri-tip beef ribs pork sausage spare ribs tongue short ribs.</p>
      <p>T-bone boudin cow bacon. Chuck chislic picanha salami doner jowl rump shankle drumstick pancetta capicola short ribs cow prosciutto bacon.</p>
      <p>T-bone boudin cow bacon. Chuck chislic picanha salami doner jowl rump shankle drumstick pancetta capicola short ribs cow prosciutto bacon.</p>

      <!--- Collapse -->  
      <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">Bacon ipsum dolor amet picanha doner buffalo jowl turducken corned beef, fatback capicola tri-tip beef ribs pork sausage spare ribs tongue short ribs</p>
          <b-button v-b-toggle.collapse-1-inner size="sm">Even more Toggle Inner Collapse</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <p>More content here</p>
          </b-collapse>
        </b-card>
      </b-collapse>

    </b-col>
  </b-row>

</b-container>

<!--
  FOOTER
-->
<footer class="footer bg-dark mt-3">
  <b-container class="p-3 text-light">
    <b-row>

      <b-col cols="12" class="d-flex align-items-center justify-content-center pt-3 pb-3">
       <p class="m-0"><b-icon icon="exclamation-circle-fill" variant="success" class="mr-1"></b-icon>Using Bootstrap-vue with Vue.js by <a href="https://github.com/pierricksenelaer" title="Pierrick Senelaer on Github">Pierrick Senelaer</a></p>
      </b-col>
      
    </b-row>
   </b-container>
</footer>

</div>
</template>

<style>
.navbar { margin-right: -15px; margin-left: -15px }

@media only screen and (max-width: 600px) {
  .user-area {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    border-top: 1px solid #fff;
    padding: 10px 0;
    margin-left: -15px !important;
    margin-right: -15px !important;
    margin-top: 15px;
  }
}

</style>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Using Bootstrap-vue with Vue.js',
      // FORM
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        // Carousel
        slide: 0,
        sliding: null
      }
    },
    methods: {
      
      // FORM
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      // CAROUSEL
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<template>
  <header>
    <nav class="px-3 py-2 bg-dark text-white" style="height: 58px; width: 100%; position: fixed !important; top: 0 !important; overflow: hidden;">
      <div class="d-flex flex-row align-items-center justify-content-between">  
        <div class="logo">Logo</div>        
        <ul class="nav col-12 col-lg-auto my-2 align-items-center justify-content-end my-md-0 text-small" 
            style="align-self: flex-end;">
          <li>
            <router-link to="/" class="nav-link text-white" @click="scrollToBanner"
              style="text-decoration: none; color: white;">Home
            </router-link>
          </li>              
          <li>
              <router-link to="/" class="nav-link text-white" @click="scrollToAbout"
                style="text-decoration: none; color: white;"> About
              </router-link>
          </li>
          <li>
              <router-link to="/" class="nav-link text-white" @click="scrollToProducts"
                style="text-decoration: none; color: white;"> Products
              </router-link>
          </li>
          <li>
              <router-link to="/" class="nav-link text-white" @click="scrollToContacts"
                style="text-decoration: none; color: white;"> Contact Us
              </router-link>
          </li>
        </ul>
      </div> 
    </nav>
  </header>
  
  <div class="card" style="margin-top: 58px; position: inherit;">
    <div class="card-body">
      <div class="container-fluid">
        <div ref="banner">
          <router-view ref="view-banner" name="Banner"></router-view>
        </div>  
        <div ref="about">      
        <router-view ref="view-about" name="About"></router-view>
        </div>
        <div ref="products">
          <router-view ref="view-products" name="Products"></router-view>
        </div>
        <div ref="contacts">
          <router-view ref="view-contacts" name="Contacts"></router-view>
        </div>
      </div>
    </div>
  </div>
  
</template>
  
<script>
  import { ref, onMounted  } from 'vue';

  export default {
    name: 'App',
    setup() {

    },
    mounted() {      
      // this.scrollToAnchorPoint();
    }, 
    methods: {
      scrollToBanner() {
        this.$refs.banner.scrollIntoView({ behavior: 'smooth' });
      },
      scrollToAbout() {
        this.$refs.about.scrollIntoView({ behavior: 'smooth' });
      },
      scrollToProducts() {
        this.$refs.products.scrollIntoView({ behavior: 'smooth' });
      },
      scrollToContacts() {
        this.$refs.contacts.scrollIntoView({ behavior: 'smooth' });
      },
    },
           
  }
</script>

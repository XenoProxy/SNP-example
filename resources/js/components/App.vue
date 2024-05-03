<template>
  <header>
    <nav class="px-3 pt-2 bg-dark" style="height: 58px; width: 100%; position: fixed !important; top: 0 !important; overflow: hidden;">
      <div class="header d-flex flex-row align-items-center justify-content-between">  
        <div class="logo" style="color: azure;">SNP</div>    
        <ul class="nav col-12 col-lg-auto align-items-center justify-content-end text-small" style="align-self: flex-end;">   
          <li class="lang">
            <a class="lang-button">EN</a>
            <a class="lang-button">KO</a>
          </li>      
          <li>
              <router-link to="/" class="nav-link" @click="scrollToAbout"
                style="text-decoration: none;"> About
              </router-link>
          </li>
          <li>
            <router-link to="/" class="nav-link" @click="scrollToSupply"
              style="text-decoration: none;">Supply 
            </router-link>
          </li>     
          <li>
              <router-link to="/" class="nav-link" @click="scrollToCatalog"
                style="text-decoration: none;"> Catalog
              </router-link>
          </li>
          <li>
              <router-link to="/" class="nav-link" @click="scrollToContacts"
                style="text-decoration: none;"> Contact Us
              </router-link>
          </li>
        </ul>
      </div> 
    </nav>
  </header>
  
  <div class="card" style="margin-top: 58px; position: inherit;">
    <div class="card-body">
      <div ref="about">      
      <router-view ref="view-about" name="About"></router-view>
      </div>
      <div ref="supply">
        <router-view ref="view-supply" name="Supply"></router-view>
      </div>  
      <div ref="catalog">
        <router-view ref="view-catalog" name="Catalog"></router-view>
      </div>
      <div ref="contacts">
        <router-view ref="view-contacts" name="Contacts"></router-view>
      </div>
    </div>
  </div>
  
  <footer>
    <div class="footer"></div>
  </footer>
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
      scrollToAbout() {
        this.$refs.about.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
      },
      scrollToSupply() {
        this.$refs.supply.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest"});
      },
      scrollToCatalog() {
        this.$refs.catalog.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
      },
      scrollToContacts() {
        this.$refs.contacts.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
      },
    },
           
  }
</script>

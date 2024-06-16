<template>
  <header>
    <nav class="pt-2 bg-dark" style="height: 58px; width: 100%; position: fixed !important; top: 0 !important; overflow: hidden;">
      <div class="header d-flex flex-column align-items-center">  
        <img class="logo" src="../../../public/images/Logo.png"></img>    
        <ul class="nav align-items-center justify-content-start" style="align-self: flex-end;">       
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
        <div class="lang d-flex flex-row">
          <a class="lang-button">EN</a>
          <a class="lang-button">KO</a>
        </div>
      </div> 
    </nav>
  </header>
  
  <div class="card" style="position: inherit;">
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
    <div class="footer">
      <div class="footer-info-container d-flex flex-column">
        <p class="footer-info">A-311 Halla One and One Tower 101 Gasan Digital 2-ro, Geumcheon-gu, Seoul 08505 Korea Hyeyoung Lim</p>
        <p class="footer-info">snptec@snptec.co.kr</p>
        <p class="footer-info">+82 2 2101 2056</p>
        <p class="footer-info" id="current-year">Copyright &copy; SNP Tec Corp.</p>
      </div>
    </div>
  </footer>
</template>
  
<script>
  import { ref, onMounted  } from 'vue';

  export default {
    name: 'App',
    setup() {

    },
    mounted() {      
      document.getElementById('current-year').innerHTML = 'Copyright &copy; ' + new Date().getFullYear() + ' SNP Tec Corp.';
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

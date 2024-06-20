<template>
  <header>
    <nav class="pt-2 bg-dark" style="height: 58px; width: 100%; position: fixed !important; top: 0 !important; overflow: hidden;">
      <div class="header d-flex flex-column align-items-center">  
        <img class="logo" src="../../../public/images/Logo.png"></img>    
        <ul class="nav align-items-center justify-content-start" style="align-self: flex-end;">       
          <li>
              <router-link to="/" class="nav-link" @click="scrollToAbout"
                style="text-decoration: none;"> {{ $t('nav_about') }}
              </router-link>
          </li>
          <li>
            <router-link to="/" class="nav-link" @click="scrollToSupply"
              style="text-decoration: none;"> {{ $t('nav_supply') }} 
            </router-link>
          </li>     
          <li>
              <router-link to="/" class="nav-link" @click="scrollToCatalog"
                style="text-decoration: none;"> {{ $t('nav_catalog') }}
              </router-link>
          </li>
          <li>
              <router-link to="/" class="nav-link" @click="scrollToContacts"
                style="text-decoration: none;"> {{ $t('nav_contact_us') }}
              </router-link>
          </li>
        </ul>
        <div class="lang d-flex flex-row">
          <a class="lang-button" @click="switchLanguage">EN</a>
          <a class="lang-button" @click="switchLanguage">KO</a>
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
        <img class="logo-footer" src="../../../public/images/Logo.png"></img> 
        <p class="footer-info">{{ $t('address') }}</p>
        <p class="footer-info">snptec@snptec.co.kr</p>
        <p class="footer-info">{{ $t('tel') }}</p>
        <p class="footer-info" id="current-year">Copyright &copy; SNP Tec Corp., Ltd</p>
      </div>
    </div>
  </footer>
</template>
  
<script>
  import { ref, onMounted  } from 'vue';
  import { useI18n } from '@yangss/vue3-i18n';
  export default {
    name: 'App',
    setup() {
      const { locale, t } = useI18n();
      return {
        switchLanguage: () => { locale.value = locale.value === 'koKR' ? 'enUS' : 'koKR' },
    }
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

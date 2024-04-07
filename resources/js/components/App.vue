<template>
  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="d-flex flex-row align-items-center justify-content-between">  
        <div class="logo">Logo</div>        
        <ul class="nav col-12 col-lg-auto my-2 align-items-center justify-content-end my-md-0 text-small" 
            style="align-self: flex-end;">
          <li>
            <router-link to="/" class="nav-link text-white" style="text-decoration: none; color: white;">
              Home
            </router-link>
          </li>              
          <li>
              <router-link to="/" class="nav-link text-white" style="text-decoration: none; color: white;">
                About
              </router-link>
          </li>
          <li>
              <router-link to="/" class="nav-link text-white" style="text-decoration: none; color: white;">
                Partners
              </router-link>
          </li>
          <li>
              <router-link to="/" class="nav-link text-white" style="text-decoration: none; color: white;">
                Contact Us
              </router-link>
          </li>
        </ul>
      </div> 
    </div>
  </header>
  
  <div class="card">
    <div class="card-body">
      <div class="container-fluid">
        <router-view class="view banner" name="Banner"></router-view>
        <router-view class="view about" name="About"></router-view>
        <router-view class="view products" name="Products"></router-view>
        <router-view class="view contacts" name="Contacts"></router-view>
      </div>
    </div>
  </div>
  
</template>
  
<script>
    export default {
        name: 'App',
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

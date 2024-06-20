<template>
  <div class="about">
    <div class="banner"></div>
    <div class="main-tex-container d-flex align-items-center justify-content-center">
      <p class="main-text text-center">
        <span class="company-name">{{ $t('about_company_name') }}</span>{{ $t('about_company_main') }}</p>
    </div>
    <div class="container" style="height: auto;">      
      <p class="text-justify">{{ $t('about_company_p1') }}</p>
      <p class="text-justify">{{ $t('about_company_p2') }}</p>
      <p class="text-justify">{{ $t('about_company_p3') }}</p>     
    </div>
    <hr class="about-hr">
  </div>
</template>
<template>
  <div class="supply">
    <div class="container supply-container" style="height: auto;">
      <div class="supply-part text-justify supply-text">
        <p style="font-size: 18px;">{{ $t('supply_text') }}</p>
        <p style="font-size: 18px;">{{ $t('supply_p2') }}</p>
      </div>
      <div class="supply-part">
        <p style="font-size: 20px;">{{ $t('supply_key_features') }}</p>        
        <ul class="supply-list d-flex flex-column">
          <li>{{ $t('supply_feature_1') }}</li>
          <li>{{ $t('supply_feature_2') }}</li>
          <li>{{ $t('supply_feature_3') }}</li>
          <li>{{ $t('supply_feature_4') }}</li>
          <li>{{ $t('supply_feature_5') }}</li>
          <li>{{ $t('supply_feature_6') }}</li>
        </ul>  
      </div>       
    </div>
  </div>
</template>
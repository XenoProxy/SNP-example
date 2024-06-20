import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createI18n } from '@yangss/vue3-i18n';

import App from './components/App.vue';
import About from './components/About.vue';
import Supply from './components/Supply.vue';
import Catalog from './components/Catalog.vue';
import Contacts from './components/Contacts.vue';


const i18n = createI18n({
  locale: 'enUS',
  fallbackLocale: 'enUS',
  messages: {
    'koKR': {
      nav_about: '회사 소개',
      nav_supply: '공급',
      nav_catalog: '카탈로그',
      nav_contact_us: `문의`,
      about_company_name: '㈜에스엔피테크는', 
      about_company_main: ' SMT 및 DIP 마운팅 부품 조립뿐만 아니라 고객의 요구에 맞춘 다양한 제품을 만드는 전문 회사입니다.',
      about_company_p1: 'PCB 조립 분야의 전문성을 바탕으로 복잡하고 어려운 프로젝트에 대한 최상의 솔루션을 제공할 수 있습니다. 당사는 SMD 부품의 수동 및 자동 설치를 모두 수행할 수 있는 경험과 기술을 보유하고 있으며, 전문 장비와 기술을 사용하여 SMD 리플로우 솔더링 및 DIP 뿐만 아니라 양면/ 다층 조립 및 다작 분리를 포함한 모든 설치의 정확성과 신뢰성을 보장합니다.',
      about_company_p2: '당사는 간단한 제품부터 고기술 제품에 이르기까지 고객 요구에 항상 부합하는 제품 조립을 전문으로 합니다. 프로토타입과 시제품을 생성하고, 하위 및 상위 수준에서 소프트웨어를 개발 및 디버깅합니다. 패케이징 또한 외관 및 기능적 디자인에 특별한 개성을 두어 최종 사용자에게 최대한의 보호와 사용 편의성을 보장하며, 모든 생산 단계에서 최상의 기준을 바탕으로 한 고객과의 약속입니다.',
      about_company_p3: '㈜에스엔피텍을 파트너로 선택함은 귀사의 프로젝트에 맞춤형 및 혁신적인 해결책의 제공과 신뢰할 수 있는 파트너를 갖게 됨을 의미합니다.',
      address:'서울특별시 금천구 가산디지털2로 101, A동 311호 (가산동, 한라원앤원타워)',

    },
    'enUS': {
      nav_about: 'About',
      nav_supply: 'Supply',
      nav_catalog: 'Catalog',
      nav_contact_us: `Contact us`,
      about_company_name: 'SNP TECH Co., Ltd',
      about_company_main: ' is a company specializing in the assembly of SMT and DIP mounting components, as well as the creation of unique products in accordance with customer requirements',
      about_company_p1: 'Expertise in the field of contract assembly of printed circuit boards allows us to offer solutions for the most demanding projects. SNP Tec Corp. has the experience and skills to perform both manual and automatic installation of SMD components. Using professional equipment and technology, SNP Tec Corp. guarantees the accuracy and reliability of every installation, including SMD reflow soldering and DIP installation, as well as double-sided assembly and multi-workpiece separation.',
      about_company_p2: 'SNP Tec Corp. specializes in the assembly of products, from simple to high-tech, always adhering to customer requirements. SNP Tec Corp. creates prototypes and prototypes, develops and debugs software at the lower and upper levels. When packaging SNP Tec Corp. products. places special emphasis on their aesthetic and functional design, ensuring maximum protection and ease of use for the end user. Quality control is an integral part of every stage of production to ensure that each product meets the highest standards.',
      about_company_p3: 'Choosing SNP Tec Corp. for your contract electronics assembly, you have a reliable partner ready to offer customized and innovative solutions for your projects. Take the first step towards success and contact SNP Tec Corp. today to learn more about our Contract PCB Assembly, Contract Circuit Board Assembly, and Contract Electronics Assembly services.',
      address:'A-311 Halla One and One Tower 101 Gasan Digital 2-ro, Geumcheon-gu, Seoul 08505 Korea Hyeyoung Lim',
    }
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/',
        components: {
          About,
          Supply,
          Catalog,
          Contacts
        }, 
      },
  ]
});

const app = createApp(App);
// app.component('app-component', App);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

app.use(router);
app.use(i18n);
app.mount('#app');

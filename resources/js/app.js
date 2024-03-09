import './bootstrap';
import { createApp } from 'vue'
import Assignments from "./components/Assignments/Assignments.vue";

createApp({})
    .component('Assignments', Assignments)
    .mount('#app')

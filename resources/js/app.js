import './bootstrap';
import { createApp } from 'vue'
import Assignments from "./components/Assignments/Assignments.vue";
import PostsIndex from "./components/Posts/Index.vue";


createApp({})
    .component('Assignments', Assignments)
    .component('PostsIndex', PostsIndex)
    .mount('#app')

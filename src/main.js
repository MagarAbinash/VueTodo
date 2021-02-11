import { createApp } from 'vue'

// import App from './App.vue'

// netninza
// import App from './netninza/App.vue'
// import './netninza/assets/global.css'

// reactiontimer
// import App from './reactiontimer/App.vue'

// todo
// import App from './todo/App.vue'

// web-form
// import App from './web-form/App.vue'

// Router App
// import App from './routerapp/App.vue'
// import router from './routerapp/router'

// Composition API
import App from './compositionApi/App.vue'
import router from './compositionApi/router'

// For Apps wihtout vue-router
// createApp(App).mount('#app')

// For routing Apps
createApp(App).use(router).mount('#app')

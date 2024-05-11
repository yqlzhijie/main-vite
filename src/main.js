/*
 * @Description: 
 * @Autor: 郝志杰
 * @Date: 2024-05-11 14:59:12
 * @LastEditors: 郝志杰
 * @LastEditTime: 2024-05-11 15:01:20
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app'
microApp.start()
createApp(App).mount('#app')

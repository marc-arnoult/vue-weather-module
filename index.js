import Weather from './src/Weather'

export default {
    install(Vue, options) {
        Vue.component("weather", Weather);
    }
};
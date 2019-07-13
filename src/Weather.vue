<template>
    <div class="weather" v-if="weather">
        <div class="weather-body">
            <div class="weather-description">
                <img :src="weather.iconPath" :alt="weather.description">
                <div>
                    <span class="temperature">{{ weather.temp }}°</span>
                    <div>{{ weather.description }}</div>
                </div>
            </div>
            <div class="weather-infos">
                <span>Min {{ weather.temp_min }} °</span> 
                <span>Max {{ weather.temp_max }} °</span>
            </div>
        </div>
        <div class="weather-footer">
            <div>
                <img src="../assets/images/sunrise.svg" :alt="'Levé de soleil à ' + weather.sunrise">
                <span>{{ weather.sunrise }}</span>
            </div>
            <div>
                <img src="../assets/images/sunset.svg" :alt="'Couché de soleil à ' + weather.sunset">
                <span>{{ weather.sunset }}</span>
            </div>
            <div>
                <img src="../assets/images/humidity.svg" :alt="'Humidité' + weather.humidity + '%'">
                <span>{{ weather.humidity + '%' }}</span>
            </div>
            <div>
                <img src="../assets/images/wind.svg" :alt="'Vent de ' + weather.speed + 'mètre par seconde'">
                <span>{{ weather.speed + 'm/s'}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { RepositoryFactory } from './repository/RepositoryFactory'

export default {
  props: {
    city: {
      type: String,
      required: true
    },
    apiKey: {
      type: String,
      required: true
    },
    apiEndpoint: {
        type: String,
        required: false,
        default: 'openweathermap'
    }
  },
  data() {
    return {
      repository: RepositoryFactory.get(this.apiEndpoint, this.apiKey),
      weather: null
    }
  },
  async created() {
    this.weather = await this.repository.getByCity(this.city)
  }
}
</script>

<style>
    .weather {
        display: flex;
        flex-direction: column;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        max-width: 420px;
    }
    .weather-body {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .weather-description {
        display: flex;
        align-items: center;
    }
    .weather-infos {
        display: flex;
        flex-direction: column;
    }
    .weather-footer {
        display: flex;
        justify-content: space-between
    }
    .weather-footer img {
        width: 28px;
        height: 28px;
        vertical-align: sub;
    }
</style>


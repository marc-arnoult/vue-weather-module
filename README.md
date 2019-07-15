# Vue Weather Module
[![Build Status](https://travis-ci.org/marc762/vue-weather-module.svg?branch=master)](https://travis-ci.org/marc762/vue-weather-module)

## Usage
```js
<template>
    <div>
        <weather city="Paris" apiKey="random" />
    </div>
</template>

<script>
import Weather from 'vue-weather-module'
import Vue from 'vue'

Vue.use(Weather)

...
</script>
```

## Props

| Props | Type | Default | Description  |
| --------|:------| -----------|-------|
| apiKey | String, *required*   | - | secret key to consume API endoint |
| city | String, *required* | - | the city location of the weather |

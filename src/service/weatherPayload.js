export default class {
    /**
     * @param {Object} data 
     */
    constructor(data) {
        this.temp = data.temp
        this.temp_max = data.temp_max
        this.temp_min = data.temp_min
        this.humidity = data.humidity
        this.description = data.description,
        this.iconPath = data.iconPath
        this.speed = data.speed
        this.sunrise = data.sunrise,
        this.sunset = data.sunset

    }
    /**
     * @param {Object} data 
     */
    static createFromOpenweathermap(data) {

        return new this({
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            humidity: data.main.humidity,
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString('fr-FR').slice(0, 5),
            sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString('fr-FR').slice(0, 5),
            speed: data.wind.speed,
            description: data.weather[0].description,
            iconPath: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })
    }
}
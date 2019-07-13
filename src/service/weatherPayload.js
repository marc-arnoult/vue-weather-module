export default class {
    /**
     * @param {Object} data 
     */
    constructor(data) {
        this.temp = data.temp
        this.temp_max = data.temp_max
        this.humidity = data.humidity
        this.weather = {
            description: data.weather.description,
            iconPath: data.weather.iconPath
        }
    }
    /**
     * @param {Object} data 
     */
    static createFromOpenweathermap(data) {
        return new this({
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            weather: {
                description: data.weather[0].description,
                iconPath: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            }
        })
    }
}
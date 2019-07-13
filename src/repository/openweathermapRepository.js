
import weatherPayload from '../service/weatherPayload';
const endpoint = new URL("http://api.openweathermap.org/data/2.5/weather")

export default class {
    /**
     * @param {string} apiKey 
     */
    constructor(apiKey) {
        this.apiKey = apiKey
    }
    /**
     * @param {string} city 
     * @returns {weatherPayload}
     */
    async getByCity(city) {
        endpoint.searchParams.append('q', city)
        endpoint.searchParams.append('APPID', this.apiKey)
        endpoint.searchParams.append('units', 'metric')
        endpoint.searchParams.append('lang', 'fr')
        const res = await fetch(endpoint)
        const data = await res.json()
        return weatherPayload.createFromOpenweathermap(data);
    }
}
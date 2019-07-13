import openweathermapRepository from './openweathermapRepository'

const repositories = {
    openweathermap: openweathermapRepository
}

export const RepositoryFactory = {
    /**
     * @param {string} name 
     * @param {string} apiKey 
     * @returns {Object}
     */
    get(name, apiKey) { return new repositories[name](apiKey) }
}
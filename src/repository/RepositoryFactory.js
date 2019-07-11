import openweathermapRepository from './openweathermapRepository'

const repositories = {
    openweathermap: openweathermapRepository
}

export const RepositoryFactory = {
    get(name, apiKey) { return new repositories[name](apiKey) }
}
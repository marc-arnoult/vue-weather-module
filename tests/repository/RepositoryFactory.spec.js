import { RepositoryFactory } from '../../src/repository/RepositoryFactory'
import openweathermapRepository from '../../src/repository/openweathermapRepository'

describe('RepositoryFactory', () => {
    test('factory should return the right repository', () => {
        const weatherRepository = RepositoryFactory.get('openweathermap');
        expect(weatherRepository).toBeInstanceOf(openweathermapRepository)
    })
})
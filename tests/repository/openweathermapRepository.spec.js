import { RepositoryFactory } from '../../src/repository/RepositoryFactory'

describe('openweathermapRepository', () => {
    test('repository should return a weatherPayload', async () => {
        const openweathermapRepository = RepositoryFactory.get('openweathermap')
        global.fetch = jest.fn(() => new Promise(resolve => resolve()));
        const mockSuccessResponse = {
            main: {},
            sys: {},
            wind: {},
            weather: [{}]
        }
        const mockJsonPromise = Promise.resolve(mockSuccessResponse)
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise
        })
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

        await openweathermapRepository.getByCity('Paris')

        const url = new URL('http://api.openweathermap.org/data/2.5/weather')
        url.searchParams.append('q', 'Paris')
        url.searchParams.append('APPID', undefined)
        url.searchParams.append('units', 'metric')
        url.searchParams.append('lang', 'fr')

        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(global.fetch).toHaveBeenCalledWith(url)

    })
})
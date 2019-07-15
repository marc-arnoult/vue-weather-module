import { mount } from '@vue/test-utils'
import Weather from '../src/Weather'
import weatherPayload from '../src/service/weatherPayload'

describe('Weather', () => {
    test('Weather is a Vue instance with the right data', () => {
        const weatherData = {
            main: {
                temp: 20,
                temp_max: 26,
                temp_min: 18,
                humidity: 50
            },
            sys: {
                sunrise: 1562990712163,
                sunset: 1563911612163
            },
            wind: {
                speed: 20
            },
            weather: [{
                description: "Clear",
                icon: "10"
            }]
        }
        global.fetch = jest.fn(() => new Promise(resolve => resolve()));
        const mockSuccessResponse = weatherData
        const mockJsonPromise = Promise.resolve(mockSuccessResponse)
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise
        })
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

        const wrapper = mount(Weather, {
            propsData: {
                city: 'Paris',
                apiKey: 'random'
            }
        })
        wrapper.setData({
            weather: weatherPayload.createFromOpenweathermap(weatherData)
        })
        
        expect(wrapper.isVueInstance()).toBeTruthy()
        expect(wrapper.find('.temperature').text()).toMatch('20°')
        expect(wrapper.find('.weather-description > div > div').text()).toMatch('Clear')
        expect(wrapper.findAll('.weather-infos > span').at(0).text()).toMatch('Min 18 °')
        expect(wrapper.findAll('.weather-infos > span').at(1).text()).toMatch('Max 26 °')
        expect(wrapper.findAll('.weather-footer div span').at(2).text()).toMatch('50%')
        expect(wrapper.findAll('.weather-footer div span').at(3).text()).toMatch('20m/s')
    })
})
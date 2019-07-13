import weatherPayload from '../../src/service/weatherPayload'

describe('weatherPayload', () => {
  test('create from openweathermap is instance of weatherPayload', () => {
    const payload = weatherPayload.createFromOpenweathermap({
        main: {},
        sys: {},
        wind: {},
        weather: [{}]
    });
    expect(payload).toBeInstanceOf(weatherPayload)
  })
  test('payload format should be well formatted', () => {
    const payload = weatherPayload.createFromOpenweathermap({
        main: {
            temp: 20,
            temp_max: 22,
            temp_min: 18,
            humidity: 50
        },
        sys: {},
        wind: {
            speed: 18
        },
        weather: [{
            description: "Clear"
        }]
    });
    expect(payload).toMatchObject({
        temp: 20,
        temp_max: 22,
        temp_min: 18,
        humidity: 50,
        speed: 18,
        description: "Clear"
    })
  })
})
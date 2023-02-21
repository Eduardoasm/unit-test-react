const cities = ['Caracas', 'Valencia', 'Madrid', 'Buenos aires', 'Bogota']

const functionString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]

    return string
}

module.exports = functionString
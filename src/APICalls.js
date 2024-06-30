async function getRandomNumberFact() {
    const response = await fetch('http://numbersapi.com/random');

    return await response.json();
}

module.exports = {
    getRandomNumberFact: getRandomNumberFact()
}
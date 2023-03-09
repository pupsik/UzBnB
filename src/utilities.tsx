export function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

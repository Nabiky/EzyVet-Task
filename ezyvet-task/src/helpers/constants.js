export const Env = Object.freeze({
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
});

export const roundTwoPrecison = number => {
    return parseFloat(Math.round(number * 100) / 100).toFixed(2);
};

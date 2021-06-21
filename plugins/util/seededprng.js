/* eslint-disable */

module.exports = {
    name: "Seeded PRNG",
    author: "https://stackoverflow.com/a/47593316/4156215",
    version: 1,
    description: "MurmurHash3's Mixing algorithm based seeded pseudo-random number generator.",
    addons: {
        seed: (str) => {
            for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
                h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
                h = h << 13 | h >>> 19;
            }
            h = Math.imul(h ^ h >>> 16, 2246822507);
            h = Math.imul(h ^ h >>> 13, 3266489909);
            return (h ^= h >>> 16) >>> 0;
        }
    }
};

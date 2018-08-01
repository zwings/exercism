/*Given an age in seconds, calculate how old someone would be on:

   - Earth: orbital period 365.25 Earth days, or 31557600 seconds
   - Mercury: orbital period 0.2408467 Earth years
   - Venus: orbital period 0.61519726 Earth years
   - Mars: orbital period 1.8808158 Earth years
   - Jupiter: orbital period 11.862615 Earth years
   - Saturn: orbital period 29.447498 Earth years
   - Uranus: orbital period 84.016846 Earth years
   - Neptune: orbital period 164.79132 Earth years

So if you were told someone were 1,000,000,000 seconds old, you should
be able to say that they're 31.69 Earth-years old.*/
class Spaceage {
    constructor(input) {
        this.seconds = input;
    }
    onEarth() {
        return Number((this.seconds / 31557600).toFixed(2))

    };
    onMercury() {
        return Number((this.seconds / 31557600 / 0.2408467).toFixed(2))

    };
    onVenus() {
        return Number((this.seconds / 31557600 / 0.61519726).toFixed(2))
    };
    onMars() {
        return Number((this.seconds / 31557600 / 1.8808158).toFixed(2)
        )
    };
    onJupiter() {
        return Number((this.seconds / 31557600 / 11.862615).toFixed(2)
        )
    };
    onSaturn() {
        return Number((this.seconds / 31557600 / 29.447498).toFixed(2)
        )
    };
    onUranus() {
        return Number((this.seconds / 31557600 / 84.016846).toFixed(2)
        )
    };
    onNeptune() {
        return Number((this.seconds / 31557600 / 164.79132).toFixed(2)
        )
    };
}

module.exports = Spaceage;
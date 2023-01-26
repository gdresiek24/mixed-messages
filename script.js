//random message generator
//horoscope generator

const signs = ['Sagittarius', 'Capricorn','Aquarius', 'Libra', 'Virgo', 'Aries', 'Scorpio', 'Taurus', 'Pisces', 'Gemini', 'Leo', 'Cancer'];


const timePeriod = ['today', 'this week', 'this month', 'this year'];

const messages = [
    'the stars have align perfectly and you will feel warm connection with unexpected friend.',
    'a true love connection could materialize out of thin air.',
    'whether you literally take off on a vacay or business trip (that\'s equal parts pleasure) or just have adventures close to home, things are sure to get a whole lot more passionate.',
    'whatever you\'ve been trying to accomplish over the past several months could break loose just the way you want it to.',
    'a group meeting or social event could be thrown together with casual acquaintances, and your relationship with these people could abruptly change. At the very least, some will become friends.',
    'wonderful news comes from far away,  possibly involving writing, teaching, or publishing. Creativity combines with heightened intellectual ability to bring success and good fortune to your door.',
    'the planets will force you to have changed perceptions about a number of things in life. Especially in your personal life.',
    'horoscope wants you to know that in focusing your mind on something, you sometimes happen to ignore the things that are more practical and rewarding.',   
]

const randomMessage = () => {
    const sign = signs[Math.floor(Math.random()*signs.length)];
    const time = timePeriod[Math.floor(Math.random()*timePeriod.length)];
    const message = messages[Math.floor(Math.random()*messages.length)];

    return `Dear ${sign}, ${time}, ${message}`;
}

console.log(randomMessage());
console.log(randomMessage());
console.log(randomMessage());




//array of zodiac signs
var zodiac = [
{
zodiacSign:"pisces",
birthdayRange:"February 19th - March 20th",
zodiacSymbol:"Fishes",
traits:"Their ruling planet is Neptune, so Pisces are more intuitive\
        than others and have an artistic talent. Neptune is connected\
        to music, so Pisces reveal music preferences in the earliest\
        stages of life. They are generous, compassionate and extremely\
        faithful and caring.",
zodiacImage:"images/pisces.png"
},

{
zodiacSign:"aries",
birthdayRange:"March 21st - April 19th",
zodiacSymbol:"Ram",
traits:"Enterprising, Incisive, Spontaneous, Daring, Active, Courageous\
        and Energetic, the Aries are the proverbial infants, guileless and optimistic\
        to the fault. However, they also are impatient, impetuous, vain, proud and\
        egoistic.",
zodiacImage:"images/aries.png"
},

{
zodiacSign:"taurus",
birthdayRange:"April 20th - May 20th",
zodiacSymbol:"Bull",
traits:"Known for being reliable, practical, ambitious and sensual, the people\
        born under the Zodiac Sign Taurus have an eye for beauty. They tend to\
        be good with finances, and hence, make efficient financial managers.\
        However, like everyone else, a Taurus also has both positive and negative\
        traits.",
zodiacImage:"images/taurus.png"
},

{
zodiacSign:"gemeni",
birthdayRange:"May 21st - June 20th",
zodiacSymbol:"Twins",
traits:"Expressive and quick-witted, Gemini represents two different personalities\
        in one and you will never be sure which one you will face. They are sociable,\
        communicative and ready for fun, with a tendency to suddenly get serious,\
        thoughtful and restless.",
zodiacImage:"images/gemeni.png"
},

{
zodiacSign:"cancer",
birthdayRange:"June 21st - July 22nd",
zodiacSymbol:"Twins",
traits:"Deeply intuitive and sentimental, Cancer can be one of the most challenging\
        zodiac signs to get to know. They are very emotional and sensitive, and\
        care deeply about matters of the family and their home. Cancer is sympathetic\
        and attached to people they keep close.",
zodiacImage:"images/cancer.png"
},

{
zodiacSign:"leo",
birthdayRange:"July 23rd - August 22nd",
zodiacSymbol:"Lion",
traits:" Warm, action-oriented and driven by the desire to be loved and admired,\
         the Leo have an air royalty about them. They love to be in the limelight,\
         which is why many of them make a career in the performing arts. The\
         personality of a Leo is made up of some positive as well as negative traits.",
zodiacImage:"images/leo.png"
},

{
zodiacSign:"virgo",
birthdayRange:"August 23rd - September 22nd",
zodiacSymbol:"Virgin",
traits:"Astrologers ascribe certain personality traits to a person born under the\
        Virgo: people born under this sign are typically analytical, kind, hardworking\
        and practical. According to astrologers, Virgos tend to worry often; they\
        are shy and dislike being the center of attention.",
zodiacImage:"images/virgo.png"
},

{
zodiacSign:"libra",
birthdayRange:"September 23rd - October 22nd",
zodiacSymbol:"Scales",
traits:"The people born under the Sign Libra are kind, gentle and lovers of beauty,\
        harmony and peace. However, in their effort to keep everyone happy, they find\
        it difficult to say 'NO' to anyone, and as a result, they end up getting\
        stressed. They have a lot of positive traits, but some negative ones, too.",
zodiacImage:"images/libra.png"
},

{
zodiacSign:"scorpio",
birthdayRange:"October 23rd - November 21st",
zodiacSymbol:"Scorpion",
traits:"The Scorpio-born are strong willed and mysterious, and they know how to\
        effortlessly grab the limelight, as they possess what it takes to achieve\
        their goals. They have a magnetic charm that can't be ignored.",
zodiacImage:"images/scorpio.png"
},

{
zodiacSign:"sagittarius",
birthdayRange:"November 22nd - December 21st",
zodiacSymbol:"Archer",
traits:"Some of the best Sagittarius traits are his frankness, courage, and optimism.\
        He is a restless wanderer, so the best you can do to keep his attention\
        is to share in his quest, appreciate his wisdom and respect his opinions.\
        Some of the negative Sagittarius characteristics include his carelessness\
        and impatience.",
zodiacImage:"images/sagittarius.png"
},

{
zodiacSign:"capricorn",
birthdayRange:"December 22nd - January 19th",
zodiacSymbol:"Goat",
traits:"The Capricorn-born people are the most determined of the entire Zodiac.\
        The most prominent qualities of the Goats, as they are called, are that\
        they are ambitious, conservative, determined, practical and helpful.",
zodiacImage:"images/capricorn.png"
},

{
zodiacSign:"aquarius",
birthdayRange:"January 20th - Febraury 18th",
zodiacSymbol:"Water Bearer",
traits:"The most 'electrifying' sign. Aquarius rules shock and electricity, come across them the wrong way and they'll electrocute you. Overall, a great sign. Humanitarian, friendly, super intelligent, and oh boy unpredictable! You can never guess what an Aquarian will do next ... But be prepared to get shocked.",
zodiacImage:"images/aquarius.png"
}
];

//variables for the 'for' loop




var yourSign =
document.getElementById("yourSign");

var dateRange =
document.getElementById("dateRange");

var wrong=
document.getElementById("wrong");

var zodiacSymbol =
document.getElementById("zodiacSymbol");

var traits =
document.getElementById("traits");

var zodiacImage =
document.getElementById("zodiacImage");



//onclick fucntion!!!!!!!!!!!!!!!!!!!!!!!!!
function signCheck() {
    var userInput = document.getElementById("Your-Zodiac").value.toLowerCase()
    //for loop to run through zodiac array
    for(i = 0; i < zodiac.length; i++) {
      if(userInput == zodiac[i].zodiacSign){

        yourSign.innerHTML = zodiac[i].zodiacSign;
        dateRange.innerHTML = zodiac[i].birthdayRange;
        zodiacSymbol.innerHTML = zodiac[i].zodiacSymbol;
        zodiacImage.src = zodiac[i].zodiacImage;
        traits.innerHTML = zodiac[i].traits;
        wrong.innerHTML = "";
        return;

      }
      else{
        wrong.innerHTML = "you are wrong";

      }
  }
}

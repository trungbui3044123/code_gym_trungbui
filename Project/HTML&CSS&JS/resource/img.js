class pokemondb {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}
const pokemonid1 = new pokemondb("zubat", "/resource/zubat.PNG");
const pokemonid2 = new pokemondb("golbat", "/resource/golbat.PNG");
const pokemonid3 = new pokemondb("oddish", "/resource/oddish.PNG");
const pokemonid4 = new pokemondb("oddish", "/resource/gloom.PNG");
const pokemonid5 = new pokemondb("oddish", "/resource/vileplume.PNG");
const pokemonid6 = new pokemondb("oddish", "/resource/paras.PNG");
const pokemonid7 = new pokemondb("oddish", "/resource/parasect.PNG");
const pokemonid8 = new pokemondb("oddish", "/resource/venonat.PNG");
const pokemonid9 = new pokemondb("oddish", "/resource/venomoth.PNG");
const pokemonid10 = new pokemondb("oddish", "/resource/diglett.PNG");
export const objectarray=[pokemonid1,pokemonid2,pokemonid3,
    pokemonid4,pokemonid5,pokemonid6,
    pokemonid7,pokemonid8,pokemonid9,pokemonid10
];
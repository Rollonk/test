
let people = [
    {name: 'Kirill', budget: 3500},
    {name: 'Murill', budget: 2500},
    {name: 'Lorill', budget: 1500},
]

/*let findPerson;
for (const person of people) {
    if (person.budget === 3500){
        findPerson = person
    }
}*/
let findPerson = people.find(person => person.budget === 3500);


let cars = ["fdf", "fdfff"];
const dodo = cars.map( car => {
    return car.toUpperCase()
});

const pow2 = num => num ** 2;
const nums = [1,2,3];
const pow2Nums = nums.map(pow2)
let filtredNums = pow2Nums.filter(num =>  num > 3)
console.log (pow2Nums);
console.log (filtredNums);
// CARS
// Знайти авто зеленого кольору
// Знайти усі спорткари
// Порахувати кількість авто 2022 року
// Знайти всі машини з ціною вище 30000.
// Знайти всі машини червоного кольору.
// Порахувати кількість машин 2022 року.
// Відсортувати машини за роком випуску (від найстарішого до найновішого).
// Знайти найдорожчу машину.
// Знайти всі машини заданої марки (наприклад, Toyota).
// Порахувати загальну кількість машин усіх типів.
// Відсортувати машини за ціною (від найдешевшої до найдорожчої).
// Знайти всі машини певного типу (наприклад, SUV).
// Знайти всі машини певного кольору та року випуску.
// Порахувати середню ціну всіх машин.
// Знайти всі машини, у яких кількість на складі більша за 0.
// Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
// Порахувати сумарну кількість всіх машин заданої марки.
// Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
// Знайти всі машини, які не є спортивними та доступні для продажу.
// Порахувати загальну вартість всіх машин складі.
// Знайти всі машини певного типу та кольору.
// Відсортувати машини за брендом та моделлю в алфавітному порядку.
// Перевірити, чи є хоч одна машина зеленого кольору.
// Створити новий масив, що містить лише назви моделей усіх машин.
// Створити масив, що містить розмітку кожної машини.
// Знайти індекс першої машини з роком випуску 2022 року.
// Сортувати за ціною


// Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.
// Перевірити, чи всі машини на складі доступні для продажу та створити новий масив, що містить лише моделі доступних машин.
// Знайти першу машину, яка не є спортивною та має кількість на на складі більше 0, потім повернути її колір.
// Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.
// Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.
// Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди цих машин.
// Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин.
// Перевірити, чи всі машини заданої марки доступні для продажу та повернути масив, що містить лише кольори доступних машин.
// Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.
// Порахувати сумарну кількість машин заданого кольору та повернути новий масив, містить об'єкти з квітами та відповідними кількостями машин.
// Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.
// Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.
// Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.


// USERS
// Знайти користувачів віком від 25 до 40 років.
// Знайти всіх користувачів із активним статусом.
// Порахувати кількість користувачів молодше 30 років.
// Відсортувати користувачів віком від старшого до молодшого.
// Знайти користувачів з електронною поштою на домені gmail.com.
// Знайти всіх жінок серед користувачів.
// Порахувати кількість неактивних користувачів.
// Відсортувати користувачів на прізвище в алфавітному порядку.
// Знайти користувача з найбільшим віком.
// Перевірити, чи є хоча б один користувач із прізвищем "Johnson".
// Створити новий масив, який містить лише імена користувачів.
// Створити масив з інформацією про користувачів у форматі JSON.
// Знайти індекс першого користувача під назвою "Jane".
// Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.
// Порахувати загальну кількість користувачів.
// Знайти всіх користувачів з активним статусом та віком старше 25 років.
// Знайти користувачів із прізвищем, що починається на букву "S".
// Відсортувати користувачів за віком (від молодшого до старшого).
// Знайти всіх користувачів електронної пошти на домені yahoo.com.
// Знайти користувача з найменшим віком.
// Перевірити, чи є хоча б один користувач з ім'ям John.
// Створити новий масив, що містить лише прізвища користувачів.
// Створити масив з інформацією про користувачів як рядкових описів.
// Знайти індекс користувача з активним статусом і віком більшим або рівним 40 років.

const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Honda',
    model: 'Accord',
    year: 2020,
    color: 'White',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    color: 'Red',
    price: 50000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    color: 'Black',
    price: 45000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    color: 'Blue',
    price: 70000,
    amount: 2,
    isSportCar: true,
    type: 'Sedan',
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2020,
    color: 'Silver',
    price: 60000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    color: 'Gray',
    price: 45000,
    amount: 4,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Lamborghini',
    model: 'Huracan',
    year: 2023,
    color: 'Yellow',
    price: 300000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2022,
    color: 'Red',
    price: 350000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Porsche',
    model: '911',
    year: 2021,
    color: 'White',
    price: 120000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Toyota',
    model: 'Golf',
    year: 2020,
    color: 'Black',
    price: 20000,
    amount: 6,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Subaru',
    model: 'Forester',
    year: 2021,
    color: 'Green',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    color: 'Orange',
    price: 35000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2020,
    color: 'Red',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Kia',
    model: 'Soul',
    year: 2021,
    color: 'Yellow',
    price: 20000,
    amount: 4,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Toyota',
    model: 'Tucson',
    year: 2022,
    color: 'White',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2019,
    color: 'Silver',
    price: 22000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Volvo',
    model: 'XC60',
    year: 2020,
    color: 'Blue',
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Lexus',
    model: 'RX',
    year: 2021,
    color: 'Black',
    price: 50000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2022,
    color: 'Gray',
    price: 60000,
    amount: 1,
    isSportCar: false,
    type: 'SUV',
  },
];

const users = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 42,
    email: 'bob@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Eva',
    lastName: 'Williams',
    age: 35,
    email: 'eva@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'David',
    lastName: 'Brown',
    age: 22,
    email: 'david@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 29,
    email: 'sophia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Miller',
    age: 50,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Wilson',
    age: 19,
    email: 'olivia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Thompson',
    age: 31,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Harris',
    age: 27,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jackson',
    age: 38,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Taylor',
    age: 23,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    age: 45,
    email: 'william@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Martin',
    age: 29,
    email: 'mia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Joseph',
    lastName: 'Clark',
    age: 33,
    email: 'joseph@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Rodriguez',
    age: 26,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'John',
    lastName: 'Lopez',
    age: 31,
    email: 'john@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'Lee',
    age: 20,
    email: 'amelia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Benjamin',
    lastName: 'Gonzalez',
    age: 40,
    email: 'benjamin@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Chloe',
    lastName: 'Hernandez',
    age: 24,
    email: 'chloe@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Young',
    age: 37,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Miller',
    age: 38,
    email: 'olivia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jones',
    age: 29,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 31,
    email: 'sophia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Wilson',
    age: 52,
    email: 'william@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Taylor',
    age: 19,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Clark',
    age: 40,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Lee',
    age: 27,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Martinez',
    age: 35,
    email: 'daniel@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Isabella',
    lastName: 'Hernandez',
    age: 42,
    email: 'isabella@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Liam',
    lastName: 'Garcia',
    age: 26,
    email: 'liam@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Rodriguez',
    age: 30,
    email: 'mia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Noah',
    lastName: 'Lopez',
    age: 24,
    email: 'noah@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Perez',
    age: 29,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Ethan',
    lastName: 'Turner',
    age: 37,
    email: 'ethan@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'White',
    age: 23,
    email: 'amelia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Alexander',
    lastName: 'Jackson',
    age: 41,
    email: 'alexander@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Sofia',
    lastName: 'Brown',
    age: 33,
    email: 'sofia@example.com',
    isActive: true,
    gender: 'Female',
  },
];

// {
//   brand: 'Mazda',
//   model: 'CX-5',
//   year: 2020,
//   color: 'Red',
//   price: 28000,
//   amount: 5,
//   isSportCar: false,
//   type: 'SUV',
// },

// авто зелен. кол.
const findByColor = (cars, thresColor) => {
  return cars.find((car)=>car.color === thresColor)
}
console.log(findByColor(cars, "Green")); 

// Знайти усі спорткари
const allSportCar = (cars, isSportCar)=> {
  return cars.filter((car)=>car.isSportCar)
}
console.table(allSportCar(cars, 'isSportCar')); 

// знайти авто новіші за 2022р.
const filterByYear = (cars, year)=> {
  return cars.filter((car)=>car.year > year)
}
console.table(filterByYear(cars, '2022')); 

// авто ціна яких вище 30000 
const filterByPrice = (cars, price) =>{
  return cars.filter((car)=>car.price > price)
}
console.table(filterByPrice(cars, 30000)); 

// Знайти всі машини червоного кольору.
const filterByColor = (cars, color) => {
  return cars.filter((car)=>car.color===color)
}
console.table(filterByColor(cars, 'Red'));

// Відсортувати машини за роком випуску (від найстарішого до найновішого).
const autoSort = (cars) => cars.toSorted((a, b)=>a.year-b.year)
console.table(autoSort(cars));
// Знайти найдорожчу машину.

// Знайти всі машини заданої марки (наприклад, Toyota).
const filterByBrand = (cars, brand) => {
  return cars.filter((car)=>car.brand===brand)
}
console.table(filterByBrand(cars, 'Toyota'));

// Порахувати загальну кількість машин усіх типів.
const totalAuto = cars.reduce((acc, car)=>{return acc+car.amount},0)
console.log(totalAuto);

// Відсортувати машини за ціною (від найдешевшої до найдорожчої).
const autoToSortedPrice = (cars) => cars.toSorted((a,b)=>a.price-b.price)
console.table(autoToSortedPrice(cars))
// Знайти всі машини певного типу (наприклад, type).
// const filterByType = (cars, type)=>{
//   return cars.filter((car)=>car.type===type)
// }
const filterByType =(cars, type)=> cars.filter((car)=>car.type===type)
console.table(filterByType(cars, 'Sedan'));

// Знайти всі машини певного кольору та року випуску.
const filterByYearColor = (cars, color, year)=> 
  cars.filter((car)=>car.color ===color && car.year >=year)
  console.table(filterByYearColor(cars, 'Silver', 2019));

// Порахувати середню ціну всіх машин.
const totalPrice = cars.reduce((acc, car)=>{return acc+=car.price},0)
const agPrice = totalPrice / cars.length
console.log(agPrice)

// Знайти всі машини, у яких кількість на складі більша за 0.
const autoSklad= (cars) => cars.filter((car)=> car.amount>0)
console.table(autoSklad(cars))

// Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.
const filterByYearPrice = (cars, price, year)=>
  cars.filter((car)=>car.price<price && car.year>=year)
console.table(filterByYearPrice(cars, 30000, 2020));

// Порахувати сумарну кількість всіх машин заданої марки.
const autoToyota = (cars, brand) => {
  return cars.filter((car)=>car.brand===brand)
             .reduce((acc, car)=>{return acc+car.amount},0)
}
console.table(autoToyota(cars, 'Toyota'));

// Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
const autoSorted=(cars)=>cars.toSorted((a,b)=>b.amount-a.amount)
console.table(autoSorted(cars));

// Знайти всі машини, які не є спортивними та доступні для продажу.
const allCar = cars.reduce((acc, car)=>{return acc+=car.amount && !car.isSportCar},0)
console.table(allCar)

// Порахувати загальну вартість всіх машин складі.
const totalPriceAuto=cars.reduce((acc, car)=>{return acc+= car.price*car.amount},0)
console.log(totalPriceAuto);

// Знайти всі машини певного типу та кольору.
const filterTypeAuto = (cars, type, color) => cars.filter((car)=>{return car.type===type && car.color===color})
console.table(filterTypeAuto(cars, 'Sedan', "Silver"));

// Відсортувати машини за брендом та моделлю в алфавітному порядку.
const autoSortedBrandModel = (cars)=> cars.toSorted((a,b)=>a.brand.localeCompare(b.brand) && a.model.localeCompare(b.model))
console.table(autoSortedBrandModel(cars))

// Перевірити, чи є хоч одна машина зеленого кольору.
const someBycolor =(cars, color)=> cars.some((car)=>car.color===color)
console.log(someBycolor(cars, 'Green'));

// Створити новий масив, що містить лише назви моделей усіх машин.
const newCarAuto = cars.reduce((acc, car)=>{return acc.concat(car.model)},[])
console.table(newCarAuto)
// Створити масив, що містить розмітку кожної машини.
// Знайти індекс першої машини з роком випуску 2022 року.
// Сортувати за ціною



// Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.
const allCarSorted = cars.filter((car)=>car.price>50000).toSorted((a,b)=>a.year-b.year)
console.table(allCarSorted);
// Перевірити, чи всі машини на складі доступні для продажу та створити новий масив, що містить лише моделі доступних машин.
const allCarAmount = cars.reduce((acc, car)=>{return acc.concat(car.model)},[])
console.table(allCarAmount)

// Знайти першу машину, яка не є спортивною та має кількість на на складі більше 0, потім повернути її колір.
// Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.
const filtercar = cars.filter((car)=>car.amount>2)
console.table(filtercar);
const totalPriceAutoAmount = filtercar.reduce((acc, car)=>{return acc+=car.price*car.amount},0)
console.table(totalPriceAutoAmount);
// Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.
const arrSuv =(cars, type) =>cars.filter((car)=>car.type===type)
.toSorted((a,b)=> a.year -b.year).map((car)=>`Model: ${car.model}, year: ${car.year}`)
console.dir(arrSuv(cars, "SUV"));
// Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди цих машин.
// Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин.
// Перевірити, чи всі машини заданої марки доступні для продажу та повернути масив, що містить лише кольори доступних машин.
// Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.
// Порахувати сумарну кількість машин заданого кольору та повернути новий масив, містить об'єкти з квітами та відповідними кількостями машин.

// Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.
const carModelPrice = cars.filter((car)=>car.price<60000 && car.price>40000)
.toSorted((a,b)=>b.year-a.year)
.map((car)=>car.model)
console.table(carModelPrice);
// Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.
const carPriceAm= cars.find((car)=>car.price>70000 && car.amount>5)
console.log(carPriceAm);

// Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.
const allCarBrandModel = cars.filter((car)=>car.amount>0)
.toSorted((a,b)=>b.amount-a.amount)
.map((car)=>{return `BRAND: ${car.brand}, MODEL: ${car.model}`})
console.dir(allCarBrandModel)
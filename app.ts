// Створити такі класи:

//     1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря

class Deputat {
    public name: string;
    public age: number;
    public sex: string;
    public degreeOfHonesty: number;
    public minSizeOfHabar: number;

    constructor(name: string, age: number, sex: string, degreeOfHonesty: number, minSizeOfHabar: number) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.degreeOfHonesty = degreeOfHonesty;
        this.minSizeOfHabar = minSizeOfHabar;
    }

    // Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//     Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//     та бере хабар.
//     Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

    public giveHabar = (bablo: number): void => {
        if (bablo < this.minSizeOfHabar || this.degreeOfHonesty >= 50) {
            console.log(`Ні дякую, я чесний депутат ${this.name} і неберу хабарі!`);
            return
        }
        if (bablo < this.minSizeOfHabar + this.minSizeOfHabar * this.degreeOfHonesty/100) {
            console.log(`Депутат ${this.name} вагаэться`);
            return;
        }
        if (this.degreeOfHonesty<50) {
            console.log(`Депутат ${this.name} природжений хабарник`);
            return;
        }
        console.log(`${this.name} взяв хабар у розмірі: ${bablo} $`)
    }
}

const moskal = new Deputat('Москаль', 28, 'man', 10, 1000);
const tarasyk = new Deputat('Тарасик', 21, 'man', 30, 500);
const nalyvayko = new Deputat('Наливайко', 22, 'woman', 50, 1500);
const lashko = new Deputat('Ляшко', 23, 'man', 70, 0);
const yuschenko = new Deputat('Ющенко', 24, 'man', 100, 5000);
const zelensky = new Deputat('Зеленський', 25, 'man', 40, 2500);
const poplavoktsc  = new Deputat('Поплавська', 27, 'woman', 80, 980);

moskal.giveHabar(500);
tarasyk.giveHabar(550);
nalyvayko.giveHabar(5000);
lashko.giveHabar(1200);
yuschenko.giveHabar(400);
zelensky.giveHabar(5500);
poplavoktsc.giveHabar(800);

// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)
//
// Мають бути присутні такі можливості:
//     - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//     Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//

class Partiya {
    public partiyaName: string;
    public partyChairman: string;
    public list: Deputat[] = [];

    constructor(partiyaName: string, partyChairman: string) {
        this.partiyaName = partiyaName;
        this.partyChairman = partyChairman;
    }
}


// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір
//

// class VerhovnaRada {
//     public partyArr: Partiya[] = [];
// }


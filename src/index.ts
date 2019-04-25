import {Type} from './interface';

class Shape {
    area: number;
    color: string;
    constructor ( name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
    }
}

let square = new Shape("square", 30, 30);
console.log(square.shoutout());

handleOutput().then(res =>{
    console.log(res);
})

async function handleOutput() {
    enum Color {
        Red = 3,
        Yellow,
        Blue
    }

    let color: Color = Color.Red;
    console.log(Color[5]);

    let str: string = "this is string";
    let num: number = 1;
    let bool: boolean = false;
    let nul: null = null;
    let undef: undefined = undefined;
    let obj: Object = 1;
    let anyStr: any = 10;
    let v: void = undefined;

    let p = await 1;

    return [str, num, bool, nul, undef, color, p, obj, anyStr, v];
}

let age: symbol = Symbol("age");
let add: symbol = Symbol("address");

let person: any = {
    [age]: 18,
    [add]: '广东省深圳市',
    c: "me"
};

Type({name: 'me', age: 12, address: 'guandong'});

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick():any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

class Animal {
    name: string;
    constructor(type: string) {
        this.name = type;
    }
    getName(): string {
        return this.name;
    }
}

let animal: Animal = new Animal('cat');
console.log(animal.getName());

abstract class Parent {
    constructor(public name: string){};

    abstract print(): void;
}

class Child extends Parent {
    constructor(name: string) {
        super(name);
    }

    print(): void {
        console.log(this.name);
    }
}

let child = new Child("child");
child.print();

interface TestFan<T> {
	(arg: T): T;
}

let m: TestFan<number> = (v: number): number => v;
console.log(m(111));

interface GuideItem {
	name: string,
	className: string,
	content: string,
	callBack: Function
}

interface GuideArray {
	[index: number]: GuideItem;
}


export class Singleton {
  private static instance: Singleton;
  private static guideStart: boolean = false;
  public guideArray: any[] = [];

  private constructor () {}

  guideAdd(guide: GuideItem) {
  	this.guideArray.push(guide);
  }

  guideRemove(guide: GuideItem) {
  	let index: number = 0;

  	this.guideArray.forEach((item: GuideItem, index: number) =>{
  		index = item.name === guide.name ? index : 0;
  	})
  	this.guideArray.splice(index, 1);
  }

  guideShow() {
  	if(this.guideArray.length > 0) {
  		setTimeout(() =>{
  			let current = this.guideArray[0];
  			console.log(current);
  			this.guideRemove(current);
  			this.guideShow();
  		}, 2000)
  	}
  }

  static getInstance (param: GuideItem): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    this.instance.guideAdd(param);
    if(!this.guideStart) {
    	this.guideStart = true;
    	this.instance.guideShow();
    }
    return this.instance;
  }
}

const singleton1 = Singleton.getInstance({name: 'first', className: 'first class', content: 'first content', callBack: () =>{}})
const singleton2 = Singleton.getInstance({name: 'second', className: 'second class', content: 'second content', callBack: () =>{}})





















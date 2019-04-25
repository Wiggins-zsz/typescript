import {Singleton} from './index';

interface Type {
    name: string,
    age: number,
    address?: string
}

interface ReadOnly {
    readonly x: string,
    readonly y: number
}

export function Type(param: Type) {
	let c = Singleton.getInstance({name: 'third', className: 'third class', content: 'third address', callBack: () =>{}});
    let {name, age, address} = param;
    console.log(age, name, address);
    return [name, age, address];
}

export function Read(param: ReadOnly): {} {

    return param;
}





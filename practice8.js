class Human {
    constructor(type='Human'){
        this.type=type;
    }

    static isHuman(human){
        return human instanceof Human
    }

    breathe(){
        alert('h-u-m-a-n');
    }
}

class Zero extends Human{
    constructor(type, firstName, lastName){
        super(type)
        this.firstName=firstName
        this.lastName=lastName
    }

    sayName() {
        super.breathe()
        alert(`${this.firstName} ${this.lastName}`)
    }
}

const newZero = new Zero('Human', 'Zero', 'Cho')
Human.isHuman(newZero)

class person {
    constructor(firstName,lastName){
        this.firstName =firstName;
        this.lastName =lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(nilai){
        const result =value.split( "    ");
        this.firstName = result[0];
        this.lastName =result[0];
    }
}
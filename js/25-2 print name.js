myObj = {
    name: "reut",
    printName: function(){
        console.log(this.name);
    },
    printName2: function(){
        setTimeout(this.printName.bind(this), 1000);
        setTimeout(()=> console.log(this.name), 1000);
    }
}

myObj.printName();
myObj.printName2();
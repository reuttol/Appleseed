Array.prototype = {
    myFilter: function(callback){
        const newArr = [];
         this.forEach((element) => {
             if(callback(element))
                newArr.push(element);
         })
         return newArr;
    },
    myFind: function(callback){
         this.forEach((element) => {
             if(callback(element))
               return element;
         })
         return -1;
    }

    
}
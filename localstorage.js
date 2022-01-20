class CRUD_LocalStorage{
    constructor( nameCRUD ){
        this.name = nameCRUD
    }

    add(data){
        console.log(data);
        // console.log(JSON.stringify(data));
        window.localStorage.setItem( this.name , JSON.stringify(data)); // saving to local
    }
 
    update( data ){
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        stack.push(data) 
        window.localStorage.setItem( this.name , JSON.stringify(stack) ); // saving to local
    }

    edit(data){
        console.log(data)
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        var newData = [];
        stack.forEach(v => {
            if (v.id ==  data.id) {
                v = data
                
            }
            newData.push(v) 
        });
        window.localStorage.setItem( this.name , JSON.stringify(newData) ); // saving to local
    }

    addJumlah(data){
        console.log(data.a)
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        var newData = [];
        stack.forEach(v => {
            v.product.forEach(p=>{
                if(p.product_id == data.a){
                    console.log(p);
                    p.jumlah = p.jumlah + 1
                }
            })
            newData.push(v) 
        });
        console.log(newData)
        window.localStorage.setItem( this.name , JSON.stringify(newData) ); // saving to local
    }
    minJumlah(data){
        console.log(data.a)
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        var newData = [];
        stack.forEach(v => {
            v.product.forEach(p=>{
                if(p.product_id == data.a){
                    console.log(p);
                    p.jumlah = p.jumlah - 1
                    if (p.jumlah <= 0) {
                        p.jumlah =1
                    }
                }
            })
            newData.push(v) 
        });
        console.log(newData)
        window.localStorage.setItem( this.name , JSON.stringify(newData) ); // saving to local
    }
    checkProd(data){
        console.log(data.a)
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        var newData = [];
        stack.forEach(v => {
            v.product.forEach(p=>{
                if(p.product_id == data.a){
                    console.log(p);
                    if (p.checked == "checked") {
                        p.checked = "no"
                    }else{
                        p.checked = "checked"
                    }
                    
                }
            })
            newData.push(v) 
        });
        console.log(newData)
        window.localStorage.setItem( this.name , JSON.stringify(newData) ); // saving to local
    }
    deletet(data){
        console.log(data.a,"tes")
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        var newData = [];
        var newP = [];
        stack.forEach((v,i) => {
            v.product.forEach((p,j)=>{
                if(p.product_id != data.a){
                    newP.push(p) 
                }
            })
            // console.log(newP.length,"panjang");
            v.product = newP
            newP = []
            if (v.product.length!=0) {
                console.log(v.id,"das");
                newData.push(v)
            }
            
            
        });
        console.log(newData);
    //     console.log(newData)
        window.localStorage.setItem( this.name , JSON.stringify(newData) ); // saving to local
    }
    checkToko(data){
        console.log(data.a)
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        var newData = [];
        stack.forEach(v => {
            if (data.a == v.id) {
                v.product.forEach(p=>{
                    p.checked = "checked"              
                })
            }
            newData.push(v) 
        });
        console.log(newData)
        window.localStorage.setItem( this.name , JSON.stringify(newData) ); // saving to local
    }
    checkAll(){
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        var newData = [];
        stack.forEach(v => {
                v.product.forEach(p=>{
                    p.checked = "checked"              
                })
            newData.push(v) 
        });
        console.log(newData)
        window.localStorage.setItem( this.name , JSON.stringify(newData) ); // saving to local
    }
    checkDell(){
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): []; // getting from local
        var newData = [];
        stack.forEach(v => {
                v.product.forEach(p=>{
                    p.checked = "no"              
                })
            newData.push(v) 
        });
        console.log(newData)
        window.localStorage.setItem( this.name , JSON.stringify(newData) ); // saving to local
    }
 
    delete( position ){
        var stack = JSON.parse( window.localStorage.getItem( this.name ) );
        stack.splice( parseInt(position), 1);
        window.localStorage.setItem( this.name , JSON.stringify(stack) );
    }
 
    reset(){
        window.localStorage.removeItem( this.name );
    }
 
    get( position ){
        console.log("get");
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): {}; // getting from local
        return stack[position];
    }
    getAll(){
        console.log("get All");
        var stack = window.localStorage.getItem( this.name ) ? JSON.parse( window.localStorage.getItem( this.name ) ): {}; // getting from local
        return stack;
    }
}

const keranjang = new CRUD_LocalStorage('_keranjang');
    
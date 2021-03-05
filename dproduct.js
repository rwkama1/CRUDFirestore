const db = require('./conection').db;

async function addProduct(dproduct) {
   
    try {
       await db.collection("Product").doc(dproduct.barcode).set(
           {
               barcode:dproduct.barcode,
               name:dproduct.name,
               price:dproduct.price,
             
           });

    }
     catch (error) {

        return error.message;
    }
}
async function updateProduct(dproduct) {
   
    try {
       await db.collection("Product").doc(dproduct.barcode).update(
           {
               
               name:dproduct.name,
               price:dproduct.price,
             
           });

    }
     catch (error) {

        return error.message;
    }
}
async function deleteProduct(dproduct) {
   
    try {
       await db.collection("Product").doc(dproduct.barcode).delete()
    }
     catch (error) {

        return error.message;
    }
}
async function listproducts() {
   
    try {
     const lproducts= await db.collection("Product").get();
      var array=[];
        for (var x of lproducts.docs) {
           var objproduct=new Product(x.data().barcode,x.data().name,x.data().price)
            array.push(objproduct);
        }
        return array;

    }
     catch (error) {

        return error.message;
    }
}
async function listproductsexpression(searchText) {
   
    try {
        
    //  const lproducts= await db.collection("Product").get();
    var lproducts = await db.collection("Product").orderBy('name').startAt(searchText).endAt(searchText+ "\uf8ff");
    const doc =  await lproducts.get();
   
      var array=[];
        for (var x of doc.docs) {
           var objproduct=new Product(x.data().barcode,x.data().name,x.data().price)
            array.push(objproduct);
        }
       return array;

    }
     catch (error) {

        return error.message;
    }
}
async function getproduct(barcode) {
   
    try {
        var objproduct=null;
     const sproduct= await db.collection("Product").doc(barcode);
     const doc =  await sproduct.get();
   const p=await doc.data();
   if(p==null)
   {
       return null;
   }
      objproduct=new Product(p.barcode,p.name,p.price);
     return objproduct;

    }
     catch (error) {

        return error.message;
    }
}
class Product
{
    _barcode = "";
    get barcode() {
        return this._barcode;
    }
    set barcode(value) {
        this._barcode = value;
    }
    _name = ""; 
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _price = 0;
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
 
    constructor(pbarcode, pname,pprice) {
        this.barcode=pbarcode;
        this.name=pname;
        this.price=pprice;
       
    }
}
module.exports = { addProduct,updateProduct,deleteProduct,listproducts,listproductsexpression,getproduct,Product};
//   var dtproduct=new Product('4567894564256','Alfajor',30);
// addProduct(dtproduct).then(data => {
//    console.log(data);
// })
// updateProduct(dtproduct).then(data => {
//    console.log(data);
// })
// deleteProduct(dtproduct).then(data => {
//    console.log(data);
// })
// listproducts().then(data => {
//    console.log(data);
// })
// listproductsexpression("Co").then(data => {
//    console.log(data);
// })
// getproduct('7897979789872343').then(data => {
//     console.log(data);
//  })

 
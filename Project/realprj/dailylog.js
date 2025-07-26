class Dailylog{
    constructor(itemsname,price,buydate,amount,storeName,unit,memo,category,judge){
        this.itemsname=itemsname,this.price=price,this.buydate=buydate,this.amount=amount,this.storeName=storeName,
        this.unit=unit,this.memo=memo,this.category=category,this.judge+judge
    }
    get itemsname(){
        return this._itemsname.trim();
    }
    set itemsname(newitem){
        if(this._itemsname.length>100){throw new Error("Too long name")};
         this._itemsname= newitem;
    }
    get price(){
        return Number(this._price);
    }
    set price(newprice){
        if(Number(this._price)<0){throw new Error("Number must over 0")};
         this._price= newprice;
    }
    get buydate(){
        return this._buydate.toDateString();
    }
    set buydate(newdate){
        const reg= /^\d{4}-\d{2}-\d{2}$/;
        if(!reg.test(newdate)){throw new Error("Date not match format")};
         this._buydate= newdate;
    }
    get amount(){
        return  Number(this._amount);
    }
    set amount(newamount){
        if(Number(this._newamount)<0){throw new Error("amount must over 0")};
         this._newamount= newamount;
    }
    get storeName(){
        return this._storeName.trim();
    }
    set storeName(newstoreName){
        if(this._storeName.length>500){throw new Error("Too long name")};
         this._storeName= newstoreName;
    }
}
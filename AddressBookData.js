class AddressBookData{

    //constructor
    constructor(...params){
        this.fName=params[0];
        this.lName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phNo=params[6];
        this.email=params[7];

    }

    //getter and setter method
    get f_name() {return this._fName;}
    set f_name(fName){
        const regx=RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regx.test(fName))
          this._fName=fName;
        else
        throw "Invalid First Name";
    }
    get l_name() {return this._lName;}
    set l_name(lName){
        const regx=RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regx.test(lName))
          this._lName=lName;
        else
        throw "Invalid Last Name";
    }
    get address(){
        return this._address;
    }
    set address(address){
        const regx=RegExp("^[A-Z]{1,}[a-z]{3,}")
        if(regx.test(address))
          this._address = address;
        else
        throw "Invalid Address";
    }

    get city(){
        return this._city;
    }
    set city(city){
        const regx=RegExp("^[A-Z]{1,}[a-z]{3,}")
        if(regx.test(city))
          this._city = city;
        else
        throw "Invalid City";
    }

    get state(){
        return this._state;
    }
    set state(state){
        const regx=RegExp("^[A-Z]{1,}[a-z]{3,}")
        if(regx.test(state))
          this._state = state;
        else
        throw "Invalid State";
    }

    get zip(){
        return this._zip;
    }
    set zip(zip){
        const regexZip = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if(regexZip.test(zip))
            this._zip = zip;
        else
            throw "Invalid ZipCode"; 
    }

    get ph_no(){
        return this._phNo;
    }
    set ph_no(phNo){
        const regx=RegExp("^[0-9]{2}[ ]{1}[1-9]{1}[0-9]{9}");
        if(regx.test(phNo))
         this._phNo = phNo;
        else 
         throw "Invalid number ";
    }

    get email(){
        return this._email
    }
    set email(email){
        const regexEmail = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$")
        if(regexEmail.test(email))
            this._email = email;
        else
            throw "Invalid Email"; 
    }

    //method
    toString(){
        return "FirstName = " + this.fName + ", LastName = " + this.lName + ", Address = " + this.address + ", City = " + this.city + ", State = " + this.state + ", Zipcode = " + this.zip + ", PhoneNo = " + this.phNo + ", Email = " + this.email
    }
}
let addressArray=new Array();
function checkExist(fname,lname){
    let contact;
    addressArray.forEach(element => {
        if(element.fName==fname && element.lName==lname)
            contact= element;      
    });
    return contact;
}



function addContact(contact){
    if(checkExist(contact.fName,contact.lName)==null)
         {
               addressArray.push(contact);
               console.log("New Contact is added!!");
         }
    else 
       throw "Contact is already present!!!!";
        
}

function updateContact(fname,lname){
    let contact=checkExist(fname,lname);
    if(contact===undefined){
        console.log("Contact not found");
        return;
    }
    else{
        console.log("1. Edit Firstname");
        console.log("2. Edit Lastname");
        console.log("3.Edit address");
        console.log("4.Edit city");
        console.log("5.Edit state");
        console.log("6.Edit zip");
        console.log("7.Edit phone number");
        console.log("8.Edit email");
        const prompt = require("prompt-sync")();
        let option = parseInt(prompt("Choose a number for updation"));
        switch(option){
            case 1:
                fName = prompt("Enter Updated Firstname");
                contact.fName = fName;
                break;

            case 2:
                lName = prompt("Enter Updated Lastname");
                contact.lName = lName;
                break;
                
            case 3:
                address = prompt("Enter Updated address");
                contact.address = address;
                break;

            case 4:
                city = prompt("Enter Updated city");
                contact.city = city;
                break;
                
            case 5:
                state = prompt("Enter Updated state");
                contact.state = state;
                break;
                
            case 6:
                zip = prompt("Enter Updated zip");
                contact.zip = zip;
                break;

            case 7:
                phNo = prompt("Enter Updated PhoneNo");
                contact.phNo = phNo;
                break;
                
             case 8:
                email = prompt("Enter Updated Email");
                contact.email = email;
                break;
                
                default:
                    console.log("Not valid");

        }
    }
}

function deleteContact(fname,lname){
  let contact=checkExist(fname,lname);
  if(contact===undefined){
    console.log("Contact not found");
    return;
}
else{
   for(let i=0;i<addressArray.length;i++){
       if(addressArray[i].fName==fname && addressArray[i].lName==lname && i<addressArray.length-1)
             addressArray.splice(i,1);
      else if(addressArray[i].fName==fname && addressArray[i].lName==lname && i==addressArray.length-1)
      addressArray.pop();
   }
   console.log("Contact with first name "+fname+" and last name "+lname+" is deleted");
}
}

function getCount(){
    return addressArray.reduce(count=> count+1,0);
}
function getContactByCity(city){
    return addressArray.filter(element=>element.city==city);
}

function getContactByState(state){
    return addressArray.filter(element=>element.state==state);
}

function searchPersonByCity(fname,city){
    return addressArray.filter(element=>element.fName==fname && element.city==city);
}

function searchPersonByState(fname,state){
    return addressArray.filter(element=>element.fName==fname && element.state==state);
}

function getCountByCity(city){
    return addressArray.filter(element=>element.city==city).reduce(count=>count+1,0);

}

function getCountByState(state){
    return addressArray.filter(element=>element.state==state).reduce(count=>count+1,0);

}

function sortByPersonFirstName(){
    addressArray.sort((element1, element2) => element1.fName.localeCompare(element2.fName));
}

try{
 let addressBookData1 = new AddressBookData("Kirti", "Kumar", "House no", "City1", "State1", "332315", "99 9999999999", "abc@gmail.com")
 let addressBookData2=new AddressBookData("Johny","Kapoor","House no2345","Jaipur","Rajasthan","323232","91 99999999999","abc@yahoo.com");
 let addressBookData3=new AddressBookData("Kkkkk","Ffffff","Address1234","Jaipur","Rajasthan","232323","91 8888888888","abc@gmail.com");
 let addressBookData4=new AddressBookData("Deepak","Kumar","Address2344567","City1","State1","121212","91 2222222222","ajcv@gmail.com");
 addContact(addressBookData1);
 addContact(addressBookData2);
 addContact(addressBookData3);
 addContact(addressBookData4);
}catch(e)
 {  console.log(e);
    }
    console.log(addressArray);
    console.log("After sorting");
    sortByPersonFirstName();
    console.log(addressArray);

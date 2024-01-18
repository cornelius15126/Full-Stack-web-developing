function personFormatter (Firstname, Lastname, Age) {
    function Formattednames(per1, per2) {
        return per1+" "+per2;
    }
    function DataFormatter(Fullname, Num) {
     const formattedData = {
        name: Fullname,
        age: Num
     }   
     return formattedData;
    }
    const formattednames = Formattednames(Firstname, Lastname);
    return DataFormatter(formattednames, Age);
}
console.log(personFormatter("Cornelius", "Ikpeminoghena", 21));
let user = {
    name:'John',
    years: 30,
    isAdmin:true,
};
let {name , years, isAdmin=false}=user;
console.log('Name: ', name, '\nYears: ', years);
(isAdmin)?console.log('Administrador'):console.log('Usuario');

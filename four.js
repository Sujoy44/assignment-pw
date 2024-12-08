{
    console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization
    console.log(varVar); // undefined
    console.log(constVar); // ReferenceError: Cannot access 'constVar' before initialization
  
    let letVar = 10;
    var varVar = 20;
    const constVar = 30;
  
    console.log(letVar); // 10
    console.log(varVar); // 20
    console.log(constVar); // 30
  }
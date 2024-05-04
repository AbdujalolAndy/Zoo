// MITASK-ZI
//Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
//MASALAN: delayHelloWorld("Hello World") return "Hello World"

//#1 Promise
function delayHelloWorldWithPromise(text: string, delay: number = 3000) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(text), delay)
    )
};

//#2 Console
function delayHelloWorldWithConsole(text: string, delay: number = 3000): void {
    setTimeout(() => console.log(text), delay)
};

//Execution
delayHelloWorldWithPromise("Hello World!", 3000).then(data => console.log(data));
delayHelloWorldWithConsole("Hello World!");
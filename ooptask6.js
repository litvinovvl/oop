function func() {
    let tmp = 1;
    return function () {
        return tmp++;
    };
}
let counter = new func();


function Worker(name, surname, rate, days) {
    this.getName = function () {
        return name;
    };
    this.getSurname = function () {
        return surname;
    };
    this.getRate = function () {
        return rate;
    };
    this.getDays = function () {
        return days;
    };
    this.getSalary = function () {
        return rate * days;
    };
}

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
    this.setRate = function (newRate) {
        rate = newRate;
    };
    this.setDays = function (newDays) {
        days = newDays;
    };
    this.getDays = function () {
        return days;
    };
    this.getSalary = function () {
        return rate * days;
    };
}
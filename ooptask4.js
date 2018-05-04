class MyString {
    reverse(string) {
        let chars = string.split('');
        let tmpString = [];
        for(let i = chars.length-1; i >= 0; i--) {
            tmpString.push(chars[i]);
        }
        return tmpString.join('');
    }
    ucFirst(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    ucWords(string) {
        let words = string.split(' ');
        for(let i = 0; i < words.length; i++) {
            words[i] = this.ucFirst(words[i]);
        }
        return words.join(' ');
    }
}

const str = new MyString();

//--------------------------------------------------------------------------------------------------------------------//

class Validator {
    isEmail(email) {
        return /^\w{3,}@\w+\.\w+$/.test(email);
    }
    isDomain(url) {
        return /^(http|ftp|https):\/\/\w+\.\w+\/?$/.test(url) || /^\w+\.\w+\/?$/.test(url);
    }
    isDate(date) {
        return Date.parse(date) ? true : false;
    }
    isPhone(number) {
        return /^(\+380)\d{9}$/.test(number);
    }
}


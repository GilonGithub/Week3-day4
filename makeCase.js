const makeCase = function(input, Case) {
    let str = input.split(' ');
    
    const camelCase = function(str) {
        let newStr = str[0].toLowerCase();
        for(i = 1; i < str.length; i++) {
            newStr += str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return newStr;
    }

    const pascalCase = function(str) {
        let newStr = '';
        for(i = 0; i < str.length; i++) {
            newStr += str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return newStr;
    }

    const snakeCase = function(str) {
        return str.join('_');
    }

    const kebab = function(str) {
        return str.join('-');
    }

    const title = function(str) {
        // let newStr = '';
        // for(i = 0; i < str.length; i++) {
        //     newStr += str[i].charAt(0).toUpperCase() + str[i].slice(1) + ' ';
        // }

        // return newStr;
        // OR

        return pascalCase(str).split((/(?=[A-Z])/)).join(" ");
    }

    const vowel = function(str) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let newStr = str.split('');

        for (i = 0; i < newStr.length; i++) {
            for (j = 0; j < vowels.length; j++) {
                if (newStr[i] === vowels[j]) {
                    newStr[i] = newStr[i].toUpperCase();
                }
            }
        }
        
        return newStr.join('');
    }

    const consonant = function(str) {
        let vowels = 'aeiou';
        let newStr = str.split('');

        for (i = 0; i < newStr.length; i++) {
            if (vowels.indexOf(newStr[i]) === -1) {
                newStr[i] = newStr[i].toUpperCase();
            }
        }
        
        return newStr.join('');
    }

    return consonant(input);
    //return vowel(input);
    //return title(str);
    //return snakeCase(str);
    //return pascalCase(str);
    //return camelCase(str);
  }
 
 
  console.log(makeCase("this is a string", "camel"));
//   console.log(makeCase("this is a string", "pascal"));
//   console.log(makeCase("this is a string", "snake"));
//   console.log(makeCase("this is a string", "kebab"));
//   console.log(makeCase("this is a string", "title"));
//   console.log(makeCase("this is a string", "vowel"));
//   console.log(makeCase("this is a string", "consonant"));
//   console.log(makeCase("this is a string", ["upper", "snake"]));

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING
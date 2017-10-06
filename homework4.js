//prints an upside-down triangle to the console of the given height
const star = function(n) {
    if(n===0) {
        return'';
    }
    return ('*' + star(n-1));
};
const space = function(s) {
    if(s===0) {
        return'';
    }
    return (' ' + space(s-1));
};
const triangleStars = function(n) {
    
    const loop = function(c) {
        if(c===0) {
        return'';
    }
    console.log(space(n-c)+star(c*2-1));
    loop(c-1);
    };
   console.log(loop(n));
};
triangleStars(4);


//takes two arguments, base and n returns the result of multiplying the base times itself n time
const pow = function(base, n) {
    if(base===0)
        return '';
    if(n<=0 || base<=1) {
        return 1;
    }
      return base * pow(base, n-1);
    };
  console.log(pow(0, 0));
  
  //reverses a string
  const reverse = function(str) {
    const n = str.length;
    const printLastLetter = function(n) {
        if(n<=0)
            return'';
     return str[n-1] + printLastLetter(n-1);   
    };
    return printLastLetter(n);
};
console.log(reverse('Aneta Baloyan'));

//draws an n by n checkerboard on the screen
const checkerboard = function(n) {
    const line1 = function(c) {
        if(c<=0)
            return '';
        return('*'+' '+ line1(c-1));
    };
    const line2 = function(c) {
        if(c<=0)
            return '';
        return(' '+'*'+ line2(c-1));
    };
    const print1 = function(k) {
        if(k<=0) {
            return'';
        }
        document.write(line1(n)+"<br>");//it says draws ON THE SCREEN, that's why I used document.write
        console.log(line1(n));//however, here's also a console.log in order to highlight the spaces
        print2(k-1);
    };
    const print2 = function(c) {
        if(c<=0) {
            return'';
        }
        document.write(line2(n)+"<br>");//it says draws ON THE SCREEN, that's why I used document.write
        console.log(line2(n));//however, here's also a console.log in order to highlight the spaces
        print1(c-1);
        };
    return print1(n);
};
checkerboard(5);

//sailboat
const spaces = function(n) {
  if(n<=0) {
  return'';
}
return (' ' + spaces(n-1));
};

const stars = function(n) {
  if(n<=0) {
  return'';
}
return ('*' + stars(n-1));
};

 const sail = function(n) {
   const ggg = function(c) {
     if(c<=1) {
    return '';
   } 
   console.log(spaces(c-1) + stars(((((2*n)/3)-((2*n)/3)/5)-c)+1));
   ggg(c-1);
   };
   return ggg(((2*n)/3)-((2*n)/3)/5);
  };
  
  const mast = function(n) {
    const looper = function(c) {
      if(c<=0) {
        return '';
      }
      console.log(spaces(n-1) + '*');
      looper(c-1);
    };
    return looper(((2*n)/3)/5);
  };
  
  const hull = function(n) {
    const loopie = function(c) {
     if(c<=n/2) {
    return '';
   } 
   console.log(spaces(n-c) + stars(2*c-1));
   loopie(c-1);
   };
   return loopie(n);
  };
  
const sailboat = function(heigth) {
 if(heigth<5) {
   return 'the number is too small';
 }
 sail(heigth);
 mast(((2*heigth)/3)-((2*heigth)/3)/5);
 hull(2*(heigth/3));
};

sailboat(30);


function replaceAll(find, replace, str) {
      while( str.indexOf(find) > -1){
        str = str.replace(find, replace);
      }
      return str;
 }
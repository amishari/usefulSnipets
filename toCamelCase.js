//1
function toCamelCase(str){
	return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
  }

//2
function toCamelCase(str){
	let regExp =/[-_]\w/ig;
	return str.replace( regExp, ( item ) => {
		return item.charAt( 1 ).toUpperCase();
	} );
}

//maxOccurenceOf1();  //need to do again
//longestWordWithReducer1()//need to do again
// longestWordWithReducer()  ///need to do again
// removeDuplicateFromArrayWithSet(); //need to do again

// longestWord()
// removeDuplicateFromArray();
// largestRepeatingSubstring("thisisemptybasketandemptybyibasketyme")
// reverseStr()
function maxOccurenceOf1(){
    const arr=[1,0,1,1,3,4,5,1,1,1,1,8,6,4,2,1,1,4,3]
    let {max_occ, occ}=arr.reduce((acc,n)=>{
        if(n==1){
		    acc.occ++	
		}
	    else
	    {
		    if(acc.max_occ < acc.occ){acc.max_occ=acc.occ}
		    acc.occ=0
	    }
        return acc
	
	},{occ:0,max_occ:0})
     // Handle case if array ends with consecutive 1s
    const finalMax = Math.max(max_occ, occ);
    console.log(finalMax); // Output: 4
}

function longestWordWithReducer1(){
    const { word, length } = str.split(' ').reduce((acc, s) => {
        return s.length > acc.length ? { word: s, length: s.length } : acc;
    }, { word: '', length: 0 });

    console.log(word, length); // writing 7
}
function longestWordWithReducer(){
    const str="I am writing online code"
	let longest_word='';

	longest_word= str.split(' ').reduce((a,s )=>{
        console.log(a.length +"==="+s.length)
		if(a.length <s.length){
            return s	
        }
        else{   
            return a
        }
			
    },'');
    console.log(longest_word)
}

function removeDuplicateFromArrayWithSet(){

    const arr=['1','a','a1','a123','a2','a1','er','ert','1','a2']
    let  new_arr = [...new Set(arr)]
    console.log(new_arr)
}







function removeDuplicateFromArray(){

    const arr=['1','a','a1','a123','a2','a1','er','ert','1','a2']
    let new_arr=[];
    arr.forEach((e) =>{
        if(!new_arr.includes(e))
        {
        new_arr.push(e)
        }
    })
    console.log(new_arr)
}
function largestRepeatingSubstring(str) {
    let maxSub = "";

    for (let len = 1; len <= str.length; len++) {
        for (let i = 0; i <= str.length - len; i++) {
            let sub = str.substring(i, i + len);
            let rest = str.substring(i + 1);
            if (rest.includes(sub) && sub.length > maxSub.length) {
                maxSub = sub;
            }
        }
    }

    console.log(maxSub);    
}

function reverseStr(){
    const str="12345"
    let new_arr=[];
    let new_str='';

    for(let i=str.length-1 ; i>=0;i--){
	    new_arr.push(str[i])
    }
    new_str=new_arr.join('')
	console.log(new_str)
}

//palindrome();
function palindrome(){

    const str="123454321"
   let new_str= str.split('').reverse().join('')
    if(new_str === str)
        console.log("palindrome")
    else
        console.log("not palindrome")

}

function longestWord(){

    const str="I am writing online code"
    let longest_size=0;
	let longest_word='';

	str.split(' ').forEach((s) => {
		if(s.length > longest_size)
		{
			longest_size =s.length 
			longest_word = s;
		}
	})
    console.log(longest_size +  " "+longest_word)
}

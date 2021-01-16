module.exports = function toReadable (number) {
 let str = ''
    function uniqueNum(number){
        if(number==0) return 'zero'
        if(number==1) return 'one'
        if(number==2) return 'two'
        if(number==3) return 'three'
        if(number==4) return 'four'
        if(number==5) return 'five'
        if(number==6) return 'six'
        if(number==7) return 'seven'
        if(number==8) return 'eight'
        if(number==9) return 'nine'
        if(number==10) return 'ten'
        if(number==11) return 'eleven'
        if(number==12) return 'twelve'
        if(number==13) return 'thirteen'
        if(number==14) return 'fourteen'
        if(number==15) return 'fifteen'
        if(number==16) return 'sixteen'
        if(number==17) return 'seventeen'
        if(number==18) return 'eighteen'
        if(number==19) return 'nineteen'
    }
    function uniqueNum10(number){
        if(number==20) return 'twenty'
        if(number==30) return 'thirty'
        if(number==40) return 'forty'
        if(number==50) return 'fifty'
        if(number==60) return 'sixty'
        if(number==70) return 'seventy'
        if(number==80) return 'eighty'
        if(number==90) return 'ninety'
    }
    const numLen = number.toString().length
    switch(numLen){
        case 3:
            str += uniqueNum(Math.floor(number/100))
            str+=' hundred'
            number=number%100
        case 2:
            if(number==0) break;
            if(number<20){
				if(numLen==3)str += ' '
				str+=uniqueNum(number)
                break;
            }
            if(number%10==0){
				if(numLen==3)str += ' '
                str+=uniqueNum10(number)
            }
            else{
                if(numLen==3) str+=' '
                str+=uniqueNum10(Math.floor(number/10)*10)+ ' ' + uniqueNum(number%10)
            }
            break;
        case 1:
            str+=uniqueNum(number)
    }
    return str
}

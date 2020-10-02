module.exports = function toReadable (number) {
  let oneNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      teenNumber = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      tensNumber = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let arr = String(number).split('');
      
  if (arr.length === 1) {
    return oneNumber[+arr[0]];
  } else if (arr.length === 2) {
    if (arr[1] == '0') {
        return tensNumber[+arr[0]-1];
    } else if (arr[0] == '1') {
        return teenNumber[+arr[1]];
    } else {
        return tensNumber[+arr[0]-1] + ' ' + oneNumber[+arr[1]]
    }
  } else if (arr.length === 3) {
    if (arr[1] == '0' && arr[2] == '0') {
        return oneNumber[+arr[0]] + ' ' + 'hundred';
    } else if (arr[1] == '0') {
        return oneNumber[+arr[0]] + ' ' + 'hundred' + ' ' + oneNumber[+arr[2]];
    } else if (arr[2] == '0') {
        return oneNumber[+arr[0]] + ' ' + 'hundred' + ' ' + tensNumber[+arr[1]-1];
    } else if (arr[1] == '1') {
        return oneNumber[+arr[0]] + ' ' + 'hundred' + ' ' + teenNumber[+arr[2]];
    } else {
        return oneNumber[+arr[0]] + ' ' + 'hundred' + ' ' + tensNumber[+arr[1]-1] + ' ' + oneNumber[+arr[2]];
    }
  } 

}

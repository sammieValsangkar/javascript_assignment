function percentage(marks1=0,marks2=0,marks3=0,marks4=0,out_of) {
  percentage=(parseInt(marks1)+parseInt(marks2)+parseInt(marks3)+parseInt(marks4))/(0.04*out_of);
  return percentage
}

function calculator(action,arg1,arg2) {
  switch(action) {
    case 'add' :
      return parseInt(arg1)+parseInt(arg2);
      break;
    case 'subtract' :
      return parseInt(arg1)-parseInt(arg2);
      break;
    case 'multiply' :
      return parseInt(arg1)*parseInt(arg2);
      break;
    case 'divide' :
      return parseInt(arg1)/parseInt(arg2);
      break;
  }
}

function multiplication_table(number,max=10) {
  for (var i = 1; i <=max ; i++) {
   console.log(number+"*"+i+"="+number*i);
  }
}

function find_digits(num) {
  //var num = parseInt(number);
  var digit_count=0;
  while(parseInt(num)!=0) {
     num =num/10;
     digit_count++;
     //console.log(digit_count);
  }
  return digit_count;
}

function calculate_average_of_array(arr) {
  var sum=0;
  var avg;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum/arr.length;
}

function max_no_from_array(arr) {
  max=0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return max;
}

function add_array(arr1,arr2) {
  var result_array = [];
  if(arr1.length==arr2.length){
    for (var i = 0; i < arr1.length; i++) {
      result_array[i]=parseInt(arr1[i])+parseInt(arr2[i]);
    }
  return result_array;
  }
}

function reverse_array(arr) {
  var result_array = [];
    for (var i = arr.length-1,j=0; i >=0 ; i--,j++) {
      result_array[j]=arr[i];
    }
    return result_array;
}

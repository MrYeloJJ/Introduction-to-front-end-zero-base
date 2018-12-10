// 获取弹窗年份
function funYear() {
  var year = Number(prompt("请输入您的出生年份"));
  return year;
}

// 获取弹窗月份
function funMonth() {
  var month = Number(prompt("请输入您的出生月份"));
  return month;
}

// 获取弹窗日期
function funDay() {
  var day = Number(prompt("请输入您的出生日期"));
  return day;
}

// 封装计算闰年函数
function funLeapYear(year) {
  if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return 1;
  } else {
    return 0;
  }
}

// 封装计算日期函数
function funData(year, month, day) {
  var sum = 0;
  var arrayData = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var isLeapYear = funLeapYear(year);
  // 循环次数为输入月份
  for(var i = 0;i < month;i++) {
    sum += arrayData[i];
  }
  // sum = (总天数 - 输入月份) + 输入日期
  sum = (sum - arrayData[month - 1]) + day;
  console.log(sum);
  console.log(isLeapYear);
  if(isLeapYear == 0) {
    console.log(sum);
    return sum;
  } else if(isLeapYear == 1) {
    if(month > 2) {
      console.log(sum + 1);
      return sum + 1;
    } else {
      console.log(sum);
      return sum;
    }
  }
}

var year = funYear(), month = funMonth(), day = funDay();
var result = funData(year, month, day);
document.write("您的生日在"+ year + "年是第" + result + "天");

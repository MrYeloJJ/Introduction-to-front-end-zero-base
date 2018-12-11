/*
作业思路:

(1).封装获取年月日的函数

获取弹窗中输入的变量值(年,月,日),并把变量值转换成整数.

调用计算年月日的函数,将这些变量作为参数传入进去,然后输出结果.

(2).封装计算年月日的函数

判断输入的月份是否为闰年,然后再进行计算 .可以使用for循环遍历月份 ,进行天数的累加

判断输入的月份是否为闰年(闰年2月份29天,平年2月份28天;闰年和平年除了二月份,其他月份天数一样.)

除了二月份,其他月份需要判断是大月份(31天),还是小月份(30天)

返回计算结果

闰年的判断: 年份 能被4整除且不能被100整除的是闰年或者能被400整除的是闰年.(闰年的判断使用的是取余而不是除号)
*/

// 获取弹窗年/月/日
function funSetData() {
  var year, month, day;
  year = Number(prompt("请输入您的出生年份"));
  month = Number(prompt("请输入您的出生月份"));
  day = Number(prompt("请输入您的出生日期"));
  var result = funGetData(year, month, day);
  document.write("您的生日在"+ year + "年是第" + result + "天");
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
function funGetData(year, month, day) {
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

funSetData();

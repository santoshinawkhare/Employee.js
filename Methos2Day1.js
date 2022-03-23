// console.log("*****UC1*****");
// let IS_PART_TIME = 1;//UC1
// let IS_FULL_TIME = 2;//UC1
// //Check the emp is present or absent
// let empCheck = Math.floor(Math.random() * 10) % 3;
// if (empCheck == IS_FULL_TIME)
//             {
//                 console.log("emp is present");//UC1
//             }
//             else {
//               console.log("emp is Absent");//UC1
//             }

// console.log("*****UC2*****");
// let IS_FULL_TIME = 1;
// let EMP_RATE_PER_HOUR = 20;
// let empHrs = 0;
// let empWage = 0;
// let empCheck = Math.floor(Math.random() * 10) % 3;
// if (empCheck == IS_FULL_TIME)
//             {
//                 empHrs = 8
//             }
//             else {
//                 empHrs = 0;
//             }
//  empWage = empHrs * EMP_RATE_PER_HOUR;
//  console.log("empolyee Daily Wages :" + empWage);

// console.log("*****UC3*****");
//  let IS_FULL_TIME = 1;
// let IS_PART_TIME = 2;
// let EMP_RATE_PER_HOUR = 20;
// let empHr = 0;
// let empWages = 0;
// let empCheck = Math.floor(Math.random() * 10) % 3;
// if (empCheck == IS_FULL_TIME)
// {
//     empHr = 8;
// }
// else if (empCheck == IS_PART_TIME)
// {
//     empHr = 4;
// }
// else
// {
//     empHr = 0;
// }
// empWages = empHr * EMP_RATE_PER_HOUR;
// console.log("empWages part time :" + empWages);

// console.log("*****UC4*****");
// let IS_FULL_TIME = 1;
// let  IS_PART_TIME = 2;
// let EMP_RATE_PER_HOURE = 20;
// let empHrs = 0;
// let empWages = 0;
// let empCheck = Math.floor(Math.random() * 10) % 3;
// switch (empCheck)
// {
//     case IS_FULL_TIME:
//         empHrs = 8;
//         break;

//     case IS_PART_TIME:
//         empHrs = 4;
//         break;

//     default:
//         empHrs = 0;
//         break;
// }
// empWages = empHrs * EMP_RATE_PER_HOURE;
// console.log("Employee Daily Wages :" + empWages);            

// console.log("*****UC5*****");
// let IS_FULL_TIME = 1;
// let EMP_RATE_PER_HOUR = 20;
// let NUM_WORKING_DAYS = 20;
// let empHrs = 0;
// let empWages = 0;
// let totalEmployeeWage = 0;
// let empCheck = Math.floor(Math.random() * 10) % 3;
// for (i= 0; i < NUM_WORKING_DAYS; i++)
// {
//     switch (empCheck)
//     {
//         case IS_FULL_TIME:
//             empHrs = 8;
//             break;

//         case IS_PART_TIME:
//             empHrs = 4;
//             break;

//         default:
//             empHrs = 0;
//             break;
//     }
//     empWages = empHrs * EMP_RATE_PER_HOUR;
//     totalEmployeeWage += empWages;
//     console.log("Employee Wage :" + empWages);
// }
// console.log("Total Employee Wages :" + totalEmployeeWage);

console.log("*****UC6*****");
let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let EMP_RATE_PER_HOURE = 20;
let NUM_WOKING_DAYS = 20;
let MAX_HOURS_IN_MONTH = 100;
let empHr = 0;
let totalEmpHr = 0;
let totaWorkingDays = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
while (totalEmpHr <= MAX_HOURS_IN_MONTH && totaWorkingDays < NUM_WOKING_DAYS)
{
    totaWorkingDays++;
        switch (empCheck)
    {
        case IS_FULL_TIME:
            empHr = 8;
            break;
        case IS_PART_TIME:
            empHr = 4;
            break;
        default:
            empHr = 0;
            break;
    }
    totalEmpHr += empHr;
   console.log("Days: " + "" + totalEmpHr +  "EmpHrs :" + empHr);
}
let totalEmpWage = totalEmpHr * EMP_RATE_PER_HOURE;
console.log("Total Employree Wage :" + totalEmpWage);
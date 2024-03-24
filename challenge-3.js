

function getNetSalary(basicSalary, benefits) {
    // Tax and deductions rates
    const taxRate = 0.03;
    const NHIFRate = 0.02;
    const NSSFRate = 0.06;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate tax deductions
    const taxDed = grossSalary * taxRate;

    // Calculate NHIF deductions
    const NHIFDed = basicSalary * NHIFRate;

    // Calculate NSSF deductions
    const NSSFDed = basicSalary * NSSFRate;

    // Calculate net salary
    const netSalary = grossSalary - taxDed - NHIFDed - NSSFDed;

    // Return the net salary
    return netSalary;
}


console.log(getNetSalary(50000, 10000));//output


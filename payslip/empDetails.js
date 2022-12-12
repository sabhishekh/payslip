class EmployeeDetails {
    constructor(eData) {
        this.eName = eData.eName;
        this.eDep = eData.eDep;
        this.eAge = eData.eAge;
        this.eBasicSal = eData.eBasicSal;
    }
    resetFields(){
        document.querySelector("#ename").value = '';
        document.querySelector("#edept").value = '';
        document.querySelector("#eAge").value = '';
        document.querySelector("#eBasicSal").value = '';
    }
    getPfAndHra() {
        this.totalSal = 0;
        this.pf = this.eBasicSal * (12 / 100);
        this.hra = this.eBasicSal * (24 / 100);
        this.totalSal = this.eBasicSal + this.pf + this.hra;
    } 
    getTotalTax() {
        var taxPercent = 0;
        if (this.totalSal >= 50000) {
            taxPercent = 10;
        } else if (this.totalSal >= 20000) {
            taxPercent = 5;
        }
        this.totalTaxToBePaid = this.totalSal * taxPercent / 100;
    }
    displayEmployeeDetails() {
        this.getPfAndHra();
        this.getTotalTax();
        this.resetFields();
        var divParentTag = document.createElement("div");
        var div1 = document.createElement("div");
        div1.innerText = 'Employee Name : ' + this.eName;
        divParentTag.append(div1);

        var div2 = document.createElement("div");
        div2.innerText = 'Employee AGe : ' + this.eAge;
        divParentTag.append(div2);

        var div3 = document.createElement("div");
        div3.innerText = 'Employee Basic Sal : ' + this.eBasicSal;
        divParentTag.append(div3);

        var div4 = document.createElement("div");
        div4.innerText = 'Employee Total Sal : ' + this.totalSal;
        divParentTag.append(div4);

        var div5 = document.createElement("div");
        div5.innerText = 'Employee Total Tax to be paid : ' + this.totalSal;
        divParentTag.append(div5);
        document.querySelector(".displayBlock").append(divParentTag);

    }
}

var employeeList = [];

var generatePaySlip = () => {
    var data = {}
    data.eName = document.querySelector("#ename").value;
    data.eDep = document.querySelector("#edept").value;
    data.eAge = document.querySelector("#eAge").value;
    data.eBasicSal = parseInt(document.querySelector("#eBasicSal").value);
    var employeeObj = new EmployeeDetails(data);
    employeeObj.displayEmployeeDetails();
    employeeList.push(employeeObj);
    
}
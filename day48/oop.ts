// 멤버 변수=속성=프로퍼티
// 멤버 함수=메소드

class Employee {
  constructor(
    private _empName: string,
    private _age: number,
    private _empJob: string
  ) {
  }

  get empName() {
    return this._empName;
  }

  set empName(empName: string) {
    this._empName = empName;
  }

  printEmp = (): void => {
    console.log(this._empName + "의 나이는" + this._age + "이고 직업은" + this._empJob + "입니다.");
  }
}

let employee = new Employee("홍길동", 20, "개발자");
employee.empName = "김길동";
employee.printEmp();
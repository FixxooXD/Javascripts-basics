class User {
  constructor(Name, RegdNo, Email, Branch) {
    this.Name = Name;
    this.RegdNo = RegdNo;
    this.Email = Email;
    this.Branch = Branch;
  }
  getInfo() {
    return {
      Name: this.Name,
      Email: this.Email,
      Regdno: this.RegdNo,
      Branch: this.Branch,
    };
  }

  courceList = [];

  enrollCourse(name) {
    this.courceList.push(name);
  }
  getCourseList() {
    return this.courceList;
  }
}
module.exports = User;

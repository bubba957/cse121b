const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
          sectionNum: 1, 
          roomNum: `STC 353`, 
          enrolled: 26, 
          days: `TTh`, 
          instructor: `Bro T`,
        },
        {
          sectionNum: 2, 
          roomNum: `STC 347`, 
          enrolled: 25, 
          days: `TTH`, 
          instructor: `Sis A`,
        },
    ],
    enrollStudent: function (sectionNum) {
        let sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        let sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
  };

function setCourseInfo(course) {
    let courseName = document.querySelector(`#courseName`);
    let courseCode = document.querySelector(`#courseCode`);
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}


function renderSections(aCourse) {
    let html = aCourse.sections.map(
        section => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector(`#sections`).innerHTML = html.join(``);
}

document.querySelector(`#enrollStudent`).addEventListener(`click`, function () {
    let sectionNum = document.querySelector(`#sectionNumber`).value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector(`#dropStudent`).addEventListener(`click`, e => {
    let sectionNum = document.querySelector(`#sectionNumber`).value;
    aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
renderSections(aCourse);
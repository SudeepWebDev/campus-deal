class Course {
  constructor(name, semesters, srcs, content) {
    this.name = name;
    this.semesters = semesters;
    this.srcs = srcs;
    this.content = content;
  }

  toListItem() {
    const details = this.semesters.map((s, i) => `<details>
                                                <summary>Semester ${s}</summary>
                                                <div class="sub_course_field">
                                                
                                                  <details>
                                                    <summary>${this.content}</summary>
                                                    <div class="sub_course_field"><div class="iframe-container">
                                                    <iframe src="${this.srcs[i]}"></iframe>
                                                  </div></div>
                                                    
                                                  </details>
                                                
                                                </div>
                                              </details>`).join("");

    return `<li>
              <details>
                <summary>${this.name}</summary>
                <div class="sub_course_field">${details}</div>
              </details>
            </li>`;
  }
}

// Syllabus Field
const bscCoursesSyllabus = [
  new Course("BSC Physics Hons", [1, 2, 3, 4, 5, 6], [
    // "./pdfs/PHY(H)I.pdf",
    "./pdfs/PHY(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_69_Science_faculty.pdf",
    "./pdfs/PHY(H)III.pdf",
    "./pdfs/PHY(H)IV.pdf",
    "./pdfs/PHY(H)V.pdf",
    "./pdfs/PHY(H)VI.pdf"
  ], "Syllabus"),
  new Course("BSC Chemistry           Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/CHEM(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_69_Science_faculty.pdf",
    "./pdfs/CHEM(H)III.pdf",
    "./pdfs/CHEM(H)IV.pdf",
    "./pdfs/CHEM(H)V.pdf",
    "./pdfs/CHEM(H)VI.pdf"
  ], "Syllabus"),
  new Course("BSC Mathematics         Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/MATH(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/13032023_65_Math_SC.pdf",
    "./pdfs/MATH(H)III.pdf",
    "./pdfs/MATH(H)IV.pdf",
    "./pdfs/MATH(H)V.pdf",
    "./pdfs/MATH(H)VI.pdf"
  ], "Syllabus"),
  new Course("BSC Computer Science    Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/CS(H)I.pdf",
    "./pdfs/CS(H)II.pdf",
    "./pdfs/CS(H)III.pdf",
    "./pdfs/CS(H)IV.pdf",
    "./pdfs/CS(H)V.pdf",
    "./pdfs/CS(H)VI.pdf"
  ],  "Syllabus"),
];

const bcomCoursesSyllabus = [
  new Course("BCOM Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BCOM(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/14032023_73_Final%20Version_Commerce.pdf",
    // "./pdfs/BCOM(H)II.pdf",
    "./pdfs/BCOM(H)III.pdf",
    "./pdfs/BCOM(H)IV.pdf",
    "./pdfs/BCOM(H)V.pdf",
    "./pdfs/BCOM(H)VI.pdf"
  ], "Syllabus"),
  new Course("BCOM Program", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BCOM(P)I.pdf",
    "https://www.du.ac.in/uploads/new-web/14032023_73_Final%20Version_Commerce.pdf",
    // "./pdfs/BCOM(P)II.pdf",
    "./pdfs/BCOM(P)III.pdf",
    "./pdfs/BCOM(P)IV.pdf",
    "./pdfs/BCOM(P)V.pdf",
    "./pdfs/BCOM(P)VI.pdf"
  ], "Syllabus"),
];

const baCoursesSyllabus = [
  new Course("BA English Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BAE(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_62_Faculty%20of%20Arts.pdf",
    // "./pdfs/BAE(H)II.pdf",
    "./pdfs/BAE(H)III.pdf",
    "./pdfs/BAE(H)IV.pdf",
    "./pdfs/BAE(H)V.pdf",
    "./pdfs/BAE(H)VI.pdf"
  ], "Syllabus"),
  new Course("BA History Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BAH(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_62_Faculty%20of%20Arts.pdf",
    // "./pdfs/BAH(H)II.pdf",
    "./pdfs/BAH(H)III.pdf",
    "./pdfs/BAH(H)IV.pdf",
    "./pdfs/BAH(H)V.pdf",
    "./pdfs/BAH(H)VI.pdf"
  ], "Syllabus"),
  new Course("BA Political Science Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BAPOLS(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_62_Faculty%20of%20Arts.pdf",
    // "./pdfs/BAPOLS(H)II.pdf",
    "./pdfs/BAPOLS(H)III.pdf",
    "./pdfs/BAPOLS(H)IV.pdf",
    "./pdfs/BAPOLS(H)V.pdf",
    "./pdfs/BAPOLS(H)VI.pdf"
  ], "Syllabus"),
  new Course("BA Program", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BA(P)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_62_Faculty%20of%20Arts.pdf",
    // "./pdfs/BA(P)II.pdf",
    "./pdfs/BA(P)III.pdf",
    "./pdfs/BA(P)IV.pdf",
    "./pdfs/BA(P)V.pdf",
    "./pdfs/BA(P)VI.pdf"
  ], "Syllabus")
];

const bcomUlSyl = document.querySelector(".bcom_sub_courses_syllabus");

bcomCoursesSyllabus.forEach(course => {
  const li = document.createElement("li");
  li.innerHTML = course.toListItem();
  bcomUlSyl.appendChild(li);
});

const baUlSyl = document.querySelector(".ba_sub_courses_syllabus");

baCoursesSyllabus.forEach(course => {
  const li = document.createElement("li");
  li.innerHTML = course.toListItem();
  baUlSyl.appendChild(li);
});

const bscUlSyl = document.querySelector(".bsc_sub_courses_syllabus");

bscCoursesSyllabus.forEach(course => {
  const li = document.createElement("li");
  li.innerHTML = course.toListItem();
  bscUlSyl.appendChild(li);
});



// Material Field
const bscCoursesMaterial = [
  new Course("BSC Physics Hons", [1, 2, 3, 4, 5, 6], [
    // "./pdfs/PHY(H)I.pdf",
    "./pdfs/PHY(H)I.pdf",
    "https://archive.org/details/physics-books/College_Physics_volume_1",
    "./pdfs/PHY(H)III.pdf",
    "./pdfs/PHY(H)IV.pdf",
    "./pdfs/PHY(H)V.pdf",
    "./pdfs/PHY(H)VI.pdf"
  ], "Material"),
  new Course("BSC Chemistry           Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/CHEM(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_69_Science_faculty.pdf",
    "./pdfs/CHEM(H)III.pdf",
    "./pdfs/CHEM(H)IV.pdf",
    "./pdfs/CHEM(H)V.pdf",
    "./pdfs/CHEM(H)VI.pdf"
  ], "Material"),
  new Course("BSC Mathematics         Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/MATH(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/13032023_65_Math_SC.pdf",
    "./pdfs/MATH(H)III.pdf",
    "./pdfs/MATH(H)IV.pdf",
    "./pdfs/MATH(H)V.pdf",
    "./pdfs/MATH(H)VI.pdf"
  ], "Material"),
  new Course("BSC Computer Science    Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/CS(H)I.pdf",
    "http://tdc-www.harvard.edu/Python.pdf",
    "./pdfs/CS(H)III.pdf",
    "./pdfs/CS(H)IV.pdf",
    "./pdfs/CS(H)V.pdf",
    "./pdfs/CS(H)VI.pdf"
  ],  "Material"),
];

const bcomCoursesMaterial = [
  new Course("BCOM Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BCOM(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/14032023_73_Final%20Version_Commerce.pdf",
    // "./pdfs/BCOM(H)II.pdf",
    "./pdfs/BCOM(H)III.pdf",
    "./pdfs/BCOM(H)IV.pdf",
    "./pdfs/BCOM(H)V.pdf",
    "./pdfs/BCOM(H)VI.pdf"
  ], "Material"),
  new Course("BCOM Program", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BCOM(P)I.pdf",
    "https://www.du.ac.in/uploads/new-web/14032023_73_Final%20Version_Commerce.pdf",
    // "./pdfs/BCOM(P)II.pdf",
    "./pdfs/BCOM(P)III.pdf",
    "./pdfs/BCOM(P)IV.pdf",
    "./pdfs/BCOM(P)V.pdf",
    "./pdfs/BCOM(P)VI.pdf"
  ], "Material"),
];

const baCoursesMaterial = [
  new Course("BA English Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BAE(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_62_Faculty%20of%20Arts.pdf",
    // "./pdfs/BAE(H)II.pdf",
    "./pdfs/BAE(H)III.pdf",
    "./pdfs/BAE(H)IV.pdf",
    "./pdfs/BAE(H)V.pdf",
    "./pdfs/BAE(H)VI.pdf"
  ], "Material"),
  new Course("BA History Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BAH(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_62_Faculty%20of%20Arts.pdf",
    // "./pdfs/BAH(H)II.pdf",
    "./pdfs/BAH(H)III.pdf",
    "./pdfs/BAH(H)IV.pdf",
    "./pdfs/BAH(H)V.pdf",
    "./pdfs/BAH(H)VI.pdf"
  ], "Material"),
  new Course("BA Political Science Hons", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BAPOLS(H)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_62_Faculty%20of%20Arts.pdf",
    // "./pdfs/BAPOLS(H)II.pdf",
    "./pdfs/BAPOLS(H)III.pdf",
    "./pdfs/BAPOLS(H)IV.pdf",
    "./pdfs/BAPOLS(H)V.pdf",
    "./pdfs/BAPOLS(H)VI.pdf"
  ], "Material"),
  new Course("BA Program", [1, 2, 3, 4, 5, 6], [
    "./pdfs/BA(P)I.pdf",
    "https://www.du.ac.in/uploads/new-web/Advt-2021/16032023_62_Faculty%20of%20Arts.pdf",
    // "./pdfs/BA(P)II.pdf",
    "./pdfs/BA(P)III.pdf",
    "./pdfs/BA(P)IV.pdf",
    "./pdfs/BA(P)V.pdf",
    "./pdfs/BA(P)VI.pdf"
  ], "Material")
];

const bcomUlMat = document.querySelector(".bcom_sub_courses_material");

bcomCoursesMaterial.forEach(course => {
  const li = document.createElement("li");
  li.innerHTML = course.toListItem();
  bcomUlMat.appendChild(li);
});

const baUlMat = document.querySelector(".ba_sub_courses_material");

baCoursesMaterial.forEach(course => {
  const li = document.createElement("li");
  li.innerHTML = course.toListItem();
  baUlMat.appendChild(li);
});

const bscUlMat = document.querySelector(".bsc_sub_courses_material");

bscCoursesMaterial.forEach(course => {
  const li = document.createElement("li");
  li.innerHTML = course.toListItem();
  bscUlMat.appendChild(li);
});
















const tagHeadings = document.querySelectorAll('.tag_heading');
const tagContentSections = document.querySelectorAll('.tag_content_section');

for (let i = 0; i < tagHeadings.length; i++) {
  let heading = tagHeadings[i];
  heading.addEventListener('click', () => {
    for (let j = 0; j < tagHeadings.length; j++) {
      tagHeadings[j].classList.remove('active-tag');
      tagContentSections[j].classList.remove('active_tag_content_section');
    }
    heading.classList.add('active-tag');
    tagContentSections[i].classList.add('active_tag_content_section');

  });
}



const course_items = document.querySelectorAll('.course_item');
const sub_courses_containers = document.querySelectorAll('.sub_courses_container');

for (let i = 0; i < course_items.length; i++) {
  let course_item = course_items[i];
  course_item.addEventListener('click', () => {
    for (let j = 0; j < course_items.length; j++) {
      course_items[j].classList.remove('active_course_item');
      sub_courses_containers[j].querySelector('.sub_courses_list').classList.remove('active_sub_courses_list');
    }
    course_item.classList.add('active_course_item');
    sub_courses_containers[i].querySelector('.sub_courses_list').classList.add('active_sub_courses_list');
  });
}



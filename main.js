const name = document.querySelector("#courseName");
const Category = document.querySelector("#courseCategory");
const Price = document.querySelector("#coursePrice");
const Description = document.querySelector("#courseDescription");
const Capacity = document.querySelector("#courseCapacity");
let courses = [];


click.addEventListener("click",(e)=>{
    e.preventDefault();
    if (name.value === "" || Category.value === "" || Price.value === "" || Description.value === "" || Capacity.value === "") {
        Swal.fire({
            title: "Please fill in all fields!",
            icon: "warning",
            draggable: true
        });
    } else {
    const course = {
        name:name.value,
        category:Category.value,
        price:Price.value,
        Decription:Description.value,
        Capacity: Capacity.value

    };
courses.push(course);
   localStorage.setItem("courses",JSON.stringify(courses));
  

   
   Swal.fire({
    title: "Course add successfully! ",
    icon: "success",
    draggable: true
  });

  if(localStorage.getItem("courses") != null)
    {
    courses = JSON.parse(localStorage.getItem("courses"));
    displayCourses();
}
    }
});

function displayCourses(){
    const result = courses.map((courses,index)=>
        `
        <tr>
        <td>${index}</td>
         <td>${courses.name}</td>
          <td>${courses.category}</td>
           <td>${courses.price}</td>
            <td>${courses.Decription}</td>
             <td>${courses.Capacity}</td>
            
        </tr>


        `
    ).join('');
    document.querySelector("#data").innerHTML = result;
}


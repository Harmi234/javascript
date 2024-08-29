document.addEventListener('DOMContentLoaded', () => {
    let userForm = JSON.parse(localStorage.getItem("userForm")) || [];

    const handleDelete = (index) => {
        userForm.splice(index, 1);  
        localStorage.setItem("userForm", JSON.stringify(userForm));  
        mapper(userForm);  
    }

    const mapper = (userForm) => {
        document.getElementById("userinfo").innerHTML = ""; 

        userForm.forEach((ele, index) => {
            let title = document.createElement("h3");
            title.innerHTML = ele.title;
            let img = document.createElement("img");
            img.src = ele.img;
            img.style.maxWidth = "200px";
            let category = document.createElement("p");
            category.innerHTML = ele.category;
            let btnDlt = document.createElement("button");
            btnDlt.innerHTML = "Delete";
            btnDlt.addEventListener("click", () => handleDelete(index));  
            let div = document.createElement("div");
            div.append(img, title, category, btnDlt);
            document.getElementById("userinfo").append(div);
        });
    };

    document.getElementById('userForm').addEventListener('submit', (e) => {
        e.preventDefault(); 

        let name = document.getElementById('name').value;
        let imgUrl = document.getElementById('imgUrl').value;
        let country = document.getElementById('country').value;

        let newUser = {
            title: name,
            img: imgUrl,
            category: country
        };

        userForm.push(newUser);
        localStorage.setItem("userForm", JSON.stringify(userForm));

        mapper(userForm);

        e.target.reset();
    });

    mapper(userForm);
});

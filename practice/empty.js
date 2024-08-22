function createElements() {
    // Get the container where new elements will be appended
    const container = document.getElementById("container");

  // Create a new <h1> element.
  const heading = document.createElement("h1");
  heading.id = "heading1";  // Assign ID
  heading.classList="head class"
  heading.textContent = "This is a dynamically created heading.";
  container.appendChild(heading);

    // Create a new <h1> element.
    const section = document.createElement("section");
    section.id = "section1";  // Assign ID
    section.classList="sec class"
    section.textContent = "This is a dynamically created section.";
    container.appendChild(section);

    // Create a new <p> element 
    const paragraph = document.createElement("p");
    paragraph.id = "paragraph1";  // Assign ID
    paragraph.classList="para class"
    paragraph.textContent = "This is a dynamically created paragraph.";
    container.appendChild(paragraph);

    // Create a new <div> element 
    const div = document.createElement("div");
    div.id = "div1";  // Assign ID
    div.classList="div class"
    div.textContent = "This is a dynamically created div.";
    div.style.backgroundColor = "#f0f0f0";
    div.style.padding = "10px";
    container.appendChild(div);

    // Create a new <ul> element
    const ul = document.createElement("ul");
    ul.id = "list1";  // Assign ID
    ul.classList="list class"

    // Create <li> items
    const li1 = document.createElement("li");
    li1.id = "listItem1";  // Assign ID
    li1.classList="itemclass"
    li1.textContent = "List Item 1";
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.id = "listItem2";  // Assign ID
    li2.classList="itemclass"
    li2.textContent = "List Item 2";
    ul.appendChild(li2);



    // Append the <ul> to the container
    container.appendChild(ul);
}

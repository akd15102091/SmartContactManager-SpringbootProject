
const toggleSidebar = () => {
	console.log(document.getElementsByClassName("sidebar")[0])
	console.log(document.getElementsByClassName("sidebar")[0].offsetParent)
	var style = window.getComputedStyle(document.getElementsByClassName("sidebar")[0]);
	
	  if (style.display != 'none') {
	    //true
	    //band karna hai
	    document.getElementsByClassName("sidebar")[0].classList.remove("toggleSidebarFalse");
	    document.getElementsByClassName("content")[0].classList.remove("toggleContentFalse");
	    document.getElementsByClassName("sidebar")[0].classList.add("toggleSidebarTrue");
	    document.getElementsByClassName("content")[0].classList.add("toggleContentTrue");
	  } else {
	    //false
	    //show karna hai
	    document.getElementsByClassName("sidebar")[0].classList.remove("toggleSidebarTrue");
	    document.getElementsByClassName("content")[0].classList.remove("toggleContentTrue");
	    document.getElementsByClassName("sidebar")[0].classList.add("toggleSidebarFalse");
	    document.getElementsByClassName("content")[0].classList.add("toggleContentFalse");
	  }
  
};

const search = () => {
  // console.log("searching...");

  let query = $("#search-input").val();

  if (query == "") {
    $(".search-result").hide();
  } else {
    //search
    console.log(query);

    //sending request to server

    let url = `http://localhost:8080/search/${query}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //data......
        // console.log(data);

        let text = `<div class='list-group'>`;

        data.forEach((contact) => {
          text += `<a href='/user/${contact.cid}/contact' class='list-group-item list-group-item-action'> ${contact.name}  </a>`;
        });

        text += `</div>`;

        $(".search-result").html(text);
        $(".search-result").show();
      });
  }
};

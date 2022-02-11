import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
  ${cover}
<img src="${variables.avatarURL}" class="photo" />
<h1>${variables.name ? variables.name : "Name"} ${
    variables.lastname ? variables.lastname : "Last name"
  }</h1>
<h2>${variables.role ? variables.role : "Role"}</h2>
<h3>${variables.city ? variables.city : "City"}, ${
    variables.country ? variables.country : "Country"
  }</h3>
<ul class="${
    variables.socialMediaPosition
      ? variables.socialMediaPosition
      : "position-right"
  }">
  <li><a href="${
    variables.twitter
      ? "https://twitter.com/" + variables.twitter
      : "https://twitter.com/"
  }"><i class="fab fa-twitter"></i></a></li>
  <li><a href="${
    variables.github === "alesanchezr"
      ? "https://github.com/FacundoGdS"
      : "https://github.com/4GeeksAcademy"
  } "><i class="fab fa-github"></i></a></li>
  <li><a href="https://www.linkedin.com/in/facundoguldossantos/"><i class="fab fa-linkedin"></i></a></li>
  <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
</ul>
</div>
`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://avatars.githubusercontent.com/u/92039939?s=400&u=7a18401aace9b09ab62e2ff0069655f04998a9ea&v=4",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};

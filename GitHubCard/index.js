import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
 .get("https://api.github.com/users/xpeedy")
 .then((res) => {//data is the obj
   console.log(res)//this just to check the data
   const gitInfo = res.data;//this is th obj data (obj.data)
   cards.appendChild(cardMaker(gitInfo))// add it to the DOM
 })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
"tetondan",
"dustinmyers",
"justsml",
"luishrd",
"bigknell",];

followersArray.forEach((user) => {// user is an element from the array 
  axios
  .get("https://api.github.com/users/" + user)//get the API and add an element at the end
  .then((result) => {//result ex: "https://api.github.com/users/tetondan"
    const userInfo = result.data;// element"user"s data
    console.log(userInfo);
    cards.appendChild(cardMaker(userInfo))// add its to the DOM
  })
  .catch((err) => {
    console.log(err);
  })
})



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(obj){
  const card = document.createElement("div")//creates main div
  card.classList.add("card")//creates a class for the div above

  let img = document.createElement("img")
  img.src = obj.avatar_url;//get the obj's img url and add it to the img created above
  card.appendChild(img)

  let cardInfo = document.createElement("div")
  cardInfo.classList.add("card-info")
  card.appendChild(cardInfo)//add it to the card main div

  let name = document.createElement("h3")
  name.classList.add("name")
  name.textContent = `name: ${obj.name}`;
  cardInfo.appendChild(name)//add it to the card-info div

  let userName = document.createElement("p")
  userName.classList.add("username")
  userName.textContent = `username: ${obj.login}`;
  cardInfo.appendChild(userName)

  let location = document.createElement("p")
  location.textContent = `location: ${obj.location}`;
  cardInfo.appendChild(location)

  let profile = document.createElement("p")
  //<---this is inside profile--->
  let link = document.createElement("a")//creates a link
  link.href = obj.html_url;//get the url as a herf for the "a" tag(as a link)
  link.textContent = link.href//makes the href from the "a" tag(the link) a text you can read 
  profile.textContent = "profile: ";
  profile.appendChild(link)
  cardInfo.appendChild(profile)
  //<------------------------->

  let followers = document.createElement("p")
  followers.textContent = `followers: ${obj.followers}`;
  cardInfo.appendChild(followers)

  let following = document.createElement("p")
  following.textContent = `following: ${obj.following}`;
  cardInfo.appendChild(following)

  let bio = document.createElement("p")
  bio.textContent = `bio: ${obj.bio}`;
  cardInfo.appendChild(bio)

  return card;// always retun the object you are creating
}
let cards = document.querySelector(".cards")//selects where we adding the card we make with cardMaker()


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    for (let posts of data.data.children) {
      const post = document.createElement("div");
      document.querySelector("body").appendChild(post);

      const title = document.createElement("p");
      title.innerText = posts.data.title;
      post.appendChild(title);

      const img = document.createElement("img");
      img.setAttribute("src", posts.data.thumbnail);
      post.appendChild(img);

      const link = document.createElement("a");
      const linkDiv = document.createElement("div");
      link.setAttribute("href", posts.data.url);
      link.innerText = "link";
      post.appendChild(linkDiv);
      linkDiv.appendChild(link);
    }
  });

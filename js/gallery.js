// Select the gallery section, large image display, and caption elements
const galleryContainer = document.getElementById("gallery");
const mainImage = document.getElementById("Large");
const imageCaption = document.getElementById("caption");

// Function to create and populate the gallery with albums and images
function renderGallery(albums) {
  albums.forEach((album) => {
    // Create an album container for each album
    const albumContainer = document.createElement("div");
    albumContainer.classList.add("album");

    // Add a title to the album
    const albumTitle = document.createElement("h2");
    albumTitle.textContent = album.title;
    albumContainer.appendChild(albumTitle);

    // Create a container for image thumbnails within the album
    const thumbnailsList = document.createElement("ul");
    thumbnailsList.classList.add("thumbnails");

    // Add each image in the album to the thumbnails list
    album.images.forEach((image) => {
      const thumbnailItem = document.createElement("li");
      const thumbnailImg = document.createElement("img");

      thumbnailImg.src = image.src; // Set the source for each thumbnail
      thumbnailImg.alt = image.alt; // Set alternative text for accessibility
      thumbnailImg.width = 240;
      thumbnailImg.height = 160;

      // Update the main image and caption when a thumbnail is clicked
      thumbnailImg.addEventListener("click", () => {
        mainImage.src = image.src.replace("small", "large"); // Swap with large version of the image
        mainImage.style.width = "1200px";
        mainImage.style.height = "800px";
        mainImage.alt = image.alt;
        imageCaption.textContent = image.alt || "No description available"; // Update caption text
      });

      thumbnailItem.appendChild(thumbnailImg); // Add the thumbnail image to the list item
      thumbnailsList.appendChild(thumbnailItem); // Add the list item to the thumbnails list
    });

    albumContainer.appendChild(thumbnailsList); // Add the thumbnails list to the album container
    galleryContainer.appendChild(albumContainer); // Add the album to the main gallery container
  });
}

// Sample album data
const photoAlbums = [
  {
    title: "Flowers Views",
    images: [
      { src: "images/flowers-white-small.jpg", alt: "White Flowers" },
      { src: "images/flowers-pink-small.jpg", alt: "Pink Flowers" },
      { src: "images/flowers-purple-small.jpg", alt: "Purple Flowers" },
      { src: "images/flowers-yellow-small.jpg", alt: "Yellow Flowers" },
      { src: "images/flowers-red-small.jpg", alt: "Red Flowers" },
    ],
  },
  {
    title: "Village",
    images: [
      { src: "images/village.jpeg", alt: "Village" },
      { src: "images/mountain.jpeg", alt: "Mountain" },
    ],
  },
  {
    title: "Ocean",
    images: [
      { src: "images/sea.jpg", alt: "Sea" },
      { src: "images/lake.webp", alt: "Lake" },
    ],
  },
  {
    title: "Random Vibes",
    images: [
      { src: "images/beach.jpeg", alt: "Beach" },
      { src: "images/forest.jpeg", alt: "Forest" },
    ],
  },
];

renderGallery(photoAlbums);

const books = [

{
    title: "The God of Small Things",
    author: "Arundhati Roy",
    category: "Novel",
    pages: 340,
    rating: "4.5 ⭐",
    description: "A story about family, love, and social issues in Kerala.",
    price: "₹399",
    image: "book1.jpg",
    readLink: "https://ijels.com/upload_document/issue_files/14IJELS-107202424-TheHuman.pdf",
    pdfLink: "https://ijels.com/upload_document/issue_files/14IJELS-107202424-TheHuman.pdf",
    buyLink: "https://www.amazon.in/s?k=The+God+of+Small+Things+Arundhati+Roy"
},

{
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    category: "Biography",
    pages: 180,
    rating: "4.8 ⭐",
    description: "Autobiography of India's beloved president and scientist.",
    price: "₹295",
    image: "book2.jpg",
    readLink: "https://www.isca.me/LANGUAGE/Archive/v12/i4/1.ISCA-RJLLH-2025-006.pdf",
    pdfLink: "https://www.isca.me/LANGUAGE/Archive/v12/i4/1.ISCA-RJLLH-2025-006.pdf",
    buyLink: "https://www.amazon.in/s?k=Wings+of+Fire+A.P.J.+Abdul+Kalam"
},

{
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    category: "Historical Fiction",
    pages: 250,
    rating: "4.6 ⭐",
    description: "A powerful story set during the partition of India.",
    price: "₹250",
    image: "book3.jpg",
    readLink: "https://ia803108.us.archive.org/9/items/TrainToPakistan_201805/Train-To-Pakistan.pdf",
    pdfLink: "https://ia803108.us.archive.org/9/items/TrainToPakistan_201805/Train-To-Pakistan.pdf",
    buyLink: "https://www.amazon.in/s?k=Train+to+Pakistan+Khushwant+Singh"
},

{
    title: "Malgudi Days",
    author: "R.K. Narayan",
    category: "Short Stories",
    pages: 220,
    rating: "4.7 ⭐",
    description: "Collection of heartwarming stories from Malgudi town.",
    price: "₹199",
    image: "book4.jpg",
    readLink: "https://www.questjournals.org/jrhss/papers/vol12-issue12/12121416.pdf",
    pdfLink: "https://www.questjournals.org/jrhss/papers/vol12-issue12/12121416.pdf",
    buyLink: "https://www.amazon.in/s?k=Malgudi+Days+R.K.+Narayan"
},

{
    title: "The White Tiger",
    author: "Aravind Adiga",
    category: "Fiction",
    pages: 320,
    rating: "4.4 ⭐",
    description: "Story of ambition and survival in modern India.",
    price: "₹350",
    image: "book5.jpg",
    readLink: "https://ijels.com/upload_document/issue_files/16IJELS-105202434-Examining.pdf",
    pdfLink: "https://ijels.com/upload_document/issue_files/16IJELS-105202434-Examining.pdf",
    buyLink: "https://www.amazon.in/s?k=The+White+Tiger+Aravind+Adiga"
},

{
    title: "Shiva Trilogy",
    author: "Amish Tripathi",
    category: "Mythology",
    pages: 400,
    rating: "4.9 ⭐",
    description: "Epic journey of Shiva and his transformation.",
    price: "₹450",
    image: "book6.jpg",
    readLink: "https://sngcollegechelannur.edu.in/jabir/2021/013.pdf",
    pdfLink: "https://sngcollegechelannur.edu.in/jabir/2021/013.pdf",
    buyLink: "https://www.amazon.in/s?k=Shiva+Trilogy+Amish+Tripathi"
}

];

const booksGrid = document.getElementById("booksGrid");
const searchBox = document.getElementById("searchBox");

function renderBooks(bookList){

    booksGrid.innerHTML = "";

    bookList.forEach(book => {

        const card = document.createElement("div");

        card.classList.add("book-card");

        card.innerHTML = `

        <div class="book-image-container">
            <img src="${book.image}" alt="${book.title}">
        </div>

        <div class="book-details">

            <h2 class="book-title">
                ${book.title}
            </h2>

            <p class="book-author">
                By ${book.author}
            </p>

            <p class="book-description">
                ${book.description}
            </p>

            <div class="book-price">
                ${book.price}
            </div>

        </div>
        `;

        card.addEventListener("click", () => {
            openBook(book);
        });

        booksGrid.appendChild(card);

    });

}


function openBook(book){

    document.getElementById("modalImage").src = book.image;
    document.getElementById("modalTitle").textContent = book.title;
    document.getElementById("modalAuthor").textContent = book.author;
    document.getElementById("modalCategory").textContent = book.category;
    document.getElementById("modalPages").textContent = book.pages;
    document.getElementById("modalRating").textContent = book.rating;
    document.getElementById("modalDescription").textContent = book.description;
    document.getElementById("modalPrice").textContent = book.price;

    // Buttons
    document.getElementById("readBtn").href = book.readLink;
    document.getElementById("downloadBtn").href = book.pdfLink;
    document.getElementById("buyBtn").href = book.buyLink;

    document.getElementById("bookModal").style.display = "flex";
}

document.querySelector(".close-btn")
.addEventListener("click", () => {

    document.getElementById("bookModal").style.display =
    "none";

});

window.addEventListener("click", (e) => {

    const modal =
    document.getElementById("bookModal");

    if(e.target === modal){

        modal.style.display = "none";

    }

});

searchBox.addEventListener("input", () => {

    const value =
    searchBox.value.toLowerCase();

    const filteredBooks =
    books.filter(book =>

        book.title.toLowerCase().includes(value) ||

        book.author.toLowerCase().includes(value)

    );

    renderBooks(filteredBooks);

});

renderBooks(books);
<?php

$books = [
    ['id' => 1, 'title' => 'The Great Gatsby', 'author' => 'F. Scott Fitzgerald', 'genre' => 'Classic Fiction', 'year' => 1925],
    ['id' => 2, 'title' => 'To Kill a Mockingbird', 'author' => 'Harper Lee', 'genre' => 'Modern Classic', 'year' => 1960],
    ['id' => 3, 'title' => '1984', 'author' => 'George Orwell', 'genre' => 'Dystopian Fiction', 'year' => 1949],
    ['id' => 4, 'title' => 'The Catcher in the Rye', 'author' => 'J.D. Salinger', 'genre' => 'Coming-of-Age Fiction', 'year' => 1951],
    ['id' => 5, 'title' => 'Pride and Prejudice', 'author' => 'Jane Austen', 'genre' => 'Romantic Fiction', 'year' => 1813],
    ['id' => 6, 'title' => 'The Hobbit', 'author' => 'J.R.R. Tolkien', 'genre' => 'Fantasy', 'year' => 1937],
    ['id' => 7, 'title' => 'The Hunger Games', 'author' => 'Suzanne Collins', 'genre' => 'Young Adult', 'year' => 2008],
    ['id' => 8, 'title' => 'The Shining', 'author' => 'Stephen King', 'genre' => 'Horror', 'year' => 1977],
    ['id' => 9, 'title' => 'The Alchemist', 'author' => 'Paulo Coelho', 'genre' => 'Philosophical Fiction', 'year' => 1988],
    ['id' => 10, 'title' => 'Brave New World', 'author' => 'Aldous Huxley', 'genre' => 'Science Fiction', 'year' => 1932],
];

header('Content-Type: application/json');
echo json_encode($books);
?>

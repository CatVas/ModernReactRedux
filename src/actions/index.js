export function selectBook(book) {
  return {
    payload: book,
    type: 'BOOK_SELECTED',
  };
}

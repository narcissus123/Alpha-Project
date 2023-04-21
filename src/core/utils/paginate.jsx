function paginate(items, pageNumber, pageSize) {
  const startItem = (pageNumber - 1) * pageSize;
  const pageItems = items.slice(startItem, startItem + pageSize);

  return pageItems;
}

function itemsRange(currentPage, pageSize = 6, NumberOfItems) {
  let firstItem;
  currentPage == 1
    ? (firstItem = 0)
    : (firstItem = (currentPage - 1) * pageSize);
  let lastItem;
  firstItem + pageSize > NumberOfItems
    ? (lastItem = NumberOfItems)
    : (lastItem = firstItem + pageSize);
  return [firstItem, lastItem];
}

export { paginate, itemsRange };

export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").value.trim();
  const regex = /[ ]{2,}/gi;
  const searchTerm = rawSearchTerm.replaceAll(regex, " ");
  return searchTerm;
};

export const retriveSearchResults = async (searchTerm) => {
  const wikiSearchString = getWikiSearchString(searchTerm);
};

const getWikiSearchString = (searchTerm) => {
  const maxChars = getMaxChars();
  const rawSearchString = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsearch=${searchTerm}&gslimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;

  `https://en.wikipedia.org/w/api.php
    ?action=query
    &generator=search
      &grsearch=Dave
      &gsrlimit=20
    &prop=pageimages|extracts
      &exchars=130
      &exintro
      &explaintext
      &exlimit=max
    &format=json
    &origin=*`;
};

const getMaxChars = () => {
  const width = window.innerWidth || document.body.clientWidth;
  let maxChars;
  if (width < 414) maxChars = 65;
  if (width >= 414 && width < 1400) maxChars = 100;
  if (width >= 1400) maxChars = 130;
  return maxChars;
};

export const fetchIds = async url => {
  const response = await fetch(url);
  const ids = response.json();
  return ids;
};

export const fetchArticleInfos = async articleIds => {
  const result = {
    score: [],
    title: [],
    author: [],
    url: []
  };

  let requests = articleIds.map(id =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
  );
  const rez = await Promise.all(requests);
  const data = await Promise.all(rez.map(res => res.json()));
  data.forEach((item, i) => {
    result.score.push(data[i].score);
    result.title.push(data[i].title);
    result.author.push(data[i].by);
    result.url.push(data[i].url);
  });
  return result;
};

export const fetchIds = async url => {
  try {
    const response = await fetch(url);
    const ids = response.json();
    return ids;
  } catch (error) {
    console.error("error", error);
  }
};

export const fetchArticleInfos = async articleIds => {
  try {
    const result = {
      score: [],
      title: [],
      author: [],
      url: []
    };

    let requests = await articleIds.map(id =>
      fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      )
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
  } catch (error) {
    console.error(error);
  }
};

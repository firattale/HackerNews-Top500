import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import "./CardList.css";
import { fetchIds, fetchArticleInfos } from "../../services/apiCalls";
class CardList extends Component {
  state = {
    articleIds: [],
    articleScores: [],
    articleTitles: [],
    articleAuthors: [],
    articleUrls: [],
    isLoading: true
  };
  componentDidMount() {
    this.FetchArticles();
  }

  FetchArticles = async () => {
    try {
      // fetching Ids of top 500 stories
      const url =
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
      const articleIds = await fetchIds(url);
      this.setState({ articleIds });
      // when the articledIds have been fetched, next fetch other information according to ids
      const result = await fetchArticleInfos(this.state.articleIds);
      this.setState({
        articleScores: result.score,
        articleTitles: result.title,
        articleAuthors: result.author,
        articleUrls: result.url,
        isLoading: false
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="container">
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          this.state.articleIds.map((id, i) => {
            return (
              <Card
                key={id}
                scores={this.state.articleScores[i]}
                titles={this.state.articleTitles[i]}
                authors={this.state.articleAuthors[i]}
                urls={this.state.articleUrls[i]}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default CardList;

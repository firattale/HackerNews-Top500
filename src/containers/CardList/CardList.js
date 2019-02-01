import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import "./CardList.css";
class CardList extends Component {
  state = {
    articleIds: [],
    articleScores: [],
    articleTitles: [],
    articleAuthors: [],
    articleUrls: [],
    isLoading: true
  };
  async componentDidMount() {
    try {
      // fetching Ids of top 500 stories
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
      );
      const json = await response.json();
      this.setState({ articleIds: json });

      // when the articledIds have been fetched, next fetch other information according to ids
      const scores = [];
      const titles = [];
      const authors = [];
      const urls = [];
      let requests = this.state.articleIds.map(id =>
        fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
      );
      Promise.all(requests)
        .then(responses => {
          return responses;
        })
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(data => {
          data.forEach((item, i) => {
            scores.push(data[i].score);
            titles.push(data[i].title);
            authors.push(data[i].by);
            urls.push(data[i].url);
          });
          this.setState({ articleScores: scores });
          this.setState({ articleTitles: titles });
          this.setState({ articleAuthors: authors });
          this.setState({ articleUrls: urls });
          this.setState({ isLoading: false });
        });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="container">
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <Card
            ids={this.state.articleIds}
            scores={this.state.articleScores}
            titles={this.state.articleTitles}
            authors={this.state.articleAuthors}
            urls={this.state.articleUrls}
          />
        )}
      </div>
    );
  }
}

export default CardList;

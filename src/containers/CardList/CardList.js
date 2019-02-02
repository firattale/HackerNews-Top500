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
      const articleIds = await fetchIds();
      this.setState({ articleIds });

      // when the articledIds have been fetched, next fetch other information according to ids
      const result = await fetchArticleInfos(this.state.articleIds);
      this.setState({ articleScores: result.score });
      this.setState({ articleTitles: result.title });
      this.setState({ articleAuthors: result.author });
      this.setState({ articleUrls: result.url });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

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

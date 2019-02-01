import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./CardList.css";
class CardList extends Component {
  state = {
    articleIds: [],
    articleScores: [],
    articleTitles: [],
    articleAuthors: [],
    // articleTexts: [],
    articleUrls: []
  };
  // async componentDidMount() {
  //   try {
  //     const response = await fetch(
  //       "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  //     );
  //     const json = await response.json();
  //     this.setState({ articleIds: json });
  //     if (this.state.articleIds !== []) {
  //       const scores = [];
  //       const titles = [];
  //       const authors = [];
  //       const urls = [];
  //       // const texts = [];

  //       this.state.articleIds.map(async id => {
  //         const res = await fetch(
  //           `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  //         );
  //         const json = await res.json();
  //         scores.push(json.score);
  //         titles.push(json.title);
  //         authors.push(json.by);
  //         urls.push(json.url);
  //         // texts.push(json.kids[0]);
  //         this.setState({ articleScores: scores });
  //         this.setState({ articleTitles: titles });
  //         this.setState({ articleAuthors: authors });
  //         this.setState({ articleUrls: urls });
  //         // this.setState({ articleTexts: texts });
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  render() {
    return (
      <div className="container">
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
        <Card
          scores={this.state.articleScores}
          titles={this.state.articleTitles}
          authors={this.state.articleAuthors}
          urls={this.state.articleUrls}
        />
      </div>
    );
  }
}

export default CardList;

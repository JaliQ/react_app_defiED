import React, { Component} from 'react'

export class Tutorials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };

    this.handleOptionSelect = this.handleOptionSelect.bind(this);
  }

  handleOptionSelect(option) {
    this.setState({
      selectedOption: option,
    });
  }

  render() {
    const options = [
      { id: 0, label: "Setting up wallet and networks", videoUrl: "https://www.youtube.com/embed/bf4nWzV805E" },
      { id: 1, label: "Security of your wallet", videoUrl: "https://www.youtube.com/embed/BUTqrWb1gPA&t=2537s" },
      { id: 2, label: "How to buy cryptocurrencies", videoUrl: "https://www.youtube.com/embed/gfqKg8Ea-Go" },
      { id: 3, label: "Swap your currencies", videoUrl: "https://www.youtube.com/embed/CkJZ4statS4" },
      { id: 4, label: "Bridges", videoUrl: "https://www.youtube.com/embed/mkiaLkbxL9M" },
      { id: 5, label: "Liquidity pools", videoUrl: "https://www.youtube.com/embed/NcK-LvtGTzg" },
      { id: 6, label: "Test networks", videoUrl: "https://www.youtube.com/embed/ytPpoKam1f4" },
      { id: 7, label: "Landing markets", videoUrl: "https://www.youtube.com/embed/T_ynzhep4DY" },
    ];

    return (
      <div className="video-player">
        <div className="options-list">
          <ul>
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => this.handleOptionSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="video-container">
          {this.state.selectedOption ? (
            <iframe width="640" height="360" src={this.state.selectedOption.videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          ) : (
            <div>Please select an option to play the video.</div>
          )}
        </div>
      </div>
    );
  }
}


export default Tutorials
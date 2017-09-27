import React from 'react';
import Card from './Card';

class FlashCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cards: [{
            front: 'What is 1 + 1?',
            back: '2'
        },
        {
            front: 'What is 3 + 3?',
            back: '6'
        },
        {
            front: 'What is 4 + 4?',
            back: '8'
        }
        ]
    };
}

displayFlashCards = () => {
    return this.state.cards.map( card => {
      return(<Card card={card} />);
    });
  }
    render() {
        return (
            <div>
            { this.displayFlashCards() }
          </div>
        )
    }

}

export default FlashCards;
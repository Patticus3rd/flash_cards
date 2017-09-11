import React from 'react';
import Card from './Card';

class FlashCards extends React.Component {
    render() {
        const loopCards = this.props.cards.map( card => {
            return <Card cardInfo={card} />
        })

        return (
            <div>
            { loopCards }
           </div>
        )
    }
}

export default FlashCards;
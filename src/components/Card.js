import React from 'react';


class Card extends React.Component {
    constructor(props){
    super(props);
    this.state = { showAnswer: false };
    }

    displayBack = () => {
        if (this.state.showAnswer)
            return <div> Answer: {this.props.card.back } </div>
    };

    toggleCard = () => {
        this.setState({ showAnswer: !this.state.showAnswer })
    }

    

    render() {
        let { title, front, back } = this.props.card;

       
        

        return (
            <div>
                <h1> { title } </h1>
                <hr />
            <p>{ this.state.showAnswer === false ? front : null  }</p>
            { this.displayBack() }
            <button onClick={this.toggleCard}> Get Answer </button>
           </div>
        );
    }
}

export default Card;
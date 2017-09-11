import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = { flipped: false};
    }


    handleClick() {
        this.state({flipped: true})
    }


    // toggleCard = () => {
    //     if (this.state.flipped)
    //         return <div onClick={this.state.flipped}> {this.props.cardInfo.answer} </div>
    //     else
    //         return <div>{this.props.cardInfo.front}</div>

    // }

    

    render() {
        const flipped = this.state.flipped;

        let button = null;
        if (flipped) { button = < someFunction onClick={this.handleClick}/>} 
            
        

        return (
           <div>
                {flipped}
            </div>
        );
    }
}

export default Card;
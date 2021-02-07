import React, { Component } from 'react';
import games from '../images/2048.png';
import alias from '../images/alias.jpg';
import jumper from '../images/jumper.svg';


class Producs extends Component {
    render() {
        return (
            <div id="products">
                <div className="Products">
                    <div className="container">
                        <div className="ProductsHeading">
                            <h1>Products</h1>
                        </div>
                        <div className="Game one">
                            <div className="ProductsColumn" >
                                <div className="ProductsImage">
                                    <img src={alias} alt="" />
                                </div>
                            </div>
                            <div className="ProductsColumn">
                                <div className="ProductsInfo">
                                    <p Style="margin-right: 20px;">Alias is a board game, where the objective of the players is to explain words to each
                                    other. Hence, Alias is similar to Taboo, but the only forbidden word in the
                                    explanations is the word to be explained. The game is played in teams of varying size,
                                and fits well as a party game for larger crowds. The game is very competitive. </p>
                                <div Style="text-align: right; margin-right: 20px;">
                                        <button  >
                                            <a href="#ff"> Download </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Game two">
                            <div className="ProductsColumn" >
                                <div className="ProductsInfo">
                                    <p Style="margin-left: 20px;">2048 is a single-player sliding block puzzle game designed by Italian web
                                    developer Gabriele Cirulli. The objective of the game is to slide numbered
                                    tiles on a grid to combine them to create a tile with the number 2048;
                                    however,one can continue to play the game after reaching the goal, creating
                                    tiles with larger numbers.
                                    <span> (The game is unavailable because it is in beta testing)</span>
                                    </p>
                                    <div Style="text-align: left; margin-left: 20px;">
                                        <button  >
                                            <a href="#ff"> Download </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="ProductsColumn">
                                <div className="ProductsImage">
                                    <img src={games} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="Game three">
                            <div className="ProductsColumn">
                                <div className="ProductsImage">
                                    <img src={jumper} alt="" />
                                </div>
                            </div>
                            <div className="ProductsColumn" >
                                <div className="ProductsInfo" >
                                    <p Style="margin-right: 20px;">This game is in active development stage. Follow all the news in our Telegram channel.
                                    </p>
                                    <div Style="text-align: right; margin-right: 20px;">
                                        <button  >
                                            <a href="#ff"> Download </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Producs;
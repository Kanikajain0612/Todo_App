import React from 'react'
import Square from './Square'

export default class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			squares: new Array(9).fill(""),
			next: "X",
			winner: ""
		};
	}

	handleClick(i) {
		const squares = this.state.squares.slice(); // Immutability
		if (!squares[i] && !this.state.winner) {
			squares[i] = this.state.next;
			this.setState({
				squares: squares,
				next: this.state.next === "X" ? "O" : "X",
				winner: this.isWinner()
			})
		}
	}

	isWinner() {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]
		let squares = this.state.squares
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}

	checkRow(i) {
		let squares = this.state.squares
		if (!!squares[i] && squares[i] === squares[i+1] && squares[i+1] === squares[i+2]) {
			return true
		}
	}

	checkCol(i) {
		let squares = this.state.squares
		if(!!squares[i] && squares[i] === squares[i + 3] && squares[i + 3] === squares[i + 6]) {
			return true
		}
	}

	checkDiag() {
		let squares = this.state.squares
		if (squares[0] && squares[4] && squares[8]) {
			if (squares[0] === squares[4] && squares[4] === squares[8]) {
				return true
			}
		}
		else {
			if(squares[2] && squares[4] && squares[6]) {
				if(squares[2] === squares[4] && squares[4] === squares[6]) {
					return true
				}
			}
		}
	}

	renderSquare(i) {
		return <Square value={this.state.squares[i]}
						onClick={() => this.handleClick(i)} />;
	}

	render() {
	  const status = `Next player: ${this.state.next}`;

	  return (
		<div>
		  <div className="status">{status}</div>
		  <div className="board-row">
			{this.renderSquare(0)}
			{this.renderSquare(1)}
			{this.renderSquare(2)}
		  </div>
		  <div className="board-row">
			{this.renderSquare(3)}
			{this.renderSquare(4)}
			{this.renderSquare(5)}
		  </div>
		  <div className="board-row">
			{this.renderSquare(6)}
			{this.renderSquare(7)}
			{this.renderSquare(8)}
		  </div>

			{this.state.winner && (
				<p>
					Winner: {this.state.winner}
				</p>
			)}
		</div>
	  );
	}
  }

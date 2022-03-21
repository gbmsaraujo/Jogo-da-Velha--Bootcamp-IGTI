import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  currentPlayer: string = 'O';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  result: string = '';

  processPlay(line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;

      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
        this.result = `O Jogador '${this.winner}' Venceu a Partida!`;
      } 

    }

    if (this.currentPlayer == 'O') {
      this.currentPlayer = 'X';
    } else {
      this.currentPlayer = 'O';
    }
  }

  restart() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] == player &&
        this.board[i][1] == player &&
        this.board[i][2] == player
      ) {
        return true;
      } 
    }

    for (let j = 0; j < this.board.length; j++) {
      if (
        this.board[0][j] == player &&
        this.board[1][j] == player &&
        this.board[2][j] == player
      ) {
        return true;
      }
    }

    if (
      this.board[0][0] == player &&
      this.board[1][1] == player &&
      this.board[2][2] == player
    ) {
      return true;
    }

    if (
      this.board[2][0] == player &&
      this.board[1][1] == player &&
      this.board[0][2] == player
    ) {
      return true;
    }

    return false;
  }
}

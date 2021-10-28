import { Component, OnInit } from '@angular/core'
import { GameControlService } from '../../services/game-control.service'

@Component({
    selector: 'app-game-result',
    templateUrl: './game-result.component.html',
    styleUrls: ['./game-result.component.scss'],
})
export class GameResultComponent implements OnInit {
    constructor(public gameControlService: GameControlService) {}

    ngOnInit(): void {}

    resetGame() {
        this.gameControlService.resetGame()
    }
}

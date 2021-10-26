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

    continueGame() {
        this.gameControlService.setBattleResult(null)
    }

    resetGame() {
        this.gameControlService.setScore(0)
        this.continueGame()
    }
}

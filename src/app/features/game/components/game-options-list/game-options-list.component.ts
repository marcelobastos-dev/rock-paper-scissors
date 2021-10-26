import { Component, OnInit } from '@angular/core'
import { GameOption } from '../../models/game-option.model'
import { GameControlService } from '../../services/game-control.service'

@Component({
    selector: 'app-game-options-list',
    templateUrl: './game-options-list.component.html',
    styleUrls: ['./game-options-list.component.scss'],
})
export class GameOptionsListComponent implements OnInit {
    options = <GameOption[]>[]

    constructor(private gameControlService: GameControlService) {}

    ngOnInit(): void {
        this.options = this.gameControlService.gameOptions
    }

    setUserChoice(gameOption: GameOption) {
        this.gameControlService.setCurrentUserChoice(gameOption)
    }
}

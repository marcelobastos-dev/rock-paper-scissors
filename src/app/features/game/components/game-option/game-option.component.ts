import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { GameOption } from '../../models/game-option.model'

@Component({
    selector: 'app-game-option',
    templateUrl: './game-option.component.html',
    styleUrls: ['./game-option.component.scss'],
})
export class GameOptionComponent implements OnInit {
    @Input() gameOption: GameOption | null = <GameOption>{}
    @Input() isDisabled: boolean = false

    @Output() clicked = new EventEmitter()

    constructor() {}

    ngOnInit(): void {}

    optionClicked() {
        this.clicked.emit(this.gameOption)
    }
}

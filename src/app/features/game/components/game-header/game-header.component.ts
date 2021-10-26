import { Component, OnInit } from '@angular/core'
import { GameControlService } from '../../services/game-control.service'

@Component({
    selector: 'app-game-header',
    templateUrl: './game-header.component.html',
    styleUrls: ['./game-header.component.scss'],
})
export class GameHeaderComponent implements OnInit {
    constructor(public gameControlService: GameControlService) {}

    ngOnInit(): void {}
}

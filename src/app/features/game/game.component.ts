import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { GameControlService } from './services/game-control.service'

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
    private subscription: Subscription = new Subscription()

    showGameOptions: boolean = true

    constructor(public gameControlService: GameControlService) {}

    ngOnInit(): void {
        this.subscription.add(
            this.gameControlService.battleResult$.subscribe({
                next: (res) => {
                    console.log(res)
                    this.showGameOptions = res == null
                },
            })
        )
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { GameControlService } from '../../services/game-control.service'

@Component({
    selector: 'app-game-hands',
    templateUrl: './game-hands.component.html',
    styleUrls: ['./game-hands.component.scss'],
})
export class GameHandsComponent implements OnInit {
    private subscription: Subscription = new Subscription()

    private defaultHandIcon: string = 'rock'

    userHandIcon: string = this.defaultHandIcon
    machineHandIcon: string = this.defaultHandIcon

    isResolvingGame: boolean = false

    constructor(public gameControlService: GameControlService) {}

    ngOnInit(): void {
        this.subscription.add(
            this.gameControlService.currentUserChoice$.subscribe({
                next: (res) => {
                    this.userHandIcon = res.type || this.defaultHandIcon
                },
            })
        )

        this.subscription.add(
            this.gameControlService.currentMachineChoice$.subscribe({
                next: (res) => {
                    this.machineHandIcon = res.type || this.defaultHandIcon
                },
            })
        )

        this.subscription.add(
            this.gameControlService.resolvingGame$.subscribe((resolving) => {
                this.isResolvingGame = resolving
            })
        )

        this.userHandIcon = this.defaultHandIcon
        this.machineHandIcon = this.defaultHandIcon
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}

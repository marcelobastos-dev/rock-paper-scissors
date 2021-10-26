import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { BattleResult } from '../models/battle-result.model'
import { GameOption } from '../models/game-option.model'

@Injectable({
    providedIn: 'root',
})
export class GameControlService {
    readonly gameOptions: GameOption[] = [
        {
            color: 'primary',
            type: 'rock',
            wins: ['scissors'],
        },
        {
            color: 'warning',
            type: 'paper',
            wins: ['rock'],
        },
        {
            color: 'danger',
            type: 'scissors',
            wins: ['paper'],
        },
    ]

    // Score
    private readonly _score = new BehaviorSubject<number>(0)
    readonly score$ = this._score.asObservable()

    // User choice
    private readonly _currentUserChoice = new BehaviorSubject<GameOption>(<GameOption>{})
    readonly currentUserChoice$ = this._currentUserChoice.asObservable()

    // Machine choice
    private readonly _currentMachineChoice = new BehaviorSubject<GameOption>(<GameOption>{})
    readonly currentMachineChoice$ = this._currentMachineChoice.asObservable()

    // Battle result
    private readonly _battleResult = new BehaviorSubject<BattleResult>(null)
    readonly battleResult$ = this._battleResult.asObservable()

    constructor() {}

    // Score
    getScore(): number {
        return this._score.getValue()
    }

    setScore(score: number) {
        this.score = score
    }

    private set score(score: number) {
        this._score.next(score)
    }

    // User choice
    getCurrentUserChoice(): GameOption {
        return this._currentUserChoice.getValue()
    }

    setCurrentUserChoice(gameOption: GameOption) {
        this.currentUserChoice = gameOption
    }

    private set currentUserChoice(gameOption: GameOption) {
        this._currentUserChoice.next(gameOption)
        this.resolveGame()
    }

    // Machine choice
    getCurrentMachineChoice(): GameOption {
        return this._currentMachineChoice.getValue()
    }

    setCurrentMachineChoice(gameOption: GameOption) {
        this.currentMachineChoice = gameOption
    }

    private set currentMachineChoice(gameOption: GameOption) {
        this._currentMachineChoice.next(gameOption)
    }

    // Battle result
    getBattleResult(): BattleResult {
        return this._battleResult.getValue()
    }

    setBattleResult(battleResult: BattleResult) {
        this.battleResult = battleResult
    }

    private set battleResult(battleResult: BattleResult) {
        this._battleResult.next(battleResult)
    }

    // Resolve game
    private resolveGame() {
        const currentUserChoice = this.getCurrentUserChoice()
        const machineChoice = this.getRandomMachineChoice()

        let battleResult: BattleResult = null
        if (currentUserChoice.type === machineChoice.type) {
            battleResult = 'tie'
        } else if (currentUserChoice.wins.indexOf(machineChoice.type) > -1) {
            battleResult = 'won'
            this.setScore(this.getScore() + 1)
        } else {
            battleResult = 'lost'
        }

        this.setCurrentMachineChoice(machineChoice)

        this.battleResult = battleResult
    }

    private getRandomMachineChoice(): GameOption {
        const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
        return this.gameOptions[randomInt(0, this.gameOptions.length - 1)]
    }
}

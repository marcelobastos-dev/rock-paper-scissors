export interface GameOption {
    color: string
    type: GameOptionType
    wins: GameOptionType[]
}

type GameOptionType = 'rock' | 'paper' | 'scissors'

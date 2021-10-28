import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GameComponent } from './game.component'
import { GameRoutingModule } from './game-routing.module';
import { GameOptionComponent } from './components/game-option/game-option.component';
import { GameOptionsListComponent } from './components/game-options-list/game-options-list.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';
import { GameResultComponent } from './components/game-result/game-result.component';
import { GameHandsComponent } from './components/game-hands/game-hands.component'

@NgModule({
    declarations: [GameComponent, GameOptionComponent, GameOptionsListComponent, GameHeaderComponent, GameResultComponent, GameHandsComponent],
    imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}

import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, CharacterData } from '../../models/characters.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-selector',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './character-selector.component.html',
  styleUrl: './character-selector.component.scss'
})
export class CharacterSelectorComponent {

  data!: CharacterData;
  private route = inject(ActivatedRoute)
  activeCharacter = signal<Character | null>(null)
  activeIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data['characterData'];
    this.activeCharacter.set(this.data.characters[this.activeIndex]);
    console.log(this.activeCharacter());
  }

  onPrev(): void {
    --this.activeIndex;
    if (this.activeIndex < 0) this.activeIndex = this.data.characters.length - 1;
    this.activeCharacter.set(this.data.characters[this.activeIndex])
  }

  onNext(): void {
    ++this.activeIndex;
    if (this.activeIndex >= this.data.characters.length) this.activeIndex = 0;
    this.activeCharacter.set(this.data.characters[this.activeIndex])
  }
}

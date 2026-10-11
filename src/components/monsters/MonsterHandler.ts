
interface Spell {
  index: string;
  name: string;
  level: number;
}

interface Action {
  name: string;
  desc: string;
  spellcasting?: {
    spells: Spell[];
  };
}


export class MonsterHandler {
  public monsterAC: number | string = 'N/A';
  public actions: Action[] = [];
  public spells: Spell[] = [];

  constructor(monster: any) {
    this.monsterAC = monster.armor_class?.[0]?.value ?? 'N/A';
    this.processActions(monster.actions);
  }

  private processActions(monsterActions: Action[]): void {
    if (!monsterActions || !Array.isArray(monsterActions)) return;

    monsterActions.forEach(action => {
    if (action.name === "Spellcasting" && action.spellcasting?.spells) {
    this.spells = action.spellcasting.spells;
    } else {
    this.actions.push(action);
    }
    });
  }
}


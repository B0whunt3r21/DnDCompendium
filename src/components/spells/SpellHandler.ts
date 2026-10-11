interface School {
    index: string;
    name: string;
}

export class SpellHandler {
    public school: School | null = null;

    constructor(spell: any) {
        this.school = spell.school ? { index: spell.school.index, name: spell.school.name } : null;
    }

}


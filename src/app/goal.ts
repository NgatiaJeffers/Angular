export class Goal {
    showDescription: boolean;
    constructor(public id: number, public name: string, public decription: string) {
        this.showDescription = false
    }
}

import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        this.container = el(".home-view",
            el(".title", "Klubs Studio"),
            el(".coming-soon", "Coming Soon"),
            el("button", "GO TO KLUBS", { click: () => { window.open("https://klu.bs") } })
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}
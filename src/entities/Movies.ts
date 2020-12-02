import { Movie } from "./Movie";

export class Movies implements Movie {
    public readonly id: String;

    public name: string;
    public image: string;
    public description: string;
    public category: string;
    public producer: string;
    public duration: string;

    constructor(props: Movie[]) {
        Object.assign(this, props);
    }
}
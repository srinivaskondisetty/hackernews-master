export interface Comment {
    by: string;
    dead: boolean;
    id: number;
    parent: number;
    text: string;
    time: number;
    type: string;
}
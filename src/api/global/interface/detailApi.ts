declare module songType {

    export interface Ar {
        id: number;
        name: string;
        tns: any[];
        alias: any[];
    }

    export interface Al {
        id?: number;
        name?: string;
        picUrl?: string;
        tns: any[];
        pic_str: string;
        pic: number;
    }

    export interface Song {
        name?: string;
        id?: number;
        ar?: Ar[];
        al?: Al;
        dt?: number;
        audio?: string;
    }

    export interface Root {
        songs: Song[];
    }
}
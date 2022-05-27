export default cat2;
declare namespace cat2 {
    const type: string;
    const label: string;
    const elements: ({
        type: string;
        text: string;
        scope?: undefined;
        options?: undefined;
    } | {
        type: string;
        scope: string;
        options: {};
        text?: undefined;
    })[];
}

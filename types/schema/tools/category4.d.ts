export default cat4;
declare namespace cat4 {
    const type: string;
    const label: string;
    const elements: ({
        type: string;
        text: string;
        label?: undefined;
        scope?: undefined;
        options?: undefined;
    } | {
        type: string;
        label: string;
        scope: string;
        options: {
            showUnfocusedDescription: boolean;
            detail: {
                type: string;
                elements: ({
                    type: string;
                    elements: {
                        label: string;
                        type: string;
                        scope: string;
                    }[];
                    label?: undefined;
                    scope?: undefined;
                } | {
                    label: string;
                    type: string;
                    scope: string;
                    elements?: undefined;
                })[];
            };
        };
        text?: undefined;
    })[];
}

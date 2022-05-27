export default cat1;
declare namespace cat1 {
    const type: string;
    const label: string;
    const elements: ({
        type: string;
        elements: ({
            type: string;
            text: string;
            label?: undefined;
            scope?: undefined;
            description?: undefined;
            options?: undefined;
            elements?: undefined;
        } | {
            label: string;
            type: string;
            scope: string;
            description: string;
            options: {
                showUnfocusedDescription: boolean;
            };
            text?: undefined;
            elements?: undefined;
        } | {
            type: string;
            label: string;
            elements: {
                type: string;
                label: string;
                description: string;
                scope: string;
                options: {
                    showUnfocusedDescription: boolean;
                };
            }[];
            text?: undefined;
            scope?: undefined;
            description?: undefined;
            options?: undefined;
        } | {
            type: string;
            label: string;
            elements: ({
                type: string;
                text: string;
                label?: undefined;
                scope?: undefined;
                options?: undefined;
            } | {
                label: string;
                type: string;
                scope: string;
                options: {
                    showUnfocusedDescription: boolean;
                    readonly: boolean;
                    elementLabelProp: string;
                    detail: {
                        type: string;
                        elements: {
                            label: string;
                            type: string;
                            scope: string;
                        }[];
                    };
                };
                text?: undefined;
            } | {
                type: string;
                label: string;
                scope: string;
                options: {
                    showUnfocusedDescription: boolean;
                    readonly?: undefined;
                    elementLabelProp?: undefined;
                    detail?: undefined;
                };
                text?: undefined;
            })[];
            text?: undefined;
            scope?: undefined;
            description?: undefined;
            options?: undefined;
        })[];
        label?: undefined;
    } | {
        type: string;
        elements: ({
            type: string;
            text: string;
            decription: string;
            scope?: undefined;
            options?: undefined;
            label?: undefined;
            elements?: undefined;
        } | {
            type: string;
            scope: string;
            options: {
                multi: boolean;
                showUnfocusedDescription: boolean;
            };
            text?: undefined;
            decription?: undefined;
            label?: undefined;
            elements?: undefined;
        } | {
            type: string;
            label: string;
            elements: ({
                type: string;
                text: string;
                label?: undefined;
                scope?: undefined;
                options?: undefined;
                description?: undefined;
            } | {
                type: string;
                label: string;
                scope: string;
                options: {
                    showUnfocusedDescription: boolean;
                    elementLabelProp?: undefined;
                    detail?: undefined;
                };
                text?: undefined;
                description?: undefined;
            } | {
                type: string;
                text: string;
                description: string;
                label?: undefined;
                scope?: undefined;
                options?: undefined;
            } | {
                type: string;
                label: string;
                scope: string;
                options: {
                    elementLabelProp: string;
                    showUnfocusedDescription: boolean;
                    detail: {
                        type: string;
                        elements: ({
                            label: string;
                            type: string;
                            scope: string;
                            description?: undefined;
                            options?: undefined;
                        } | {
                            label: string;
                            description: string;
                            type: string;
                            scope: string;
                            options: {
                                suggestion: string[];
                            };
                        })[];
                    };
                };
                text?: undefined;
                description?: undefined;
            } | {
                type: string;
                scope: string;
                options: {
                    showUnfocusedDescription: boolean;
                    elementLabelProp?: undefined;
                    detail?: undefined;
                };
                text?: undefined;
                label?: undefined;
                description?: undefined;
            })[];
            text?: undefined;
            decription?: undefined;
            scope?: undefined;
            options?: undefined;
        })[];
        label?: undefined;
    } | {
        type: string;
        elements: ({
            type: string;
            text: string;
            decription: string;
            scope?: undefined;
            options?: undefined;
            label?: undefined;
            elements?: undefined;
        } | {
            type: string;
            scope: string;
            options: {
                showUnfocusedDescription: boolean;
                elementLabelProp: string;
                detail: {
                    type: string;
                    elements: {
                        label: string;
                        type: string;
                        scope: string;
                        options: {
                            multi: boolean;
                            showUnfocusedDescription: boolean;
                        };
                    }[];
                };
            };
            text?: undefined;
            decription?: undefined;
            label?: undefined;
            elements?: undefined;
        } | {
            type: string;
            label: string;
            decription: string;
            elements: ({
                type: string;
                label: string;
                scope: string;
                options: {
                    elementLabelProp: string;
                    showUnfocusedDescription: boolean;
                    detail?: undefined;
                };
                text?: undefined;
            } | {
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
                    elementLabelProp: string;
                    showUnfocusedDescription: boolean;
                    detail: {
                        type: string;
                        elements: ({
                            label: string;
                            type: string;
                            scope: string;
                            decription?: undefined;
                        } | {
                            label: string;
                            type: string;
                            scope: string;
                            decription: string;
                        })[];
                    };
                };
                text?: undefined;
            })[];
            text?: undefined;
            scope?: undefined;
            options?: undefined;
        })[];
        label?: undefined;
    } | {
        type: string;
        label: string;
        elements: ({
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
                    elements: {
                        label: string;
                        type: string;
                        scope: string;
                    }[];
                };
            };
            text?: undefined;
        })[];
    })[];
}

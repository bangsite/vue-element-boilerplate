export const isString = (val: unknown): val is string => {
    return typeof value === "string" || value instanceof String;
};

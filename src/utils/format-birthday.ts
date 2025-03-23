export const formatBirthdayShort = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
    });
};

export const formatBirthdayLong = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

export const formatPhone = (phone: string) => {
    return phone.replace(
        /^(\+7)(\d{3})(\d{3})(\d{2})(\d{2})$/,
        "$1 ($2) $3 $4 $5"
    );
};

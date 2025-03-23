export enum ApiFilterValues {
    all = "all",
    android = "android",
    ios = "ios",
    design = "design",
    management = "management",
    qa = "qa",
    back_office = "back_office",
    frontend = "frontend",
    hr = "hr",
    pr = "pr",
    backend = "backend",
    support = "support",
    analytics = "analytics",
}

export enum SortValues {
    alphabet = "alphabet",
    birthday = "birthday",
}

export type ApiUser = {
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userTag: string;
    department: ApiFilterValues;
    position: string;
    birthday: string;
    phone: string;
};

export type ApiUsersRsponse = {
    items: ApiUser[];
};

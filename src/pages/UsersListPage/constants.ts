import { ApiFilterValues, SortValues } from "../../models/types.api";

export const filterValues: ApiFilterValues[] = Object.values(ApiFilterValues);

export const sortValues: SortValues[] = Object.values(SortValues);

export const FilterValuesMap: Record<ApiFilterValues, string> = {
    all: "Все",
    android: "Android",
    ios: "iOS",
    design: "Дизайн",
    management: "Менеджмент",
    qa: "QA",
    back_office: "Бэк-офис",
    frontend: "Frontend",
    hr: "HR",
    pr: "PR",
    backend: "Backend",
    support: "Техподдержка",
    analytics: "Аналитика",
};

export const SortValuesMap: Record<SortValues, string> = {
    alphabet: "По алфавиту",
    birthday: "По дню рождения",
};

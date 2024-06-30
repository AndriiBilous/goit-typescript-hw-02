export interface SearchBarProps {
    onSearch: (topic: string) => Promise<void>;
}
export interface InitialValueForm {
    search: string;
}

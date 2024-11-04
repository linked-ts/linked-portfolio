export interface IFormProps {
    value: string,
    placeholder?: string,
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

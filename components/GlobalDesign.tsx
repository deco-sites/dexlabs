export interface Props {
    padding?: boolean;
    children: any;
}

export default function GlobalDesign({ children, padding = true }: Props) {
    const transitionClass = "transition-all duration-1000 ease-in-out";
    return <div class={`${padding && 'xl:px-24'} s1660:px-0 mx-auto flex-grow ${transitionClass}`}>
        {children}
    </div>
}
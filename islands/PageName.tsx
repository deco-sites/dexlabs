export interface Props {
    pageName: string;
}

import { useEffect } from "preact/hooks";

export default function PageName({ pageName }: Props) {
    useEffect(() => {
        document.title = pageName;
    }, []);
    return <></>
}
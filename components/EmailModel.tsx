export interface Props {
    data: {};
}

export default function EmailModel({ data }: Props) {

    function camelCaseToSentence(camelCaseStr: string) {
        // Adiciona um espaço antes de cada letra maiúscula e converte a string para minúsculas
        const result = camelCaseStr.replace(/([A-Z])/g, ' $1').toLowerCase();
        // Converte a primeira letra para maiúscula
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    return <div>
        {Object.entries(data).map((item) => (
            <div>
                <span>{camelCaseToSentence(item[0]) + ": "}</span>
                <span>{item[1] || ""}</span>
            </div>
        ))}
    </div>
}
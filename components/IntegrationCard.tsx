import Image from "apps/website/components/Image.tsx";

export interface Props {
    image: string;
    title: string;
}

export default function IntegrationCard({ image, title }: Props) {
    return (
        <div>
            <Image
                width={64}
                height={64}
                src={image}
            />
            <p>{title}</p>
        </div>
    )
}
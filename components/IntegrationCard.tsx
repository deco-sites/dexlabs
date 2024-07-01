import Image from "apps/website/components/Image.tsx";

export interface Props {
    image: string;
    title: string;
}

export default function IntegrationCard({ image, title }: Props) {
    return (
        <div class="shadow-custom-box border rounded-md w-32 flex flex-col items-center gap-2 p-2">
            <div class="h-[64px]">
                <Image
                    height={64} // Altura fixa de 64 pixels
                    width={100} // Largura inicial (pode ser ajustada conforme necessário)
                    src={image}
                    class="h-full"
                />
            </div>
            <p class="text-center">{title}</p>
        </div>
    )
}
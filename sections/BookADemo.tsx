import BookADemoForm from "../islands/BookADemoForm.tsx";

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
}

export interface Props {
    Title: string;
    Caption?: string;
    FeaturesTitle?: string;
    Features?: string[];
    FormTitle?: string;
    PrivacyPolicyUrl?: string;
    cta?: CTA;
}

export default function BookADemo({ Title, Caption, FeaturesTitle, Features, FormTitle, PrivacyPolicyUrl, cta }: Props) {
    return (
        <section class="flex flex-wrap md:flex-nowrap pt-24 pb-28">
            <div class="w-full md:w-1/2 mr-8 flex justify-end text-secondary bg-primary rounded-tr-[40px] rounded-br-[40px]">
                <div class="max-w-[670px] p-12">
                    <h2 class="font-medium text-3xl lg:text-6xl">{Title}</h2>
                    <p class="text-xl lg:text-2xl mt-12 mb-24">{Caption}</p>
                    <h2 class="font-medium text-2xl lg:text-3xl mb-4">{FeaturesTitle}</h2>
                    <ul class="list-disc pl-6 mb-24">
                        {Features?.map((feature) => (
                            <li class="text-xl lg:text-2xl">{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-8 flex justify-start text-primary">
                <div class="max-w-[670px]">
                    <h2 class="text-5xl text-primary mt-3 mb-6">{FormTitle}</h2>
                    <BookADemoForm cta={cta} privacyUrl={PrivacyPolicyUrl} />
                </div>
            </div>
        </section>
    )
}
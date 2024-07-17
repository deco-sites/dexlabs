import GlobalDesign from "site/components/GlobalDesign.tsx";

/**
 * @title {{Title}}
 */
export interface Section {
    Title: string;
    features: string[];
}

export interface Props {
    Title: string;
    Caption: string;
    Sections?: Section[];
    id?: string;
}

export default function Features({ Title, Caption, Sections, id }: Props) {
    return (
        <section id={id || ""} class="max-w-[1240px] mx-auto text-primary pt-24">
            <GlobalDesign>
                <h2 class="font-medium text-3xl sm:text-6xl text-center mt-14">{Title}</h2>
                <p class="text-lg sm:text-2xl text-center text-accent mb-14 mt-3.5">{Caption}</p>
                <div class="flex flex-col gap-14">
                    {Sections && Sections.map((section) => (
                        <div class="flex flex-wrap lg:flex-nowrap rounded-[40px] border border-primary min-h-[219px] overflow-hidden">
                            <div class="w-full lg:max-w-[360px] px-4 bg-info-content rounded-[40px] flex flex-col justify-center items-center">
                                <h3 class="text-center font-bold text-3xl max-w-60">{section.Title}</h3>
                            </div>
                            <ul class="flex flex-wrap grow py-10 px-10 list-disc">
                                {section.features.map((feature) => (
                                    <li class="text-lg w-full md:w-1/2 text-primary">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </GlobalDesign>
        </section>
    )
}
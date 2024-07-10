/**
 * @title {{text}}
 */
export interface IStatistic {
    value: string;
    text: string;
}

export interface ILink {
    text: string;
    href: string;
}

export interface IButton {
    text: string;
    href: string;
    outline?: boolean;
}

export interface Props {
    title: string;
    titleCaption?: string;
    caption?: string;
    button: IButton;
    link: ILink;
    statistics?: IStatistic[];
}

export default function StatisticsHero({ title, titleCaption = "", caption = "", button, link, statistics = [] }: Props) {
    return <section class="max-w-[1378px] mx-auto flex flex-wrap items-center gap-0 xl:gap-20 justify-center mb-28">
        <div class="max-w-[625px] p-4 md:p-0">
            <h3 class="text-center xl:text-left text-lg xl:text-xl text-accent font-light">{titleCaption}</h3>
            <h1 class="py-5 font-semibold text-3xl xl:text-[60px] xl:leading-[64px] text-center xl:text-left text-primary">{title}</h1>
            <h2 class="max-w-[630px] mx-auto text-primary text-xl xl:text-2xl font-normal xl:leading-7 text-center xl:text-left">{caption}</h2>
            <div class="flex items-center gap-6 py-8">
                {button && <a
                    href={button.href}
                    target={button.href.includes("http") ? "_blank" : "_self"}
                    class={`font-normal btn btn-primary font-medium rounded-full min-h-10 h-10 text-lg hover:bg-secondary text-secondary hover:text-primary ${button.outline && "btn-outline"
                        }`}
                >
                    {button.text}
                </a>}
                {link && <a
                    href={link.href}
                    target={link.href.includes("http") ? "_blank" : "_self"}
                    class="underline text-primary hover:text-info font-extrabold text-xl flex items-center transition-all duration-200"
                >
                    {link.text}
                    <svg class="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0306 11.401L11.5306 15.901C11.3897 16.0419 11.1986 16.121 10.9994 16.121C10.8001 16.121 10.609 16.0419 10.4681 15.901C10.3272 15.7601 10.2481 15.569 10.2481 15.3697C10.2481 15.1705 10.3272 14.9794 10.4681 14.8385L13.6875 11.6203H4.5C4.30109 11.6203 4.11032 11.5413 3.96967 11.4007C3.82902 11.26 3.75 11.0693 3.75 10.8703C3.75 10.6714 3.82902 10.4807 3.96967 10.34C4.11032 10.1994 4.30109 10.1203 4.5 10.1203H13.6875L10.4694 6.90035C10.3285 6.75945 10.2493 6.56836 10.2493 6.3691C10.2493 6.16984 10.3285 5.97874 10.4694 5.83785C10.6103 5.69695 10.8014 5.6178 11.0006 5.6178C11.1999 5.6178 11.391 5.69695 11.5319 5.83785L16.0319 10.3378C16.1018 10.4076 16.1573 10.4905 16.1951 10.5818C16.2329 10.6731 16.2523 10.7709 16.2522 10.8697C16.252 10.9685 16.2324 11.0662 16.1944 11.1574C16.1564 11.2486 16.1007 11.3314 16.0306 11.401Z" />
                    </svg>
                </a>}
            </div>
        </div>
        <div class="grow xl:max-w-[480px] p-10 bg-neutral rounded-[40px] flex flex-col gap-11 m-4 xl:m-0" style="box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2)">
            {statistics.length && statistics.map((statistic) => (<div class="border-b-2 border-primary">
                <span class="font-black text-3xl xl:text-40 text-left text-primary">{statistic.value}</span>
                <p class="text-xl xl:text-xl text-accent mt-3.5">{statistic.text}</p>
            </div>))}
        </div>
    </section>
}
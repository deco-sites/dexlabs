export interface Link {
    text: string;
    href: string;
}

export interface CTA {
    id?: string;
    href?: string;
    text?: string;
}

/**
 * @title {{Title}}
 */
export interface Plan {
    Title: string;
    caption: string;
    cta?: CTA;
    description: string;
    link?: Link
}

export interface Props {
    plans?: Plan[];
    link?: Link;
}

export default function Plans({ plans, link }: Props) {
    return (
        <section class="max-w-[1240px] mx-auto pb-24">
            <div class="flex flex-wrap gap-11 justify-center">
                {plans && plans.map((plan) => (
                    <div class="w-96 min-h-[390px] flex flex-col items-center border custom-box px-4 py-10 gap-6 text-primary rounded-3xl" style="box-shadow: 0px 2px 12px 0px #14142B14;">
                        <h2 class="font-medium text-5xl text-center">{plan.Title}</h2>
                        <p class="text-lg text-center text-info">{plan.caption}</p>
                        {plan.cta?.text && <a
                            key={plan.cta?.id}
                            id={plan.cta?.id}
                            href={plan.cta?.href || ""}
                            target={plan.cta?.href?.includes("http") ? "_blank" : "_self"}
                            class={`font-normal btn btn-primary !font-bold rounded-full min-h-10 text-sm sm:text-xl bg-secondary hover:bg-primary text-primary hover:text-secondary`}
                        >
                            {plan.cta?.text}
                        </a>}
                        <p class="text-center text-lg">{plan.description}</p>
                        <div class="flex h-full items-end">
                            {plan.link && <a href={plan.link.href || ""} class="underline text-primary hover:text-info font-extrabold text-xl flex items-center transition-all duration-200">
                                {plan.link.text || ""}
                                <svg class="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0306 11.401L11.5306 15.901C11.3897 16.0419 11.1986 16.121 10.9994 16.121C10.8001 16.121 10.609 16.0419 10.4681 15.901C10.3272 15.7601 10.2481 15.569 10.2481 15.3697C10.2481 15.1705 10.3272 14.9794 10.4681 14.8385L13.6875 11.6203H4.5C4.30109 11.6203 4.11032 11.5413 3.96967 11.4007C3.82902 11.26 3.75 11.0693 3.75 10.8703C3.75 10.6714 3.82902 10.4807 3.96967 10.34C4.11032 10.1994 4.30109 10.1203 4.5 10.1203H13.6875L10.4694 6.90035C10.3285 6.75945 10.2493 6.56836 10.2493 6.3691C10.2493 6.16984 10.3285 5.97874 10.4694 5.83785C10.6103 5.69695 10.8014 5.6178 11.0006 5.6178C11.1999 5.6178 11.391 5.69695 11.5319 5.83785L16.0319 10.3378C16.1018 10.4076 16.1573 10.4905 16.1951 10.5818C16.2329 10.6731 16.2523 10.7709 16.2522 10.8697C16.252 10.9685 16.2324 11.0662 16.1944 11.1574C16.1564 11.2486 16.1007 11.3314 16.0306 11.401Z" />
                                </svg>
                            </a>}
                        </div>
                    </div>
                ))}
            </div>
            <div class="flex justify-center mt-12">
                {link && <a href={link.href || ""} class="underline text-primary hover:text-info font-extrabold text-xl flex items-center transition-all duration-200">
                    {link.text || ""}
                    <svg class="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0306 11.401L11.5306 15.901C11.3897 16.0419 11.1986 16.121 10.9994 16.121C10.8001 16.121 10.609 16.0419 10.4681 15.901C10.3272 15.7601 10.2481 15.569 10.2481 15.3697C10.2481 15.1705 10.3272 14.9794 10.4681 14.8385L13.6875 11.6203H4.5C4.30109 11.6203 4.11032 11.5413 3.96967 11.4007C3.82902 11.26 3.75 11.0693 3.75 10.8703C3.75 10.6714 3.82902 10.4807 3.96967 10.34C4.11032 10.1994 4.30109 10.1203 4.5 10.1203H13.6875L10.4694 6.90035C10.3285 6.75945 10.2493 6.56836 10.2493 6.3691C10.2493 6.16984 10.3285 5.97874 10.4694 5.83785C10.6103 5.69695 10.8014 5.6178 11.0006 5.6178C11.1999 5.6178 11.391 5.69695 11.5319 5.83785L16.0319 10.3378C16.1018 10.4076 16.1573 10.4905 16.1951 10.5818C16.2329 10.6731 16.2523 10.7709 16.2522 10.8697C16.252 10.9685 16.2324 11.0662 16.1944 11.1574C16.1564 11.2486 16.1007 11.3314 16.0306 11.401Z" />
                    </svg>
                </a>}
            </div>
        </section>
    )
}
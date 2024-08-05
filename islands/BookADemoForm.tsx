import { useState, useEffect } from 'preact/hooks';
import { invoke } from "../runtime.ts";
import { render } from "apps/resend/utils/reactEmail.ts";
import { JSX } from "preact/jsx-runtime";
import EmailModel from "site/components/EmailModel.tsx";

export interface CTA {
    id?: string;
    text: string;
}

export interface Props {
    privacyUrl?: string;
    cta?: CTA;
    sentMessage?: string
}

export default function BookADemoForm({ cta, privacyUrl, sentMessage }: Props) {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        country: '',
        phoneNumber: '',
        companyName: '',
        role: '',
        howCanWeHelp: '',
        plan: '',
        requestConnector: 'false'
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {

            const response = await invoke.resend.actions.emails.send({
                html: render(<EmailModel data={formData} />, { // Convert your react email template when the action is triggered to HTML using render or pure HTML too
                    pretty: true, // 
                }),
            });

            console.log(response);
            alert(sentMessage || "Sent");
            window.location.href = '/';
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const plan = searchParams.get("plan") || "";
        const requestConnector = searchParams.get("requestConnector") || "false";
        setFormData({ ...formData, plan, requestConnector });
    }, []);

    const inputClass = "shadow-soft-shadow border rounded-3xl h-9 w-full pl-4 focus:outline-none focus:ring-0";

    return (
        <form class="flex flex-wrap gap-[10px] justify-between" onSubmit={handleSubmit}>
            <input type="hidden" name="_cc" value="gustavo.beltrami@dexlabs.io, luca.castellano@dexlabs.io"></input>
            <label class="flex flex-col w-full text-lg sm:text-2xl">
                Work Email
                <input
                    type="email"
                    name="email"
                    class={inputClass}
                    onChange={handleChange}
                    required
                />
            </label>
            <label class="flex flex-col w-full text-lg sm:text-2xl">
                Company name
                <input
                    type="text"
                    name="companyName"
                    class={inputClass}
                    onChange={handleChange}
                />
            </label>
            <label class="flex flex-col w-5/12 text-lg sm:text-2xl">
                First Name
                <input
                    type="text"
                    name="firstName"
                    class={inputClass}
                    onChange={handleChange}
                    required
                />
            </label>
            <label class="flex flex-col w-5/12 text-lg sm:text-2xl">
                Last Name
                <input
                    type="text"
                    name="lastName"
                    class={inputClass}
                    onChange={handleChange}
                    required
                />
            </label>
            <label class="flex flex-col w-5/12 text-lg sm:text-2xl">
                Role
                <input
                    type="text"
                    name="role"
                    class={inputClass}
                    onChange={handleChange}
                />
            </label>
            <label class="flex flex-col w-5/12 text-lg sm:text-2xl">
                Phone Number
                <input
                    type="tel"
                    name="phoneNumber"
                    class={inputClass}
                    onChange={handleChange}
                />
            </label>
            <label class="flex flex-col w-full text-lg sm:text-2xl">
                Country
                <input
                    type="text"
                    name="country"
                    class={inputClass}
                    onChange={handleChange}
                />
            </label>
            <label class="flex flex-col w-full text-lg sm:text-2xl">
                How can we help?
                <input
                    type="text"
                    name="howCanWeHelp"
                    class={inputClass + " min-h-24 my-2"}
                    onChange={handleChange}
                />
            </label>
            <p class="text-primary text-base">By submitting you agree to our <a href={privacyUrl} class="cursor-pointer">Privacy Policy</a></p>
            <div class="w-full h-full flex justify-center items-bottom pt-12">
                <button
                    key={cta?.id}
                    type="submit"
                    id={cta?.id}
                    class={`font-normal btn px-0 font-semibold rounded-full min-h-10 h-10 text-lg border-none transition-all duration-200 bg-primary hover:bg-primary text-secondary hover:text-secondary`
                    }
                >
                    <div class={`flex flex-col px-4 relative hover:-translate-y-full transition-transform duration-500 ease-in-out`}>
                        <span class="flex items-center">{cta?.text}
                            <svg class="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0306 11.401L11.5306 15.901C11.3897 16.0419 11.1986 16.121 10.9994 16.121C10.8001 16.121 10.609 16.0419 10.4681 15.901C10.3272 15.7601 10.2481 15.569 10.2481 15.3697C10.2481 15.1705 10.3272 14.9794 10.4681 14.8385L13.6875 11.6203H4.5C4.30109 11.6203 4.11032 11.5413 3.96967 11.4007C3.82902 11.26 3.75 11.0693 3.75 10.8703C3.75 10.6714 3.82902 10.4807 3.96967 10.34C4.11032 10.1994 4.30109 10.1203 4.5 10.1203H13.6875L10.4694 6.90035C10.3285 6.75945 10.2493 6.56836 10.2493 6.3691C10.2493 6.16984 10.3285 5.97874 10.4694 5.83785C10.6103 5.69695 10.8014 5.6178 11.0006 5.6178C11.1999 5.6178 11.391 5.69695 11.5319 5.83785L16.0319 10.3378C16.1018 10.4076 16.1573 10.4905 16.1951 10.5818C16.2329 10.6731 16.2523 10.7709 16.2522 10.8697C16.252 10.9685 16.2324 11.0662 16.1944 11.1574C16.1564 11.2486 16.1007 11.3314 16.0306 11.401Z" />
                            </svg>
                        </span>
                        <span class={`flex items-center absolute top-full`}>{cta?.text}
                            <svg class="fill-current" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0306 11.401L11.5306 15.901C11.3897 16.0419 11.1986 16.121 10.9994 16.121C10.8001 16.121 10.609 16.0419 10.4681 15.901C10.3272 15.7601 10.2481 15.569 10.2481 15.3697C10.2481 15.1705 10.3272 14.9794 10.4681 14.8385L13.6875 11.6203H4.5C4.30109 11.6203 4.11032 11.5413 3.96967 11.4007C3.82902 11.26 3.75 11.0693 3.75 10.8703C3.75 10.6714 3.82902 10.4807 3.96967 10.34C4.11032 10.1994 4.30109 10.1203 4.5 10.1203H13.6875L10.4694 6.90035C10.3285 6.75945 10.2493 6.56836 10.2493 6.3691C10.2493 6.16984 10.3285 5.97874 10.4694 5.83785C10.6103 5.69695 10.8014 5.6178 11.0006 5.6178C11.1999 5.6178 11.391 5.69695 11.5319 5.83785L16.0319 10.3378C16.1018 10.4076 16.1573 10.4905 16.1951 10.5818C16.2329 10.6731 16.2523 10.7709 16.2522 10.8697C16.252 10.9685 16.2324 11.0662 16.1944 11.1574C16.1564 11.2486 16.1007 11.3314 16.0306 11.401Z" />
                            </svg>
                        </span>
                    </div>

                </button>
            </div>
        </form>
    );
}

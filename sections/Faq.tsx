import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href?: string;
  text?: string;
  outline?: boolean;
}

export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  tagline?: string;
  description?: string;
  cta?: CTA;
  questions?: Question[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title = "FAQs",
  tagline,
  description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  cta,
  questions = [
    {
      title: "Question #1 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #2 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #3 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #4 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #5 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-[900px] lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="flex flex-col gap-10 lg:gap-20 justify-between">
        <div class="flex-none space-y-6">
          <p class="text-accent font-light text-lg md:text-xl text-center">{tagline || ""}</p>
          <p class="text-3xl md:text-6xl leading-snug font-medium text-center">
            {title}
          </p>
          <p class="text-xl md:text-2xl text-center">
            {description}
          </p>
          {cta?.text && <a
            key={cta?.id}
            id={cta?.id}
            href={cta?.href || ""}
            target={cta?.href?.includes("http") ? "_blank" : "_self"}
            class={`font-normal btn btn-primary ${cta.outline && "btn-outline"
              }`}
          >
            {cta?.text}
          </a>}
        </div>
        <div class="flex-auto border-primary border-t">
          {questions?.map((question) => (
            <details class="border-primary border-b group">
              <summary class="text-lg cursor-pointer py-6 flex ">
                <span class="flex-auto">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3.33337V12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.3335 8H12.6668" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </summary>
              <p
                class="leading-relaxed mb-6 group-open:animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

import website, { Props } from "apps/website/mod.ts";
import { Secret } from "apps/website/loaders/secret.ts";
import manifest, { Manifest } from "../manifest.gen.ts";
import { type App as App, type AppContext as AC } from "@deco/deco";
type WebsiteApp = ReturnType<typeof website>;
/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8
 */

export interface AditionalProps extends Props {
    resendApiKey: Secret;
}

export default function Site(
    state: AditionalProps,
): App<Manifest, AditionalProps, [
    WebsiteApp,
]> {
    return {
        state,
        manifest,
        dependencies: [
            website(state),
        ],
    };
}
export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";

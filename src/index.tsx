import { Application, JSX, ParameterType } from "typedoc";

//@ts-ignore
export { version } from "../package.json";

export function load(app: Application): void {
  app.options.addDeclaration({
    name: "scriptSrc",
    type: ParameterType.String,
    help: "Url to external javascript file to inject into the html",
  });

  app.renderer.hooks.on("body.end", (ctx) => {
    const scriptSrc = (ctx.options.getValue("scriptSrc") as string) || "";

    return <script async src={scriptSrc} crossOrigin="anonymous"></script>;
  });
}

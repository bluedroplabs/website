import type { IRichText } from "./RichText.types";

const RICH_TEXT_DEFAULT_PROPS: IRichText = {
  className: "max-w-180 mx-auto",
  content: `
      <h2>Duis aute irure dolor in reprehenderit in <strong>voluptate velit</strong> esse cillum dolore eu fugiat nulla pariatur.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/">sed do eiusmod tempor incididunt</a> ut labore et dolore magna aliqua. <em>Ut enim ad minim veniam</em>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <ul>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
        <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
      </ul>
      <blockquote>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </blockquote>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
    `,
  size: "xl",
};

export const RICH_TEXT_EXAMPLE_PROPS = {
  default: RICH_TEXT_DEFAULT_PROPS,
};

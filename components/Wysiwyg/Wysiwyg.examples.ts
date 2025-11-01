import { INLINE_IMAGE_EXAMPLE_PROPS } from "../Image/InlineImage.examples";
import { METRICS_EXAMPLE_PROPS } from "../Metrics/Metrics.examples";
import { DETAILS_ASIDE_EXAMPLE_PROPS } from "./../DetailsAside/DetailsAside.examples";
import type { IWysiwyg } from "./Wysiwyg.types";

const WYSIWYG_DEFAULT_PROPS: IWysiwyg = {
  details: DETAILS_ASIDE_EXAMPLE_PROPS.default,
  components: [
    {
      type: "RichText",
      content: `
        <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      `,
    },
    {
      type: "Metrics",
      metrics: METRICS_EXAMPLE_PROPS.default.metrics,
    },
    {
      type: "InlineImage",
      image: INLINE_IMAGE_EXAMPLE_PROPS.default.image,
    },
    {
      type: "RichText",
      content: `
        <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <h2>This is an example of the Wysiwyg component rendering rich text content. It supports various HTML elements such as:</h2>
        <ul>
          <li><strong>Headings</strong> (h1 to h6)</li>
          <li><em>Paragraphs</em> with <a href="https://example.com">links</a></li>
          <li>Lists (ordered and unordered)</li>
          <li>Blockquotes</li>
        </ul>
        <blockquote>This is a blockquote example to showcase styling.</blockquote>
        <p>The Wysiwyg component is designed to display rich text content seamlessly alongside other components.</p>
        <p>This is an example of the Wysiwyg component rendering rich text content. It supports various HTML elements such as:</p>
        <ul>
          <li><strong>Headings</strong> (h1 to h6)</li>
          <li><em>Paragraphs</em> with <a href="https://example.com">links</a></li>
          <li>Lists (ordered and unordered)</li>
          <li>Blockquotes</li>
        </ul>
        <blockquote>This is a blockquote example to showcase styling.</blockquote>
        <p>The Wysiwyg component is designed to display rich text content seamlessly alongside other components.</p>
        <p>This is an example of the Wysiwyg component rendering rich text content. It supports various HTML elements such as:</p>
        <ul>
          <li><strong>Headings</strong> (h1 to h6)</li>
          <li><em>Paragraphs</em> with <a href="https://example.com">links</a></li>
          <li>Lists (ordered and unordered)</li>
          <li>Blockquotes</li>
        </ul>
        <blockquote>This is a blockquote example to showcase styling.</blockquote>
        <p>The Wysiwyg component is designed to display rich text content seamlessly alongside other components.</p>
        <p>This is an example of the Wysiwyg component rendering rich text content. It supports various HTML elements such as:</p>
        <ul>
          <li><strong>Headings</strong> (h1 to h6)</li>
          <li><em>Paragraphs</em> with <a href="https://example.com">links</a></li>
          <li>Lists (ordered and unordered)</li>
          <li>Blockquotes</li>
        </ul>
        <blockquote>This is a blockquote example to showcase styling.</blockquote>
        <p>The Wysiwyg component is designed to display rich text content seamlessly alongside other components.</p>
      `,
    },
  ],
};

export const WYSIWYG_EXAMPLE_PROPS = {
  default: WYSIWYG_DEFAULT_PROPS,
};

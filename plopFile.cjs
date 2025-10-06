module.exports = function (plop) {
  // Generate component
  plop.setGenerator("component", {
    description: "Create a new React component (Atomic Design)",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "What kind of component?",
        choices: ["foundation", "atom", "molecule", "organism", "template"],
      },
      {
        type: "input",
        name: "name",
        message: "Component name (e.g., Button, Card, Modal):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        force: true,
        templateFile: "plop-templates/component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        force: true,
        templateFile: "plop-templates/component/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.types.ts",
        force: true,
        templateFile: "plop-templates/component/types.ts.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.examples.ts",
        force: true,
        templateFile: "plop-templates/component/examples.ts.hbs",
      },
    ],
  });
};

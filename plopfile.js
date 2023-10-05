module.exports = function (plop) {
  // controller generator
  plop.setGenerator("tool", {
    description: "Tool Skeleton",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Please enter tool name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "website/docs/tools/{{kebabCase name}}.md",
        templateFile: "plop-templates/tool.hbs",
      },
      {
        type: "add",
        path: "website/docs/examples/{{kebabCase name}}.md",
        templateFile: "plop-templates/example.hbs",
      },
    ],
  });
};

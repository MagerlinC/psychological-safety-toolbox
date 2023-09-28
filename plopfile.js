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
        path: "tools/{{kebabCase name}}.md",
        templateFile: "plop-templates/tool.hbs",
      },
      {
        type: "add",
        path: "tool-examples/{{kebabCase name}}.md",
        templateFile: "plop-templates/example.hbs",
      },
    ],
  });
};

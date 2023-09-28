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
        path: "tools/{{snakeCase name}}.md",
        templateFile: "plop-templates/tool.hbs",
      },
    ],
  });
};

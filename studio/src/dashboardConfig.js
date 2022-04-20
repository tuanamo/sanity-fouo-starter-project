export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62600b1579d90a263d17709d",
                  title: "Sanity Studio",
                  name: "sanity-fouo-starter-project-studio",
                  apiId: "c869c18b-617a-4f10-a58c-953f59c1a390",
                },
                {
                  buildHookId: "62600b1579d90a26a6177107",
                  title: "Blog Website",
                  name: "sanity-fouo-starter-project",
                  apiId: "b17e8777-d716-4e2a-9db1-ef1ab890e649",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tuanamo/sanity-fouo-starter-project",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-fouo-starter-project.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

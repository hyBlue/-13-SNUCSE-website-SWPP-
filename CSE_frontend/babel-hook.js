require("babel-register")({
    presets: ["react",
      [
        "env",
        {
          "modules": false,
          "debug": true
        }
      ],
      "stage-1"
    ]
  });
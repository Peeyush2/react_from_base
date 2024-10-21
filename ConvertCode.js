const profile = `const profile = (
    <div>
      <h1>Hello From React</h1>
    </div>
  );`;

const fs = require("fs");

const res = require("@babel/core").transformSync(profile, {
  plugins: ["@babel/plugin-transform-react-jsx"],
});

console.log(res.code);

fs.writeFileSync("NewCode.js", res.code);

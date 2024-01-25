const heading = React.createElement(
  "h1",
  { id: "heading", className: "hola" },
  "I am a heading tag created in react without cra and npx"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

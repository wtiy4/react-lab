let cv = document.getElementById("root");
let headTitle = <h1 className="Text">Alwaleed Alharbi</h1>;

let adress = (
  <span>
    Jeddah, Saudi Arabia • (+966) 530215274 • waleedbdulaziz@gmail.com •{" "}
  </span>
);

let summary = (
  <h3 className="summary">
    Creative IT graduate with a Bachelor’s degree in Information Technology,
    seeking an position in IT . Adept at web development, with hands-on
    experience in UX/UI, web development ,and programming. Eager to leverage
    academic knowledge and internship experience to contribute to the company’s
    success. My commitment is to adopt the latest web technologies and
    improvement in website functionality and accessibility, aligning with modern
    web standards and customer expectations.
  </h3>
);

let education = (
  <h4>
    Education Bachelor of IT (2019 - 2024), Faculty of Computing & Information
    Technology
  </h4>
);

ReactDOM.render(
  <div>
    {headTitle}
    {adress}
    {summary}
    {education}
  </div>,
  cv
);

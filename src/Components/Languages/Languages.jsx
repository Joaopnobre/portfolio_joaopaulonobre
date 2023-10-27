import "./LanguagesStyles.css";

function Languages() {
  const languages = ["Portuguese", "English", "Spanish"];
  const topics = ["Reed", "Write", "Speak"];
  const levels = {
    Portuguese: ["C2", "C2", "C2"],
    English: ["C1", "C1", "C1"],
    Spanish: ["B2", "B2", "B2"],
  };

  return (
    <>
      <h2>Languages</h2>
      <div className="language-table">
        <table>
          <thead>
            <tr>
              <th></th>
              {topics.map((topic, index) => (
                <th key={index}>{topic}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {languages.map((language, index) => (
              <tr key={index}>
                <td>{language}</td>
                {levels[language].map((level, index) => (
                  <td key={index}>{level}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Languages;

import Details from "./components/Details";
import Toggle from "./components/Toggle";
import { useState } from 'react';

function App() {
  const details = {
    title: ['The WET Codebase', 'Goodby, Clean Code', 'My Decade In Review', 'What Are The React Team Principles'],
    time: ['Sunday 4th, 2020', 'Friday 22nd 2019', 'Saturday 11th 2018', 'Thursday 4th 2015'],
    duration: ['11', '5', '5', '5'],
    task: ['Come waste your time with me', 'Let clean code guide you. Than let it go.', 'A personal reflection', '']
  }
  let theme = '';
  const [defaultTheme, setdefaultTheme] = useState(theme);

  function onChange(defaultTheme) {
    setdefaultTheme(defaultTheme);
  }

  return (
    <div className={`container ${defaultTheme}`}>
      <div className="details">
        <Toggle onChange={onChange} />
        <Details themeChange={defaultTheme} title={details.title[0]} time={details.time[0]} duration={details.duration[0]} task={details.task[0]} />
        <Details themeChange={defaultTheme} title={details.title[1]} time={details.time[1]} duration={details.duration[1]} task={details.task[1]} />
        <Details themeChange={defaultTheme} title={details.title[2]} time={details.time[2]} duration={details.duration[2]} task={details.task[2]} />
        <Details themeChange={defaultTheme} title={details.title[3]} time={details.time[3]} duration={details.duration[3]} task={details.task[3]} />
      </div>
    </div>
  );
}
export default App;
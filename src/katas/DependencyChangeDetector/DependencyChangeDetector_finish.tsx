import { useEffect, useRef, useState } from "react";

type DependencyLoggerProps = {
  propA: string;
  propB: number;
  propC: boolean;
};

const DependencyLogger = ({ propA, propB, propC }: DependencyLoggerProps): JSX.Element => {
  const [changeLog, setChangeLog] = useState<string[]>([]);
  // The DependencyLogger component initializes with current prop values stored in a useRef hook, which persists across re-renders but does not cause re-renders itself
  const prevProps = useRef({ propA, propB, propC });

  // The useEffect hook compares current props with previous values. If there are changes, it updates the changeLog state, which triggers a re-render to display the changes
  useEffect(() => {
      const changes: string[] = [];
      if (prevProps.current.propA !== propA) {
          changes.push(`propA changed from ${prevProps.current.propA} to ${propA}`);
          prevProps.current.propA = propA;
      }
      if (prevProps.current.propB !== propB) {
          changes.push(`propB changed from ${prevProps.current.propB} to ${propB}`);
          prevProps.current.propB = propB;
      }
      if (prevProps.current.propC !== propC) {
          changes.push(`propC changed from ${prevProps.current.propC} to ${propC}`);
          prevProps.current.propC = propC;
      }

      if (changes.length > 0) {
          setChangeLog(prevLog => [...prevLog, ...changes]);
      }
  }, [propA, propB, propC]);

  return (
      <div>
          <h2>DependencyLogger</h2>
          <div>
              <strong>Current Props:</strong>
              <p>propA: {propA}</p>
              <p>propB: {propB}</p>
              <p>propC: {propC.toString()}</p>
          </div>
          <div>
              <h4>Change Log:</h4>
              <ul>
                  {changeLog.map((log, index) => (
                      <li key={index}>{log}</li>
                  ))}
              </ul>
          </div>
      </div>
  );
};


const DependencyChangeDetector = (): React.JSX.Element => {
  const [propA, setPropA] = useState('Initial A');
  const [propB, setPropB] = useState(10);
  const [propC, setPropC] = useState(true);

  return (
      <div>
          <h1>Change Detector</h1>
          <div className="flex gap-2 mt-2">
              <button className="button" onClick={() => setPropA(propA + '+')}>Change Prop A</button>
              <button className="button" onClick={() => setPropB(propB + 1)}>Change Prop B</button>
              <button className="button" onClick={() => setPropC(!propC)}>Change Prop C</button>
          </div>
          <DependencyLogger propA={propA} propB={propB} propC={propC} />
      </div>
  );
};

export {DependencyChangeDetector}

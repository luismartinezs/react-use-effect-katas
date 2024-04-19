import { useState, useRef } from "react";

type DependencyLoggerProps = {
  propA: string;
  propB: number;
  propC: boolean;
};

const DependencyLogger = ({ propA, propB, propC }: DependencyLoggerProps): JSX.Element => {
  const [changeLog, setChangeLog] = useState<string[]>([]);
  const prevProps = useRef({ propA, propB, propC });

  // TODO: Implement useEffect here to detect changes in propA, propB, or propC

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
          <DependencyLogger propA={propA} propB={propB} propC={propC} />
          <div className="flex gap-2 mt-2">
              <button className="button" onClick={() => setPropA(propA + '+')}>Change Prop A</button>
              <button className="button" onClick={() => setPropB(propB + 1)}>Change Prop B</button>
              <button className="button" onClick={() => setPropC(!propC)}>Change Prop C</button>
          </div>
      </div>
  );
};

export {DependencyChangeDetector};

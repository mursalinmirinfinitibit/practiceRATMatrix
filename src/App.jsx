import { mockData } from "./data/data";

console.log(mockData);

const App = () => {
  return (
    <div>
        <table>
           <thead>
              <tr>
                <th className="font-normal text-sm">Technology feature</th>
                {
                  mockData?.technologyFeatureData.map(feature => (
                    <th className='-rotate-90 text-sm font-normal border h-40' key={feature?.id}>{feature?.techFeature}</th>
                  ))
                }
              </tr>
           </thead>
        </table>
    </div>
  );
};

export default App;
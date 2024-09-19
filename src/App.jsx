import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
const mockData = {
  technologyFeatureData: [
    {
      id: 1,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 2,
      techFeature: 'Alarm Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 3,
      techFeature: 'System Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 4,
      techFeature: 'Actuator Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 5,
      techFeature: 'Realtime Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 6,
      techFeature: 'Predictive Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 7,
      techFeature: 'Operational Manag..',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 8,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 9,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 10,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 11,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 12,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 13,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 14,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 15,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 16,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 17,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 18,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 19,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 20,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 21,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 22,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 23,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 24,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 25,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 26,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 27,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 28,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 29,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 30,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 31,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 32,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 33,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 34,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 35,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 36,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 37,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 38,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 39,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 40,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 41,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 42,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 43,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 44,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 45,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 46,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 47,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 48,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
    {
      id: 9,
      techFeature: 'incident Management',
      techSubClass: 'sub class name',
      techClass: 'tech class',
      utilization: 15,
    },
  ],
  initiativeData: [
      {
          id: 101,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 102,
          initiative: 'Establish awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 103,
          initiative: 'Introduce field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 104,
          initiative: 'Produce field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 105,
          initiative: 'Introduce field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 106,
          initiative: 'Consider field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 107,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 108,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 109,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 110,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 111,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 112,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 113,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 114,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 115,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 116,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 117,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 118,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 119,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
      {
          id: 120,
          initiative: 'Improve field awareness',
          capability: 'Manage safety',
          capabilityLevelStart: 1,
          capabilityLevelEnd: 2,
          domain: 'Network Operations',
          businessValue: 80
      },
  ]
};
const App = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="font-bold text-2xl border border-[#641E8C] bg-[#641E8C] text-[#ffffff75]">
              Siemens <br /> Energy
            </th>
            <th className="bg-[#641E8C] border border-[#641E8C]"></th>
            <th className="font-normal text-sm border border-[#501870] [writing-mode:vertical-lr] rotate-180 w-12 bg-[#501870] text-white">
              Technology feature
            </th>
            {mockData?.technologyFeatureData.map((feature) => (
              <th
                className="[writing-mode:vertical-lr] border w-12 h-40 relative before:absolute before:w-full before:h-1 before:bg-[#aee2c5] before:bottom-0 before:left-0"
                key={feature?.id}
              >
                <p className="font-normal text-sm rotate-180 align-bottom">
                  {feature?.techFeature?.length > 17
                    ? feature?.techFeature.slice(0, 17) + "..."
                    : feature?.techFeature}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bg-[#641E8C] border border-[#641E8C]"></td>
            <td className="w-12 h-8 border bg-[#641E8C] border-[#641E8C]"></td>
            <td className="w-12 h-8 border text-sm font-bold bg-[#000000] border-[#000000] text-white text-center">
              UT
            </td>
            {Array.from({ length: 49 }, (_, i) => (
              <td
                key={i}
                className="w-12 h-8 border text-sm font-medium text-center"
              >
                12
              </td>
            ))}
          </tr>
          <tr>
            <td className="w-12 h-8 border text-center text-sm bg-[#501870] border-[#501870] text-white">
              Initiatives
            </td>
            <td className="w-12 h-8 border text-sm font-bold bg-[#000000] border-[#000000] text-white text-center">
              BV
            </td>
            <td className="w-12 h-8 border text-sm font-bold border-[#8A00E5] bg-[#8A00E5] text-white text-center">
              VP
            </td>
            {Array.from({ length: 49 }, (_, i) => (
              <td key={i} className="w-12 h-8 border">
                <div className="flex justify-center items-center">
                  <IoMdArrowDropdown className="text-lg text-[#b3b3b3]" />
                </div>
              </td>
            ))}
          </tr>
          {mockData?.initiativeData.map((initiative) => (
            <tr key={initiative?.id}>
              <td className="border w-[600px] text-sm">
                <div className="flex items-center gap-2 justify-between pr-1">
                  <p className="pl-1">
                    {initiative?.initiative?.length > 16
                      ? initiative?.initiative.slice(0, 16) + "..."
                      : initiative?.initiative}
                  </p>
                  <p className="bg-[#8A00E51A] font-medium text-[#641E8C] px-2 rounded-full flex items-center">
                    {initiative?.capabilityLevelStart} <MdKeyboardArrowRight className="text-[#969696] text-md" /> {" "}
                    {initiative?.capabilityLevelEnd}
                  </p>
                </div>
              </td>
              <td className="w-12 h-8 border text-center text-sm font-semibold">
                80
              </td>
              <td className="w-12 h-8 border text-center text-sm">
                <div className="flex justify-center items-center">
                  <IoMdArrowDropdown className="text-lg text-[#b3b3b3]" />
                </div>
              </td>
              {Array.from({ length: 49 }, (_, i) => (
                <td
                  key={i}
                  className="w-12 h-8 border border-white bg-[#f4e6fc]"
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

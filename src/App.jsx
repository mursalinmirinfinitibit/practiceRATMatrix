import { IoMdArrowDropdown } from "react-icons/io";
import { mockData } from "./data/data";
import { MdKeyboardArrowRight } from "react-icons/md";

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

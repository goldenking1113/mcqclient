import * as Tabs from "@radix-ui/react-tabs";
import MCQ from "./MCQ";
import Coding from "./Coding";
import All from "./All"; // Ensure All component is imported

const tabItems = [
  "MCQ",
  "Coding",
  "All",
];

export default () => (
  <Tabs.Root
    className="max-w-screen-xl mx-auto px-4 md:px-8"
    defaultValue="MCQ"
  >
    <Tabs.List
      className="w-full border-b flex items-center gap-x-3 overflow-x-auto text-sm"
      aria-label="Manage your account"
    >
      {tabItems.map((item, idx) => (
        <Tabs.Trigger
          key={idx}
          className="group outline-none py-1.5 border-b-2 border-white text-gray-500 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
          value={item}
        >
          <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-indigo-600 group-hover:bg-gray-50 group-active:bg-gray-100 font-medium">
            {item}
          </div>
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    {tabItems.map((item, idx) => (
      <Tabs.Content key={idx} className="py-6" value={item}>
        {item === "MCQ" && <MCQ />}
        {item === "Coding" && <Coding />}
        {item === "All" && <All />}
      </Tabs.Content>
    ))}
  </Tabs.Root>
);
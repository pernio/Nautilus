import { selectedPrompt } from "../../src/config/SelectedPrompt";
import usePrompts from "../../src/hooks/usePrompts";

export default function Prompts() {
  const { selectedType, setSelectedType } = usePrompts();

  return (
    <div className="px-10">
      <h1 className="text-2xl text-[36px] py-8">Prompts</h1>
      <p>Generate prompts for your manuscript</p>
      <ul className="flex flex-row gap-x-3 mt-4">
        {selectedPrompt.map((type) => (
          <li key={type.title}>
            <button
              className={
                "px-3 py-2 pointer-cursor rounded-xl hover:cursor-pointer flex flex-row gap-x-2 " +
                (selectedType === type.title ? "active-prompt" : "bg-[#f3f4f6]")
              }
              onClick={() => setSelectedType(type.title)}
            >
              <span className="material-symbols-rounded text-[14px]">
                {type.icon}
              </span>
              {type.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
import { selectedPrompt } from "../../src/config/SelectedPrompt";

export default function usePrompts() {
  const [selectedType, setSelectedType] = useState<string>(
    selectedPrompt[0].title,
  );

  return {
    selectedType,
    setSelectedType,
  };
}

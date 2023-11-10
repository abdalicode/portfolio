import {
  Half2Icon,
  MagicWandIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { IconType } from "./ToggleMode.type";
import { isThemeValid } from "./ToggleMode.util";

const useToggleMode = () => {
  const { setTheme, theme } = useTheme();

  const handleChangeTheme = {
    dark() {
      setTheme("dark");
    },
    light() {
      setTheme("light");
    },
    system() {
      setTheme("system");
    },
  };
  const checked = {
    system: theme === "system",
    light: theme === "light",
    dark: theme === "dark",
  };
  const ToggleIcon: IconType = isThemeValid(theme)
    ? ({ dark: MoonIcon, light: SunIcon, system: Half2Icon }[
        theme as string
      ] as IconType)
    : Half2Icon;
  const themeMode = isThemeValid(theme)
    ? { system: "OS Default", light: "Light", dark: "Dark" }[theme as string]
    : "OS Default";
  return {
    handleChangeTheme,
    checked,
    ToggleIcon,
    themeMode,
  };
};

export default useToggleMode;

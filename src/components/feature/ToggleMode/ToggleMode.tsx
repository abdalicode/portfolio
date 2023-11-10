"use client";

import * as React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/common";

import useToggleMode from "./ToggleMode.hook";

function ToggleMode() {
  const { checked, handleChangeTheme, ToggleIcon, themeMode } = useToggleMode();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline" size="icon" asChild>
                <ToggleIcon className="w-8 h-8 p-2" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{themeMode}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-w-2 min-w-min"
        side="bottom"
        align="end"
      >
        <DropdownMenuCheckboxItem
          checked={checked.system}
          onCheckedChange={handleChangeTheme.system}
          className="text-xs"
        >
          OS Default
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={checked.light}
          onCheckedChange={handleChangeTheme.light}
          className="text-xs"
        >
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={checked.dark}
          onCheckedChange={handleChangeTheme.dark}
          className="text-xs"
        >
          Dark
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ToggleMode;

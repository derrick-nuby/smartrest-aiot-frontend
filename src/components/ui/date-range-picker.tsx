"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DateRangePickerProps {
  value?: { from: Date; to: Date; };
  onChange?: (range: { from: Date; to: Date; }) => void;
  align?: "start" | "center" | "end";
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function DateRangePicker({
  value,
  onChange,
  align = "start",
  className,
  placeholder = "Pick a date range",
  disabled = false,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: value?.from,
    to: value?.to,
  });

  React.useEffect(() => {
    if (value) {
      setDate({
        from: value.from,
        to: value.to,
      });
    }
  }, [value]);

  const handleSelect = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
    if (selectedDate?.from && selectedDate?.to && onChange) {
      onChange({
        from: selectedDate.from,
        to: selectedDate.to,
      });
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground", className)}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={align}>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Alternative simpler version with preset ranges
export function DateRangePickerWithPresets({
  value,
  onChange,
  align = "start",
  className,
  placeholder = "Pick a date range",
  disabled = false,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: value?.from,
    to: value?.to,
  });

  React.useEffect(() => {
    if (value) {
      setDate({
        from: value.from,
        to: value.to,
      });
    }
  }, [value]);

  const handleSelect = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
    if (selectedDate?.from && selectedDate?.to && onChange) {
      onChange({
        from: selectedDate.from,
        to: selectedDate.to,
      });
    }
  };

  const handlePresetSelect = (preset: { from: Date; to: Date; }) => {
    setDate(preset);
    if (onChange) {
      onChange(preset);
    }
  };

  const presets = [
    {
      label: "Today",
      value: {
        from: new Date(),
        to: new Date(),
      },
    },
    {
      label: "Yesterday",
      value: {
        from: addDays(new Date(), -1),
        to: addDays(new Date(), -1),
      },
    },
    {
      label: "Last 7 days",
      value: {
        from: addDays(new Date(), -6),
        to: new Date(),
      },
    },
    {
      label: "Last 30 days",
      value: {
        from: addDays(new Date(), -29),
        to: new Date(),
      },
    },
    {
      label: "This month",
      value: {
        from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        to: new Date(),
      },
    },
    {
      label: "Last month",
      value: {
        from: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
        to: new Date(new Date().getFullYear(), new Date().getMonth(), 0),
      },
    },
  ];

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn("w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground", className)}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={align}>
          <div className="flex">
            <div className="flex flex-col gap-2 p-3 border-r">
              <div className="text-sm font-medium">Presets</div>
              {presets.map((preset) => (
                <Button
                  key={preset.label}
                  variant="ghost"
                  className="justify-start text-sm h-auto p-2"
                  onClick={() => handlePresetSelect(preset.value)}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
            <div>
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={handleSelect}
                numberOfMonths={2}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

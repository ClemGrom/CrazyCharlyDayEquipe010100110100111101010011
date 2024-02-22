"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Component() {
  const handleSelectChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-850">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Ateliers disponibles
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Glissez-déposez la liste des ateliers par ordre de préférence
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Label>1.</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choisir un thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="FR">Française</SelectItem>
                  <SelectItem value="IT">Italienne</SelectItem>
                  <SelectItem value="JP">Japonaise</SelectItem>
                  <SelectItem value="MEX">Mexicaine</SelectItem>
                  <SelectItem value="GR">Grecque</SelectItem>
                  <SelectItem value="OR">Orientale</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Label>2.</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choisir un thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="FR">Française</SelectItem>
                  <SelectItem value="IT">Italienne</SelectItem>
                  <SelectItem value="JP">Japonaise</SelectItem>
                  <SelectItem value="MEX">Mexicaine</SelectItem>
                  <SelectItem value="GR">Grecque</SelectItem>
                  <SelectItem value="OR">Orientale</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Label>3.</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choisir un thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="FR">Française</SelectItem>
                  <SelectItem value="IT">Italienne</SelectItem>
                  <SelectItem value="JP">Japonaise</SelectItem>
                  <SelectItem value="MEX">Mexicaine</SelectItem>
                  <SelectItem value="GR">Grecque</SelectItem>
                  <SelectItem value="OR">Orientale</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Label>4.</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choisir un thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="FR">Française</SelectItem>
                  <SelectItem value="IT">Italienne</SelectItem>
                  <SelectItem value="JP">Japonaise</SelectItem>
                  <SelectItem value="MEX">Mexicaine</SelectItem>
                  <SelectItem value="GR">Grecque</SelectItem>
                  <SelectItem value="OR">Orientale</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Label>5.</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choisir un thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="FR">Française</SelectItem>
                  <SelectItem value="IT">Italienne</SelectItem>
                  <SelectItem value="JP">Japonaise</SelectItem>
                  <SelectItem value="MEX">Mexicaine</SelectItem>
                  <SelectItem value="GR">Grecque</SelectItem>
                  <SelectItem value="OR">Orientale</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Label>6.</Label>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choisir un thème" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="FR">Française</SelectItem>
                  <SelectItem value="IT">Italienne</SelectItem>
                  <SelectItem value="JP">Japonaise</SelectItem>
                  <SelectItem value="MEX">Mexicaine</SelectItem>
                  <SelectItem value="GR">Grecque</SelectItem>
                  <SelectItem value="OR">Orientale</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full max-w-xs">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const RequestForm = () => {
  return (
    <div className="flex flex-col">
      <div className="flex m-1 rounded-md overflow-hidden">
        <Select>
          <SelectTrigger className="rounded-none w-24">
            <SelectValue placeholder="method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GET">GET</SelectItem>
            <SelectItem value="POST">POST</SelectItem>
            <SelectItem value="PUT">PUT</SelectItem>
            <SelectItem value="DELETE">DELETE</SelectItem>
            <SelectItem value="PATCH">PATCH</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Ex: https://localhost:3000" className="rounded-none border-y-border" />
        <Button variant={"default"} className="rounded-none">
          Send
        </Button>
      </div>
    </div>
  );
};

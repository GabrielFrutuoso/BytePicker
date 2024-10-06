import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import useRequestStore from "@/store/RequestStore";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";

export const RequestForm = () => {
  const [currentTab, setCurrentTab] = useState("body");
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const { data, setData, body, setBody, responseStatus, setResponseStatus } = useRequestStore();

  const handleSubmit = async () => {
    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
        body: method !== 'GET' ? JSON.stringify(body) : null,
      });

      if (!res.ok) {
        const errorMessage = `HTTP error! status: ${res.status} - ${res.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }     
      await setResponseStatus(res.status);
      console.log('Response status: ', responseStatus);
      const dataFetched = await res.json();
      await setData(dataFetched)
      console.log('data: ', data);      
    } catch (error) {
      console.error('Error:', responseStatus);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex m-1 rounded-md overflow-hidden">
        <Select value={method} onValueChange={(e) => setMethod(e)}>
          <SelectTrigger className="rounded-none w-24">
            <SelectValue placeholder="Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GET">GET</SelectItem>
            <SelectItem value="POST">POST</SelectItem>
            <SelectItem value="PUT">PUT</SelectItem>
            <SelectItem value="DELETE">DELETE</SelectItem>
            <SelectItem value="PATCH">PATCH</SelectItem>
          </SelectContent>
        </Select>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="url"
          placeholder="Ex: https://localhost:3000"
          className="rounded-none border-y-border"
        />
        <Button onClick={async () => await handleSubmit()} variant={"default"} className="rounded-none">
          Send
        </Button>
      </div>
      <Tabs defaultValue="body">
        <TabsList className="grid w-full grid-cols-2 p-0">
          <TabsTrigger
            className={`${
              currentTab === "body" ? "bg-foreground text-secondary" : ""
            }`}
            onClick={() => setCurrentTab("body")}
            value="body"
          >
            body
          </TabsTrigger>
          <TabsTrigger
            className={`${
              currentTab === "auth" ? "bg-foreground text-secondary" : ""
            }`}
            onClick={() => setCurrentTab("auth")}
            value="auth"
          >
            auth
          </TabsTrigger>
        </TabsList>
        <TabsContent className="p-1 h-[84vh]" value="body">
          <Textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="resize-none h-full"
            placeholder="body"
          />
        </TabsContent>
        <TabsContent className="p-1 h-[85.2vh]" value="auth">
          auth
        </TabsContent>
      </Tabs>
    </div>
  );
};

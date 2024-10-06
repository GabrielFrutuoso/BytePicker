import { create } from "zustand";

interface RequestStore {
  data: any
  method: string;
  url: string;
  body: string;
  auth: string;
  responseStatusText?: string; // Properly typed responseStatusText
  responseStatus?: number; // Added responseStatus
  setData: (data: any) => void
  setMethod: (method: string) => void;
  setUrl: (url: string) => void;
  setBody: (body: string) => void;
  setAuth: (auth: string) => void;
  setResponseStatusText: (responseStatusText: string) => void; // Properly typed setResponse method
  setResponseStatus: (responseStatus: number) => void; // Added setResponseStatus method
}

const useRequestStore = create<RequestStore>((set) => ({
  data: null,  
  method: "GET",
  url: "",
  body: "",
  auth: "",
  responseStatusText: undefined,
  responseStatus: undefined, // Initialized responseStatus
  setData: (data) => set({ data }),
  setMethod: (method) => set({ method }),
  setUrl: (url) => set({ url }),
  setBody: (body) => set({ body }),
  setAuth: (auth) => set({ auth }),
  setResponseStatusText: (responseStatusText) => set({ responseStatusText }),
  setResponseStatus: (responseStatus) => set({ responseStatus }), // Added setResponseStatus implementation
}));

export default useRequestStore;

import { Barcode, Codesandbox, LoaderIcon } from "lucide-react";

function LoaderUI() {
  // h-16 + 1 for border in navbar => 65px
  return (
    <div className="h-[calc(100vh-4rem-1px)] flex items-center justify-center">
      <Codesandbox className="h-12 w-12 animate-bounce text-muted-foreground" />
      
    </div>
  );
}
export default LoaderUI;
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Payment, columns } from "@/components/payments/columns";
import { DataTable } from "@/components/payments/data-table";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-prose mx-auto py-20 items-center flex flex-col gap-6">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <DataTable
        columns={columns}
        data={
          [
            {
              id: "1",
              status: "processing",
              amount: 100,
              email: "email",
            },
          ] as Payment[]
        }
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
